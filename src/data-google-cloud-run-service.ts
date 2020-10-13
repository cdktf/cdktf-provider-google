// https://www.terraform.io/docs/providers/google/r/data_google_cloud_run_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleCloudRunServiceConfig extends TerraformMetaArguments {
  /** The location of the cloud run instance. eg us-central1 */
  readonly location: string;
  /** Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  readonly project?: string;
}
export class DataGoogleCloudRunServiceMetadata extends ComplexComputedList {

  // annotations - computed: true, optional: false, required: true
  public get annotations() {
    return 'not implemented' as any;
  }

  // generation - computed: true, optional: false, required: true
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: true, optional: false, required: true
  public get labels() {
    return 'not implemented' as any;
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_version - computed: true, optional: false, required: true
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // uid - computed: true, optional: false, required: true
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export class DataGoogleCloudRunServiceStatusConditions extends ComplexComputedList {

  // message - computed: true, optional: false, required: true
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: true
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleCloudRunServiceStatus extends ComplexComputedList {

  // conditions - computed: true, optional: false, required: true
  public get conditions() {
    return 'not implemented' as any;
  }

  // latest_created_revision_name - computed: true, optional: false, required: true
  public get latestCreatedRevisionName() {
    return this.getStringAttribute('latest_created_revision_name');
  }

  // latest_ready_revision_name - computed: true, optional: false, required: true
  public get latestReadyRevisionName() {
    return this.getStringAttribute('latest_ready_revision_name');
  }

  // observed_generation - computed: true, optional: false, required: true
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}
export class DataGoogleCloudRunServiceTemplateMetadata extends ComplexComputedList {

  // annotations - computed: true, optional: false, required: true
  public get annotations() {
    return 'not implemented' as any;
  }

  // generation - computed: true, optional: false, required: true
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: true, optional: false, required: true
  public get labels() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_version - computed: true, optional: false, required: true
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // uid - computed: true, optional: false, required: true
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnv extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef extends ComplexComputedList {

  // local_object_reference - computed: true, optional: false, required: true
  public get localObjectReference() {
    return 'not implemented' as any;
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef extends ComplexComputedList {

  // local_object_reference - computed: true, optional: false, required: true
  public get localObjectReference() {
    return 'not implemented' as any;
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom extends ComplexComputedList {

  // config_map_ref - computed: true, optional: false, required: true
  public get configMapRef() {
    return 'not implemented' as any;
  }

  // prefix - computed: true, optional: false, required: true
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // secret_ref - computed: true, optional: false, required: true
  public get secretRef() {
    return 'not implemented' as any;
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersPorts extends ComplexComputedList {

  // container_port - computed: true, optional: false, required: true
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersResources extends ComplexComputedList {

  // limits - computed: true, optional: false, required: true
  public get limits() {
    return 'not implemented' as any;
  }

  // requests - computed: true, optional: false, required: true
  public get requests() {
    return 'not implemented' as any;
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainers extends ComplexComputedList {

  // args - computed: true, optional: false, required: true
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: true
  public get env() {
    return 'not implemented' as any;
  }

  // env_from - computed: true, optional: false, required: true
  public get envFrom() {
    return 'not implemented' as any;
  }

  // image - computed: true, optional: false, required: true
  public get image() {
    return this.getStringAttribute('image');
  }

  // ports - computed: true, optional: false, required: true
  public get ports() {
    return 'not implemented' as any;
  }

  // resources - computed: true, optional: false, required: true
  public get resources() {
    return 'not implemented' as any;
  }

  // working_dir - computed: true, optional: false, required: true
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}
export class DataGoogleCloudRunServiceTemplateSpec extends ComplexComputedList {

  // container_concurrency - computed: true, optional: false, required: true
  public get containerConcurrency() {
    return this.getNumberAttribute('container_concurrency');
  }

  // containers - computed: true, optional: false, required: true
  public get containers() {
    return 'not implemented' as any;
  }

  // service_account_name - computed: true, optional: false, required: true
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // serving_state - computed: true, optional: false, required: true
  public get servingState() {
    return this.getStringAttribute('serving_state');
  }

  // timeout_seconds - computed: true, optional: false, required: true
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataGoogleCloudRunServiceTemplate extends ComplexComputedList {

  // metadata - computed: true, optional: false, required: true
  public get metadata() {
    return 'not implemented' as any;
  }

  // spec - computed: true, optional: false, required: true
  public get spec() {
    return 'not implemented' as any;
  }
}
export class DataGoogleCloudRunServiceTraffic extends ComplexComputedList {

  // latest_revision - computed: true, optional: false, required: true
  public get latestRevision() {
    return this.getBooleanAttribute('latest_revision');
  }

  // percent - computed: true, optional: false, required: true
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // revision_name - computed: true, optional: false, required: true
  public get revisionName() {
    return this.getStringAttribute('revision_name');
  }
}

// Resource

export class DataGoogleCloudRunService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleCloudRunServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_run_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autogenerate_revision_name - computed: true, optional: false, required: true
  public get autogenerateRevisionName() {
    return this.getBooleanAttribute('autogenerate_revision_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // metadata - computed: true, optional: false, required: true
  public metadata(index: string) {
    return new DataGoogleCloudRunServiceMetadata(this, 'metadata', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // status - computed: true, optional: false, required: true
  public status(index: string) {
    return new DataGoogleCloudRunServiceStatus(this, 'status', index);
  }

  // template - computed: true, optional: false, required: true
  public template(index: string) {
    return new DataGoogleCloudRunServiceTemplate(this, 'template', index);
  }

  // traffic - computed: true, optional: false, required: true
  public traffic(index: string) {
    return new DataGoogleCloudRunServiceTraffic(this, 'traffic', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      project: this._project,
    };
  }
}
