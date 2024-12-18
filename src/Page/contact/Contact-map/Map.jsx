import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMapComponent = () => {
    const mapState = {
        center: [43.238949, 76.889709], // Координаты центра карты (пример: Алматы)
        zoom: 10, // Уровень приближения
    };

    return (
        <YMaps>
            <div style={{ width: "100%", height: "400px" }}>
                <Map defaultState={mapState} width="100%" height="100%">
                    {/* Пример метки на карте */}
                    <Placemark geometry={[43.238949, 76.889709]} />
                </Map>
            </div>
        </YMaps>
    );
};

export default YandexMapComponent;
