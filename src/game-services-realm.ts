// https://www.terraform.io/docs/providers/google/r/game_services_realm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GameServicesRealmConfig extends TerraformMetaArguments {
  /** Human readable description of the realm. */
  readonly description?: string;
  /** The labels associated with this realm. Each label is a key-value pair. */
  readonly labels?: { [key: string]: string };
  /** Location of the Realm. */
  readonly location?: string;
  readonly project?: string;
  /** GCP region of the Realm. */
  readonly realmId: string;
  /** Required. Time zone where all realm-specific policies are evaluated. The value of
this field must be from the IANA time zone database:
https://www.iana.org/time-zones. */
  readonly timeZone: string;
  /** timeouts block */
  readonly timeouts?: GameServicesRealmTimeouts;
}
export interface GameServicesRealmTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GameServicesRealm extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameServicesRealmConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_realm',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._realmId = config.realmId;
    this._timeZone = config.timeZone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId: string;
  public get realmId() {
    return this._realmId;
  }
  public set realmId(value: string) {
    this._realmId = value;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone: string;
  public get timeZone() {
    return this._timeZone;
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameServicesRealmTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GameServicesRealmTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      labels: this._labels,
      location: this._location,
      project: this._project,
      realm_id: this._realmId,
      time_zone: this._timeZone,
      timeouts: this._timeouts,
    };
  }
}
