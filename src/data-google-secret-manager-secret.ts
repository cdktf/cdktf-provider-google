// https://www.terraform.io/docs/providers/google/d/secret_manager_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleSecretManagerSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret.html#project DataGoogleSecretManagerSecret#project}
  */
  readonly project?: string;
  /**
  * This must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret.html#secret_id DataGoogleSecretManagerSecret#secret_id}
  */
  readonly secretId: string;
}
export class DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption extends cdktf.ComplexComputedList {

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
}
export class DataGoogleSecretManagerSecretReplicationUserManagedReplicas extends cdktf.ComplexComputedList {

  // customer_managed_encryption - computed: true, optional: false, required: false
  public get customerManagedEncryption() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('customer_managed_encryption') as any;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }
}
export class DataGoogleSecretManagerSecretReplicationUserManaged extends cdktf.ComplexComputedList {

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('replicas') as any;
  }
}
export class DataGoogleSecretManagerSecretReplication extends cdktf.ComplexComputedList {

  // automatic - computed: true, optional: false, required: false
  public get automatic() {
    return this.getBooleanAttribute('automatic') as any;
  }

  // user_managed - computed: true, optional: false, required: false
  public get userManaged() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_managed') as any;
  }
}
export class DataGoogleSecretManagerSecretRotation extends cdktf.ComplexComputedList {

  // next_rotation_time - computed: true, optional: false, required: false
  public get nextRotationTime() {
    return this.getStringAttribute('next_rotation_time');
  }

  // rotation_period - computed: true, optional: false, required: false
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
}
export class DataGoogleSecretManagerSecretTopics extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret.html google_secret_manager_secret}
*/
export class DataGoogleSecretManagerSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_secret_manager_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/secret_manager_secret.html google_secret_manager_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleSecretManagerSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleSecretManagerSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_secret',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._secretId = config.secretId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // replication - computed: true, optional: false, required: false
  public replication(index: string) {
    return new DataGoogleSecretManagerSecretReplication(this, 'replication', index);
  }

  // rotation - computed: true, optional: false, required: false
  public rotation(index: string) {
    return new DataGoogleSecretManagerSecretRotation(this, 'rotation', index);
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId
  }

  // topics - computed: true, optional: false, required: false
  public topics(index: string) {
    return new DataGoogleSecretManagerSecretTopics(this, 'topics', index);
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      secret_id: cdktf.stringToTerraform(this._secretId),
    };
  }
}
