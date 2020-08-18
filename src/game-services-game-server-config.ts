// https://www.terraform.io/docs/providers/google/r/game_services_game_server_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GameServicesGameServerConfigConfig extends TerraformMetaArguments {
  /** A unique id for the deployment config. */
  readonly configId: string;
  /** A unique id for the deployment. */
  readonly deploymentId: string;
  /** The description of the game server config. */
  readonly description?: string;
  /** The labels associated with this game server config. Each label is a
key-value pair. */
  readonly labels?: { [key: string]: string };
  /** Location of the Deployment. */
  readonly location?: string;
  readonly project?: string;
  /** fleet_configs block */
  readonly fleetConfigs: GameServicesGameServerConfigFleetConfigs[];
  /** scaling_configs block */
  readonly scalingConfigs?: GameServicesGameServerConfigScalingConfigs[];
  /** timeouts block */
  readonly timeouts?: GameServicesGameServerConfigTimeouts;
}
export interface GameServicesGameServerConfigFleetConfigs {
  /** The fleet spec, which is sent to Agones to configure fleet.
The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

* fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
* fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'. */
  readonly fleetSpec: string;
  /** The name of the FleetConfig. */
  readonly name?: string;
}
export interface GameServicesGameServerConfigScalingConfigsSchedules {
  /** The duration for the cron job event. The duration of the event is effective
after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  readonly cronJobDuration?: string;
  /** The cron definition of the scheduled event. See
https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as
defined by the realm. */
  readonly cronSpec?: string;
  /** The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  readonly endTime?: string;
  /** The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  readonly startTime?: string;
}
export interface GameServicesGameServerConfigScalingConfigsSelectors {
  /** Set of labels to group by. */
  readonly labels?: { [key: string]: string };
}
export interface GameServicesGameServerConfigScalingConfigs {
  /** Fleet autoscaler spec, which is sent to Agones.
Example spec can be found :
https://agones.dev/site/docs/reference/fleetautoscaler/ */
  readonly fleetAutoscalerSpec: string;
  /** The name of the ScalingConfig */
  readonly name: string;
  /** schedules block */
  readonly schedules?: GameServicesGameServerConfigScalingConfigsSchedules[];
  /** selectors block */
  readonly selectors?: GameServicesGameServerConfigScalingConfigsSelectors[];
}
export interface GameServicesGameServerConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class GameServicesGameServerConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameServicesGameServerConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configId = config.configId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._fleetConfigs = config.fleetConfigs;
    this._scalingConfigs = config.scalingConfigs;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId: string;
  public get configId() {
    return this._configId;
  }
  public set configId(value: string) {
    this._configId = value;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId: string;
  public get deploymentId() {
    return this._deploymentId;
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // fleet_configs - computed: false, optional: false, required: true
  private _fleetConfigs: GameServicesGameServerConfigFleetConfigs[];
  public get fleetConfigs() {
    return this._fleetConfigs;
  }
  public set fleetConfigs(value: GameServicesGameServerConfigFleetConfigs[]) {
    this._fleetConfigs = value;
  }

  // scaling_configs - computed: false, optional: true, required: false
  private _scalingConfigs?: GameServicesGameServerConfigScalingConfigs[];
  public get scalingConfigs() {
    return this._scalingConfigs;
  }
  public set scalingConfigs(value: GameServicesGameServerConfigScalingConfigs[] | undefined) {
    this._scalingConfigs = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameServicesGameServerConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GameServicesGameServerConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: this._configId,
      deployment_id: this._deploymentId,
      description: this._description,
      labels: this._labels,
      location: this._location,
      project: this._project,
      fleet_configs: this._fleetConfigs,
      scaling_configs: this._scalingConfigs,
      timeouts: this._timeouts,
    };
  }
}
