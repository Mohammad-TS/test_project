document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // اطمینان از شفافیت پس‌زمینه
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.id = 'starfield';
    document.body.appendChild(renderer.domElement);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.005,
        sizeAttenuation: true
    });

    const starVertices = [];
    for (let i = 0; i < 5000; i++) {
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);
        starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    function animate() {
        requestAnimationFrame(animate);
        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.0005;
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('login');
    var btn = document.getElementById('loginLink'); // فرض بر اینکه شناسه‌ای برای دکمه ورود تعریف کرده‌اید
    var span = document.querySelector('.mod-close');

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('login');
    var btn = document.getElementById('loginBtn'); // دکمه‌ای که برای باز کردن مودال استفاده می‌شود
    var span = document.querySelector('.mod-close'); // دکمه بستن مودال

    // اطمینان حاصل کنید که مودال در ابتدا پنهان است
    modal.style.display = "none";

    // نمایش مودال با کلیک بر روی دکمه
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // بستن مودال با کلیک بر روی دکمه بستن (×)
    span.onclick = function () {
        modal.style.display = "none";
    }

    // بستن مودال با کلیک بر روی پس‌زمینه
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
