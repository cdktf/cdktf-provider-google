// https://www.terraform.io/docs/providers/google/r/scc_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SccSourceConfig extends TerraformMetaArguments {
  /** The description of the source (max of 1024 characters). */
  readonly description?: string;
  /** The source’s display name. A source’s display name must be unique
amongst its siblings, for example, two sources with the same parent
can't share the same display name. The display name must start and end
with a letter or digit, may contain letters, digits, spaces, hyphens,
and underscores, and can be no longer than 32 characters. */
  readonly displayName: string;
  /** The organization whose Cloud Security Command Center the Source
lives in. */
  readonly organization: string;
  /** timeouts block */
  readonly timeouts?: SccSourceTimeouts;
}
export interface SccSourceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class SccSource extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SccSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_scc_source',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._organization = config.organization;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: false, optional: false, required: true
  private _organization: string;
  public get organization() {
    return this._organization;
  }
  public set organization(value: string) {
    this._organization = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SccSourceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SccSourceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      organization: this._organization,
      timeouts: this._timeouts,
    };
  }
}
