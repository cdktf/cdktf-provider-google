// https://www.terraform.io/docs/providers/google/r/app_engine_application_url_dispatch_rules.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppEngineApplicationUrlDispatchRulesConfig extends TerraformMetaArguments {
  readonly project?: string;
  /** dispatch_rules block */
  readonly dispatchRules: AppEngineApplicationUrlDispatchRulesDispatchRules[];
  /** timeouts block */
  readonly timeouts?: AppEngineApplicationUrlDispatchRulesTimeouts;
}
export interface AppEngineApplicationUrlDispatchRulesDispatchRules {
  /** Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*". */
  readonly domain?: string;
  /** Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters. */
  readonly path: string;
  /** Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters. */
  readonly service: string;
}
export interface AppEngineApplicationUrlDispatchRulesTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AppEngineApplicationUrlDispatchRules extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppEngineApplicationUrlDispatchRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_application_url_dispatch_rules',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._dispatchRules = config.dispatchRules;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // dispatch_rules - computed: false, optional: false, required: true
  private _dispatchRules: AppEngineApplicationUrlDispatchRulesDispatchRules[];
  public get dispatchRules() {
    return this._dispatchRules;
  }
  public set dispatchRules(value: AppEngineApplicationUrlDispatchRulesDispatchRules[]) {
    this._dispatchRules = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineApplicationUrlDispatchRulesTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppEngineApplicationUrlDispatchRulesTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
      dispatch_rules: this._dispatchRules,
      timeouts: this._timeouts,
    };
  }
}
