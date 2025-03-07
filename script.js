import creepyface from 'creepyface'

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img')

    const cancel = creepyface(img, {
        // Image URL to display on hover
        hover: 'https://creepyface.io/img/nala/hover',
        // Each of the images looking at a given direction
        looks: [
            { angle: 0, src: 'https://creepyface.io/img/nala/0' },
            { angle: 45, src: 'https://creepyface.io/img/nala/45' },
            { angle: 90, src: 'https://creepyface.io/img/nala/90' },
            { angle: 135, src: 'https://creepyface.io/img/nala/135' },
            { angle: 180, src: 'https://creepyface.io/img/nala/180' },
            { angle: 225, src: 'https://creepyface.io/img/nala/225' },
            { angle: 270, src: 'https://creepyface.io/img/nala/270' },
            { angle: 315, src: 'https://creepyface.io/img/nala/315' }
        ],
        // Time (in ms) to restore the default image after the last input
        timeToDefault: 1000,
        // The angle (in degrees) inside which the pointer will be detected
        fieldOfVision: 150
    });

    // At some point restore the original image and stop creepyface
    cancel();
});