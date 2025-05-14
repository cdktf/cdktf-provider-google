# `memorystoreInstance` Submodule <a name="`memorystoreInstance` Submodule" id="@cdktf/provider-google.memorystoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorystoreInstance <a name="MemorystoreInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance google_memorystore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstance;

MemorystoreInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .location(java.lang.String)
    .shardCount(java.lang.Number)
//  .authorizationMode(java.lang.String)
//  .automatedBackupConfig(MemorystoreInstanceAutomatedBackupConfig)
//  .crossInstanceReplicationConfig(MemorystoreInstanceCrossInstanceReplicationConfig)
//  .deletionProtectionEnabled(java.lang.Boolean)
//  .deletionProtectionEnabled(IResolvable)
//  .desiredPscAutoConnections(IResolvable)
//  .desiredPscAutoConnections(java.util.List<MemorystoreInstanceDesiredPscAutoConnections>)
//  .engineConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .engineVersion(java.lang.String)
//  .gcsSource(MemorystoreInstanceGcsSource)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenancePolicy(MemorystoreInstanceMaintenancePolicy)
//  .managedBackupSource(MemorystoreInstanceManagedBackupSource)
//  .mode(java.lang.String)
//  .nodeType(java.lang.String)
//  .persistenceConfig(MemorystoreInstancePersistenceConfig)
//  .project(java.lang.String)
//  .replicaCount(java.lang.Number)
//  .timeouts(MemorystoreInstanceTimeouts)
//  .transitEncryptionMode(java.lang.String)
//  .zoneDistributionConfig(MemorystoreInstanceZoneDistributionConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Required. The ID to use for the instance, which will become the final component of the instance's resource name. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Required. Number of shards for the instance. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.authorizationMode">authorizationMode</a></code> | <code>java.lang.String</code> | Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.automatedBackupConfig">automatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a></code> | automated_backup_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.crossInstanceReplicationConfig">crossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a></code> | cross_instance_replication_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. If set to true deletion of the instance will fail. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.desiredPscAutoConnections">desiredPscAutoConnections</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>></code> | desired_psc_auto_connections block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.engineConfigs">engineConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User-provided engine configurations for the instance. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Optional. Engine version of the instance. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.gcsSource">gcsSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#id MemorystoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.managedBackupSource">managedBackupSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a></code> | managed_backup_source block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"]. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#project MemorystoreInstance#project}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Optional. Number of replica nodes per shard. If omitted the default is 0 replicas. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Required. The ID to use for the instance, which will become the final component of the instance's resource name.

This value is subject to the following restrictions:

* Must be 4-63 characters in length
* Must begin with a letter or digit
* Must contain only lowercase letters, digits, and hyphens
* Must not end with a hyphen
* Must be unique within a location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#instance_id MemorystoreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'memorystore.googleapis.com/CertificateAuthority'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#location MemorystoreInstance#location}

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.shardCount"></a>

- *Type:* java.lang.Number

Required. Number of shards for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#shard_count MemorystoreInstance#shard_count}

---

##### `authorizationMode`<sup>Optional</sup> <a name="authorizationMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.authorizationMode"></a>

- *Type:* java.lang.String

Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#authorization_mode MemorystoreInstance#authorization_mode}

---

##### `automatedBackupConfig`<sup>Optional</sup> <a name="automatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.automatedBackupConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a>

automated_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#automated_backup_config MemorystoreInstance#automated_backup_config}

---

##### `crossInstanceReplicationConfig`<sup>Optional</sup> <a name="crossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.crossInstanceReplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a>

cross_instance_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#cross_instance_replication_config MemorystoreInstance#cross_instance_replication_config}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. If set to true deletion of the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#deletion_protection_enabled MemorystoreInstance#deletion_protection_enabled}

---

##### `desiredPscAutoConnections`<sup>Optional</sup> <a name="desiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.desiredPscAutoConnections"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>>

desired_psc_auto_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#desired_psc_auto_connections MemorystoreInstance#desired_psc_auto_connections}

---

##### `engineConfigs`<sup>Optional</sup> <a name="engineConfigs" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.engineConfigs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User-provided engine configurations for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#engine_configs MemorystoreInstance#engine_configs}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Optional. Engine version of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#engine_version MemorystoreInstance#engine_version}

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.gcsSource"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#gcs_source MemorystoreInstance#gcs_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#id MemorystoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#labels MemorystoreInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#maintenance_policy MemorystoreInstance#maintenance_policy}

---

##### `managedBackupSource`<sup>Optional</sup> <a name="managedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.managedBackupSource"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a>

managed_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#managed_backup_source MemorystoreInstance#managed_backup_source}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#mode MemorystoreInstance#mode}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#node_type MemorystoreInstance#node_type}

---

##### `persistenceConfig`<sup>Optional</sup> <a name="persistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.persistenceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#persistence_config MemorystoreInstance#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#project MemorystoreInstance#project}.

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.replicaCount"></a>

- *Type:* java.lang.Number

Optional. Number of replica nodes per shard. If omitted the default is 0 replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#replica_count MemorystoreInstance#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#timeouts MemorystoreInstance#timeouts}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.transitEncryptionMode"></a>

- *Type:* java.lang.String

Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#transit_encryption_mode MemorystoreInstance#transit_encryption_mode}

---

##### `zoneDistributionConfig`<sup>Optional</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.Initializer.parameter.zoneDistributionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#zone_distribution_config MemorystoreInstance#zone_distribution_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putAutomatedBackupConfig">putAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putCrossInstanceReplicationConfig">putCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putDesiredPscAutoConnections">putDesiredPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putGcsSource">putGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putManagedBackupSource">putManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putPersistenceConfig">putPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putZoneDistributionConfig">putZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetAuthorizationMode">resetAuthorizationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetAutomatedBackupConfig">resetAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetCrossInstanceReplicationConfig">resetCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDesiredPscAutoConnections">resetDesiredPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetEngineConfigs">resetEngineConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetGcsSource">resetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetManagedBackupSource">resetManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetPersistenceConfig">resetPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetTransitEncryptionMode">resetTransitEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetZoneDistributionConfig">resetZoneDistributionConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomatedBackupConfig` <a name="putAutomatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putAutomatedBackupConfig"></a>

```java
public void putAutomatedBackupConfig(MemorystoreInstanceAutomatedBackupConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putAutomatedBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a>

---

##### `putCrossInstanceReplicationConfig` <a name="putCrossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putCrossInstanceReplicationConfig"></a>

```java
public void putCrossInstanceReplicationConfig(MemorystoreInstanceCrossInstanceReplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putCrossInstanceReplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a>

---

##### `putDesiredPscAutoConnections` <a name="putDesiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putDesiredPscAutoConnections"></a>

```java
public void putDesiredPscAutoConnections(IResolvable OR java.util.List<MemorystoreInstanceDesiredPscAutoConnections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putDesiredPscAutoConnections.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>>

---

##### `putGcsSource` <a name="putGcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putGcsSource"></a>

```java
public void putGcsSource(MemorystoreInstanceGcsSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putGcsSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putMaintenancePolicy"></a>

```java
public void putMaintenancePolicy(MemorystoreInstanceMaintenancePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a>

---

##### `putManagedBackupSource` <a name="putManagedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putManagedBackupSource"></a>

```java
public void putManagedBackupSource(MemorystoreInstanceManagedBackupSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putManagedBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a>

---

##### `putPersistenceConfig` <a name="putPersistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putPersistenceConfig"></a>

```java
public void putPersistenceConfig(MemorystoreInstancePersistenceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putTimeouts"></a>

```java
public void putTimeouts(MemorystoreInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a>

---

##### `putZoneDistributionConfig` <a name="putZoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putZoneDistributionConfig"></a>

```java
public void putZoneDistributionConfig(MemorystoreInstanceZoneDistributionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.putZoneDistributionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a>

---

##### `resetAuthorizationMode` <a name="resetAuthorizationMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetAuthorizationMode"></a>

```java
public void resetAuthorizationMode()
```

##### `resetAutomatedBackupConfig` <a name="resetAutomatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetAutomatedBackupConfig"></a>

```java
public void resetAutomatedBackupConfig()
```

##### `resetCrossInstanceReplicationConfig` <a name="resetCrossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetCrossInstanceReplicationConfig"></a>

```java
public void resetCrossInstanceReplicationConfig()
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetDesiredPscAutoConnections` <a name="resetDesiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetDesiredPscAutoConnections"></a>

```java
public void resetDesiredPscAutoConnections()
```

##### `resetEngineConfigs` <a name="resetEngineConfigs" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetEngineConfigs"></a>

```java
public void resetEngineConfigs()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetGcsSource` <a name="resetGcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetGcsSource"></a>

```java
public void resetGcsSource()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetMaintenancePolicy"></a>

```java
public void resetMaintenancePolicy()
```

##### `resetManagedBackupSource` <a name="resetManagedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetManagedBackupSource"></a>

```java
public void resetManagedBackupSource()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetMode"></a>

```java
public void resetMode()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetNodeType"></a>

```java
public void resetNodeType()
```

##### `resetPersistenceConfig` <a name="resetPersistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetPersistenceConfig"></a>

```java
public void resetPersistenceConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetReplicaCount"></a>

```java
public void resetReplicaCount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitEncryptionMode` <a name="resetTransitEncryptionMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetTransitEncryptionMode"></a>

```java
public void resetTransitEncryptionMode()
```

##### `resetZoneDistributionConfig` <a name="resetZoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.resetZoneDistributionConfig"></a>

```java
public void resetZoneDistributionConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MemorystoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstance;

MemorystoreInstance.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstance;

MemorystoreInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstance;

MemorystoreInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstance;

MemorystoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MemorystoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MemorystoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MemorystoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MemorystoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MemorystoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.automatedBackupConfig">automatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference">MemorystoreInstanceAutomatedBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.backupCollection">backupCollection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.crossInstanceReplicationConfig">crossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference">MemorystoreInstanceCrossInstanceReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredPscAutoConnections">desiredPscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList">MemorystoreInstanceDesiredPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.discoveryEndpoints">discoveryEndpoints</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList">MemorystoreInstanceDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList">MemorystoreInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.gcsSource">gcsSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference">MemorystoreInstanceGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference">MemorystoreInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList">MemorystoreInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.managedBackupSource">managedBackupSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference">MemorystoreInstanceManagedBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList">MemorystoreInstanceNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference">MemorystoreInstancePersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.pscAttachmentDetails">pscAttachmentDetails</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList">MemorystoreInstancePscAttachmentDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.pscAutoConnections">pscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList">MemorystoreInstancePscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.stateInfo">stateInfo</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList">MemorystoreInstanceStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference">MemorystoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference">MemorystoreInstanceZoneDistributionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.authorizationModeInput">authorizationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.automatedBackupConfigInput">automatedBackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.crossInstanceReplicationConfigInput">crossInstanceReplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredPscAutoConnectionsInput">desiredPscAutoConnectionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineConfigsInput">engineConfigsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.gcsSourceInput">gcsSourceInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.managedBackupSourceInput">managedBackupSourceInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.persistenceConfigInput">persistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.replicaCountInput">replicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.shardCountInput">shardCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.transitEncryptionModeInput">transitEncryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.zoneDistributionConfigInput">zoneDistributionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.authorizationMode">authorizationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineConfigs">engineConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automatedBackupConfig`<sup>Required</sup> <a name="automatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.automatedBackupConfig"></a>

```java
public MemorystoreInstanceAutomatedBackupConfigOutputReference getAutomatedBackupConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference">MemorystoreInstanceAutomatedBackupConfigOutputReference</a>

---

##### `backupCollection`<sup>Required</sup> <a name="backupCollection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.backupCollection"></a>

```java
public java.lang.String getBackupCollection();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `crossInstanceReplicationConfig`<sup>Required</sup> <a name="crossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.crossInstanceReplicationConfig"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigOutputReference getCrossInstanceReplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference">MemorystoreInstanceCrossInstanceReplicationConfigOutputReference</a>

---

##### `desiredPscAutoConnections`<sup>Required</sup> <a name="desiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredPscAutoConnections"></a>

```java
public MemorystoreInstanceDesiredPscAutoConnectionsList getDesiredPscAutoConnections();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList">MemorystoreInstanceDesiredPscAutoConnectionsList</a>

---

##### `discoveryEndpoints`<sup>Required</sup> <a name="discoveryEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.discoveryEndpoints"></a>

```java
public MemorystoreInstanceDiscoveryEndpointsList getDiscoveryEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList">MemorystoreInstanceDiscoveryEndpointsList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.endpoints"></a>

```java
public MemorystoreInstanceEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList">MemorystoreInstanceEndpointsList</a>

---

##### `gcsSource`<sup>Required</sup> <a name="gcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.gcsSource"></a>

```java
public MemorystoreInstanceGcsSourceOutputReference getGcsSource();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference">MemorystoreInstanceGcsSourceOutputReference</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenancePolicy"></a>

```java
public MemorystoreInstanceMaintenancePolicyOutputReference getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference">MemorystoreInstanceMaintenancePolicyOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenanceSchedule"></a>

```java
public MemorystoreInstanceMaintenanceScheduleList getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList">MemorystoreInstanceMaintenanceScheduleList</a>

---

##### `managedBackupSource`<sup>Required</sup> <a name="managedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.managedBackupSource"></a>

```java
public MemorystoreInstanceManagedBackupSourceOutputReference getManagedBackupSource();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference">MemorystoreInstanceManagedBackupSourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeConfig"></a>

```java
public MemorystoreInstanceNodeConfigList getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList">MemorystoreInstanceNodeConfigList</a>

---

##### `persistenceConfig`<sup>Required</sup> <a name="persistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.persistenceConfig"></a>

```java
public MemorystoreInstancePersistenceConfigOutputReference getPersistenceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference">MemorystoreInstancePersistenceConfigOutputReference</a>

---

##### `pscAttachmentDetails`<sup>Required</sup> <a name="pscAttachmentDetails" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.pscAttachmentDetails"></a>

```java
public MemorystoreInstancePscAttachmentDetailsList getPscAttachmentDetails();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList">MemorystoreInstancePscAttachmentDetailsList</a>

---

##### `pscAutoConnections`<sup>Required</sup> <a name="pscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.pscAutoConnections"></a>

```java
public MemorystoreInstancePscAutoConnectionsList getPscAutoConnections();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList">MemorystoreInstancePscAutoConnectionsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInfo`<sup>Required</sup> <a name="stateInfo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.stateInfo"></a>

```java
public MemorystoreInstanceStateInfoList getStateInfo();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList">MemorystoreInstanceStateInfoList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.timeouts"></a>

```java
public MemorystoreInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference">MemorystoreInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `zoneDistributionConfig`<sup>Required</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.zoneDistributionConfig"></a>

```java
public MemorystoreInstanceZoneDistributionConfigOutputReference getZoneDistributionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference">MemorystoreInstanceZoneDistributionConfigOutputReference</a>

---

##### `authorizationModeInput`<sup>Optional</sup> <a name="authorizationModeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.authorizationModeInput"></a>

```java
public java.lang.String getAuthorizationModeInput();
```

- *Type:* java.lang.String

---

##### `automatedBackupConfigInput`<sup>Optional</sup> <a name="automatedBackupConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.automatedBackupConfigInput"></a>

```java
public MemorystoreInstanceAutomatedBackupConfig getAutomatedBackupConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a>

---

##### `crossInstanceReplicationConfigInput`<sup>Optional</sup> <a name="crossInstanceReplicationConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.crossInstanceReplicationConfigInput"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfig getCrossInstanceReplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Object getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `desiredPscAutoConnectionsInput`<sup>Optional</sup> <a name="desiredPscAutoConnectionsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.desiredPscAutoConnectionsInput"></a>

```java
public java.lang.Object getDesiredPscAutoConnectionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>>

---

##### `engineConfigsInput`<sup>Optional</sup> <a name="engineConfigsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineConfigsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEngineConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `gcsSourceInput`<sup>Optional</sup> <a name="gcsSourceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.gcsSourceInput"></a>

```java
public MemorystoreInstanceGcsSource getGcsSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.maintenancePolicyInput"></a>

```java
public MemorystoreInstanceMaintenancePolicy getMaintenancePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a>

---

##### `managedBackupSourceInput`<sup>Optional</sup> <a name="managedBackupSourceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.managedBackupSourceInput"></a>

```java
public MemorystoreInstanceManagedBackupSource getManagedBackupSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `persistenceConfigInput`<sup>Optional</sup> <a name="persistenceConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.persistenceConfigInput"></a>

```java
public MemorystoreInstancePersistenceConfig getPersistenceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.replicaCountInput"></a>

```java
public java.lang.Number getReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.shardCountInput"></a>

```java
public java.lang.Number getShardCountInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a>

---

##### `transitEncryptionModeInput`<sup>Optional</sup> <a name="transitEncryptionModeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.transitEncryptionModeInput"></a>

```java
public java.lang.String getTransitEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `zoneDistributionConfigInput`<sup>Optional</sup> <a name="zoneDistributionConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.zoneDistributionConfigInput"></a>

```java
public MemorystoreInstanceZoneDistributionConfig getZoneDistributionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a>

---

##### `authorizationMode`<sup>Required</sup> <a name="authorizationMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.authorizationMode"></a>

```java
public java.lang.String getAuthorizationMode();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.deletionProtectionEnabled"></a>

```java
public java.lang.Object getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engineConfigs`<sup>Required</sup> <a name="engineConfigs" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEngineConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

---

##### `transitEncryptionMode`<sup>Required</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.transitEncryptionMode"></a>

```java
public java.lang.String getTransitEncryptionMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MemorystoreInstanceAutomatedBackupConfig <a name="MemorystoreInstanceAutomatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceAutomatedBackupConfig;

MemorystoreInstanceAutomatedBackupConfig.builder()
    .fixedFrequencySchedule(MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule)
    .retention(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.property.fixedFrequencySchedule">fixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | fixed_frequency_schedule block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.property.retention">retention</a></code> | <code>java.lang.String</code> | How long to keep automated backups before the backups are deleted. |

---

##### `fixedFrequencySchedule`<sup>Required</sup> <a name="fixedFrequencySchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.property.fixedFrequencySchedule"></a>

```java
public MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule getFixedFrequencySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

fixed_frequency_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#fixed_frequency_schedule MemorystoreInstance#fixed_frequency_schedule}

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig.property.retention"></a>

```java
public java.lang.String getRetention();
```

- *Type:* java.lang.String

How long to keep automated backups before the backups are deleted.

The value should be between 1 day and 365 days. If not specified, the default value is 35 days.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". The default_value is "3024000s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#retention MemorystoreInstance#retention}

---

### MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule <a name="MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule;

MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.builder()
    .startTime(MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | start_time block. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule.property.startTime"></a>

```java
public MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#start_time MemorystoreInstance#start_time}

---

### MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime <a name="MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime;

MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.builder()
    .hours(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of a day in 24 hour format. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and typically must be less than or equal to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#hours MemorystoreInstance#hours}

---

### MemorystoreInstanceConfig <a name="MemorystoreInstanceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceConfig;

MemorystoreInstanceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .location(java.lang.String)
    .shardCount(java.lang.Number)
//  .authorizationMode(java.lang.String)
//  .automatedBackupConfig(MemorystoreInstanceAutomatedBackupConfig)
//  .crossInstanceReplicationConfig(MemorystoreInstanceCrossInstanceReplicationConfig)
//  .deletionProtectionEnabled(java.lang.Boolean)
//  .deletionProtectionEnabled(IResolvable)
//  .desiredPscAutoConnections(IResolvable)
//  .desiredPscAutoConnections(java.util.List<MemorystoreInstanceDesiredPscAutoConnections>)
//  .engineConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .engineVersion(java.lang.String)
//  .gcsSource(MemorystoreInstanceGcsSource)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenancePolicy(MemorystoreInstanceMaintenancePolicy)
//  .managedBackupSource(MemorystoreInstanceManagedBackupSource)
//  .mode(java.lang.String)
//  .nodeType(java.lang.String)
//  .persistenceConfig(MemorystoreInstancePersistenceConfig)
//  .project(java.lang.String)
//  .replicaCount(java.lang.Number)
//  .timeouts(MemorystoreInstanceTimeouts)
//  .transitEncryptionMode(java.lang.String)
//  .zoneDistributionConfig(MemorystoreInstanceZoneDistributionConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Required. The ID to use for the instance, which will become the final component of the instance's resource name. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Required. Number of shards for the instance. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.authorizationMode">authorizationMode</a></code> | <code>java.lang.String</code> | Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.automatedBackupConfig">automatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a></code> | automated_backup_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.crossInstanceReplicationConfig">crossInstanceReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a></code> | cross_instance_replication_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. If set to true deletion of the instance will fail. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.desiredPscAutoConnections">desiredPscAutoConnections</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>></code> | desired_psc_auto_connections block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.engineConfigs">engineConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User-provided engine configurations for the instance. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Optional. Engine version of the instance. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.gcsSource">gcsSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#id MemorystoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.managedBackupSource">managedBackupSource</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a></code> | managed_backup_source block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"]. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#project MemorystoreInstance#project}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Optional. Number of replica nodes per shard. If omitted the default is 0 replicas. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Required. The ID to use for the instance, which will become the final component of the instance's resource name.

This value is subject to the following restrictions:

* Must be 4-63 characters in length
* Must begin with a letter or digit
* Must contain only lowercase letters, digits, and hyphens
* Must not end with a hyphen
* Must be unique within a location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#instance_id MemorystoreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'memorystore.googleapis.com/CertificateAuthority'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#location MemorystoreInstance#location}

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

Required. Number of shards for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#shard_count MemorystoreInstance#shard_count}

---

##### `authorizationMode`<sup>Optional</sup> <a name="authorizationMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.authorizationMode"></a>

```java
public java.lang.String getAuthorizationMode();
```

- *Type:* java.lang.String

Optional. Immutable. Authorization mode of the instance. Possible values:  AUTH_DISABLED IAM_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#authorization_mode MemorystoreInstance#authorization_mode}

---

##### `automatedBackupConfig`<sup>Optional</sup> <a name="automatedBackupConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.automatedBackupConfig"></a>

```java
public MemorystoreInstanceAutomatedBackupConfig getAutomatedBackupConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a>

automated_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#automated_backup_config MemorystoreInstance#automated_backup_config}

---

##### `crossInstanceReplicationConfig`<sup>Optional</sup> <a name="crossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.crossInstanceReplicationConfig"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfig getCrossInstanceReplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a>

cross_instance_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#cross_instance_replication_config MemorystoreInstance#cross_instance_replication_config}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Object getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. If set to true deletion of the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#deletion_protection_enabled MemorystoreInstance#deletion_protection_enabled}

---

##### `desiredPscAutoConnections`<sup>Optional</sup> <a name="desiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.desiredPscAutoConnections"></a>

```java
public java.lang.Object getDesiredPscAutoConnections();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>>

desired_psc_auto_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#desired_psc_auto_connections MemorystoreInstance#desired_psc_auto_connections}

---

##### `engineConfigs`<sup>Optional</sup> <a name="engineConfigs" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.engineConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEngineConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User-provided engine configurations for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#engine_configs MemorystoreInstance#engine_configs}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Optional. Engine version of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#engine_version MemorystoreInstance#engine_version}

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.gcsSource"></a>

```java
public MemorystoreInstanceGcsSource getGcsSource();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#gcs_source MemorystoreInstance#gcs_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#id MemorystoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#labels MemorystoreInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.maintenancePolicy"></a>

```java
public MemorystoreInstanceMaintenancePolicy getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#maintenance_policy MemorystoreInstance#maintenance_policy}

---

##### `managedBackupSource`<sup>Optional</sup> <a name="managedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.managedBackupSource"></a>

```java
public MemorystoreInstanceManagedBackupSource getManagedBackupSource();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a>

managed_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#managed_backup_source MemorystoreInstance#managed_backup_source}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Optional. cluster or cluster-disabled.   Possible values:  CLUSTER  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#mode MemorystoreInstance#mode}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Optional. Machine type for individual nodes of the instance.   Possible values:  SHARED_CORE_NANO HIGHMEM_MEDIUM HIGHMEM_XLARGE STANDARD_SMALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#node_type MemorystoreInstance#node_type}

---

##### `persistenceConfig`<sup>Optional</sup> <a name="persistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.persistenceConfig"></a>

```java
public MemorystoreInstancePersistenceConfig getPersistenceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#persistence_config MemorystoreInstance#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#project MemorystoreInstance#project}.

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

Optional. Number of replica nodes per shard. If omitted the default is 0 replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#replica_count MemorystoreInstance#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.timeouts"></a>

```java
public MemorystoreInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#timeouts MemorystoreInstance#timeouts}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.transitEncryptionMode"></a>

```java
public java.lang.String getTransitEncryptionMode();
```

- *Type:* java.lang.String

Optional. Immutable. In-transit encryption mode of the instance.   Possible values:  TRANSIT_ENCRYPTION_DISABLED SERVER_AUTHENTICATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#transit_encryption_mode MemorystoreInstance#transit_encryption_mode}

---

##### `zoneDistributionConfig`<sup>Optional</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceConfig.property.zoneDistributionConfig"></a>

```java
public MemorystoreInstanceZoneDistributionConfig getZoneDistributionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#zone_distribution_config MemorystoreInstance#zone_distribution_config}

---

### MemorystoreInstanceCrossInstanceReplicationConfig <a name="MemorystoreInstanceCrossInstanceReplicationConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfig;

MemorystoreInstanceCrossInstanceReplicationConfig.builder()
//  .instanceRole(java.lang.String)
//  .primaryInstance(MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance)
//  .secondaryInstances(IResolvable)
//  .secondaryInstances(java.util.List<MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.instanceRole">instanceRole</a></code> | <code>java.lang.String</code> | The instance role supports the following values: 1. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.primaryInstance">primaryInstance</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | primary_instance block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.secondaryInstances">secondaryInstances</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>></code> | secondary_instances block. |

---

##### `instanceRole`<sup>Optional</sup> <a name="instanceRole" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.instanceRole"></a>

```java
public java.lang.String getInstanceRole();
```

- *Type:* java.lang.String

The instance role supports the following values: 1.

'INSTANCE_ROLE_UNSPECIFIED': This is an independent instance that has never participated in cross instance replication. It allows both reads and writes.
2. 'NONE': This is an independent instance that previously participated in cross instance replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
3. 'PRIMARY': This instance serves as the replication source for secondary instance that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
4. 'SECONDARY': This instance replicates data from the primary instance. It allows only reads. Possible values: ["INSTANCE_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#instance_role MemorystoreInstance#instance_role}

---

##### `primaryInstance`<sup>Optional</sup> <a name="primaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.primaryInstance"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance getPrimaryInstance();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

primary_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#primary_instance MemorystoreInstance#primary_instance}

---

##### `secondaryInstances`<sup>Optional</sup> <a name="secondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig.property.secondaryInstances"></a>

```java
public java.lang.Object getSecondaryInstances();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>>

secondary_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#secondary_instances MemorystoreInstance#secondary_instances}

---

### MemorystoreInstanceCrossInstanceReplicationConfigMembership <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembership" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembership.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigMembership;

MemorystoreInstanceCrossInstanceReplicationConfigMembership.builder()
    .build();
```


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance;

MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance.builder()
    .build();
```


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance;

MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance.builder()
    .build();
```


### MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance <a name="MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance;

MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.builder()
//  .instance(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.property.instance">instance</a></code> | <code>java.lang.String</code> | The full resource path of the primary instance in the format: projects/{project}/locations/{region}/instances/{instance-id}. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The full resource path of the primary instance in the format: projects/{project}/locations/{region}/instances/{instance-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#instance MemorystoreInstance#instance}

---

### MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances <a name="MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances;

MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.builder()
//  .instance(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.property.instance">instance</a></code> | <code>java.lang.String</code> | The full resource path of the Nth instance in the format: projects/{project}/locations/{region}/instance/{instance-id}. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The full resource path of the Nth instance in the format: projects/{project}/locations/{region}/instance/{instance-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#instance MemorystoreInstance#instance}

---

### MemorystoreInstanceDesiredPscAutoConnections <a name="MemorystoreInstanceDesiredPscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceDesiredPscAutoConnections;

MemorystoreInstanceDesiredPscAutoConnections.builder()
    .network(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.property.network">network</a></code> | <code>java.lang.String</code> | Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Required. The consumer project_id where the forwarding rule is created from. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#network MemorystoreInstance#network}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Required. The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#project_id MemorystoreInstance#project_id}

---

### MemorystoreInstanceDiscoveryEndpoints <a name="MemorystoreInstanceDiscoveryEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceDiscoveryEndpoints;

MemorystoreInstanceDiscoveryEndpoints.builder()
    .build();
```


### MemorystoreInstanceEndpoints <a name="MemorystoreInstanceEndpoints" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceEndpoints;

MemorystoreInstanceEndpoints.builder()
    .build();
```


### MemorystoreInstanceEndpointsConnections <a name="MemorystoreInstanceEndpointsConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceEndpointsConnections;

MemorystoreInstanceEndpointsConnections.builder()
    .build();
```


### MemorystoreInstanceEndpointsConnectionsPscAutoConnection <a name="MemorystoreInstanceEndpointsConnectionsPscAutoConnection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection;

MemorystoreInstanceEndpointsConnectionsPscAutoConnection.builder()
    .build();
```


### MemorystoreInstanceGcsSource <a name="MemorystoreInstanceGcsSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceGcsSource;

MemorystoreInstanceGcsSource.builder()
    .uris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | URIs of the GCS objects to import. Example: gs://bucket1/object1, gs//bucket2/folder2/object2. |

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

URIs of the GCS objects to import. Example: gs://bucket1/object1, gs//bucket2/folder2/object2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#uris MemorystoreInstance#uris}

---

### MemorystoreInstanceMaintenancePolicy <a name="MemorystoreInstanceMaintenancePolicy" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenancePolicy;

MemorystoreInstanceMaintenancePolicy.builder()
//  .weeklyMaintenanceWindow(IResolvable)
//  .weeklyMaintenanceWindow(java.util.List<MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | weekly_maintenance_window block. |

---

##### `weeklyMaintenanceWindow`<sup>Optional</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```java
public java.lang.Object getWeeklyMaintenanceWindow();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>>

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#weekly_maintenance_window MemorystoreInstance#weekly_maintenance_window}

---

### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow;

MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.builder()
    .day(java.lang.String)
    .startTime(MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>java.lang.String</code> | The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#day MemorystoreInstance#day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```java
public MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#start_time MemorystoreInstance#start_time}

---

### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;

MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#hours MemorystoreInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#minutes MemorystoreInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#nanos MemorystoreInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#seconds MemorystoreInstance#seconds}

---

### MemorystoreInstanceMaintenanceSchedule <a name="MemorystoreInstanceMaintenanceSchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenanceSchedule;

MemorystoreInstanceMaintenanceSchedule.builder()
    .build();
```


### MemorystoreInstanceManagedBackupSource <a name="MemorystoreInstanceManagedBackupSource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceManagedBackupSource;

MemorystoreInstanceManagedBackupSource.builder()
    .backup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource.property.backup">backup</a></code> | <code>java.lang.String</code> | Example: //memorystore.googleapis.com/projects/{project}/locations/{location}/backups/{backupId}. In this case, it assumes the backup is under memorystore.googleapis.com. |

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource.property.backup"></a>

```java
public java.lang.String getBackup();
```

- *Type:* java.lang.String

Example: //memorystore.googleapis.com/projects/{project}/locations/{location}/backups/{backupId}. In this case, it assumes the backup is under memorystore.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#backup MemorystoreInstance#backup}

---

### MemorystoreInstanceNodeConfig <a name="MemorystoreInstanceNodeConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceNodeConfig;

MemorystoreInstanceNodeConfig.builder()
    .build();
```


### MemorystoreInstancePersistenceConfig <a name="MemorystoreInstancePersistenceConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePersistenceConfig;

MemorystoreInstancePersistenceConfig.builder()
//  .aofConfig(MemorystoreInstancePersistenceConfigAofConfig)
//  .mode(java.lang.String)
//  .rdbConfig(MemorystoreInstancePersistenceConfigRdbConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.aofConfig">aofConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a></code> | aof_config block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Optional. Current persistence mode.   Possible values: DISABLED RDB AOF Possible values: ["DISABLED", "RDB", "AOF"]. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.rdbConfig">rdbConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a></code> | rdb_config block. |

---

##### `aofConfig`<sup>Optional</sup> <a name="aofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.aofConfig"></a>

```java
public MemorystoreInstancePersistenceConfigAofConfig getAofConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a>

aof_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#aof_config MemorystoreInstance#aof_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Optional. Current persistence mode.   Possible values: DISABLED RDB AOF Possible values: ["DISABLED", "RDB", "AOF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#mode MemorystoreInstance#mode}

---

##### `rdbConfig`<sup>Optional</sup> <a name="rdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig.property.rdbConfig"></a>

```java
public MemorystoreInstancePersistenceConfigRdbConfig getRdbConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a>

rdb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#rdb_config MemorystoreInstance#rdb_config}

---

### MemorystoreInstancePersistenceConfigAofConfig <a name="MemorystoreInstancePersistenceConfigAofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePersistenceConfigAofConfig;

MemorystoreInstancePersistenceConfigAofConfig.builder()
//  .appendFsync(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig.property.appendFsync">appendFsync</a></code> | <code>java.lang.String</code> | Optional. The fsync mode.   Possible values:  NEVER EVERY_SEC ALWAYS. |

---

##### `appendFsync`<sup>Optional</sup> <a name="appendFsync" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig.property.appendFsync"></a>

```java
public java.lang.String getAppendFsync();
```

- *Type:* java.lang.String

Optional. The fsync mode.   Possible values:  NEVER EVERY_SEC ALWAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#append_fsync MemorystoreInstance#append_fsync}

---

### MemorystoreInstancePersistenceConfigRdbConfig <a name="MemorystoreInstancePersistenceConfigRdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePersistenceConfigRdbConfig;

MemorystoreInstancePersistenceConfigRdbConfig.builder()
//  .rdbSnapshotPeriod(java.lang.String)
//  .rdbSnapshotStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>java.lang.String</code> | Optional. Period between RDB snapshots.   Possible values:  ONE_HOUR SIX_HOURS TWELVE_HOURS TWENTY_FOUR_HOURS. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `rdbSnapshotPeriod`<sup>Optional</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotPeriod"></a>

```java
public java.lang.String getRdbSnapshotPeriod();
```

- *Type:* java.lang.String

Optional. Period between RDB snapshots.   Possible values:  ONE_HOUR SIX_HOURS TWELVE_HOURS TWENTY_FOUR_HOURS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#rdb_snapshot_period MemorystoreInstance#rdb_snapshot_period}

---

##### `rdbSnapshotStartTime`<sup>Optional</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig.property.rdbSnapshotStartTime"></a>

```java
public java.lang.String getRdbSnapshotStartTime();
```

- *Type:* java.lang.String

Optional.

Time that the first snapshot was/will be attempted, and to which future
snapshots will be aligned. If not provided, the current time will be
used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#rdb_snapshot_start_time MemorystoreInstance#rdb_snapshot_start_time}

---

### MemorystoreInstancePscAttachmentDetails <a name="MemorystoreInstancePscAttachmentDetails" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePscAttachmentDetails;

MemorystoreInstancePscAttachmentDetails.builder()
    .build();
```


### MemorystoreInstancePscAutoConnections <a name="MemorystoreInstancePscAutoConnections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePscAutoConnections;

MemorystoreInstancePscAutoConnections.builder()
    .build();
```


### MemorystoreInstanceStateInfo <a name="MemorystoreInstanceStateInfo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceStateInfo;

MemorystoreInstanceStateInfo.builder()
    .build();
```


### MemorystoreInstanceStateInfoUpdateInfo <a name="MemorystoreInstanceStateInfoUpdateInfo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceStateInfoUpdateInfo;

MemorystoreInstanceStateInfoUpdateInfo.builder()
    .build();
```


### MemorystoreInstanceTimeouts <a name="MemorystoreInstanceTimeouts" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceTimeouts;

MemorystoreInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#create MemorystoreInstance#create}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#delete MemorystoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#update MemorystoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#create MemorystoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#delete MemorystoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#update MemorystoreInstance#update}.

---

### MemorystoreInstanceZoneDistributionConfig <a name="MemorystoreInstanceZoneDistributionConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceZoneDistributionConfig;

MemorystoreInstanceZoneDistributionConfig.builder()
//  .mode(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Optional. Current zone distribution mode. Defaults to MULTI_ZONE.   Possible values:  MULTI_ZONE SINGLE_ZONE Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode. Ignored for MULTI_ZONE mode. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Optional. Current zone distribution mode. Defaults to MULTI_ZONE.   Possible values:  MULTI_ZONE SINGLE_ZONE Possible values: ["MULTI_ZONE", "SINGLE_ZONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#mode MemorystoreInstance#mode}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode. Ignored for MULTI_ZONE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/memorystore_instance#zone MemorystoreInstance#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference <a name="MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference;

new MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime"></a>

```java
public void putStartTime(MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime"></a>

```java
public MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput"></a>

```java
public MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---


### MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference <a name="MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference;

new MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


### MemorystoreInstanceAutomatedBackupConfigOutputReference <a name="MemorystoreInstanceAutomatedBackupConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceAutomatedBackupConfigOutputReference;

new MemorystoreInstanceAutomatedBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule">putFixedFrequencySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedFrequencySchedule` <a name="putFixedFrequencySchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule"></a>

```java
public void putFixedFrequencySchedule(MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.putFixedFrequencySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule">fixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput">fixedFrequencyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.retentionInput">retentionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention">retention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedFrequencySchedule`<sup>Required</sup> <a name="fixedFrequencySchedule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule"></a>

```java
public MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference getFixedFrequencySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference">MemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a>

---

##### `fixedFrequencyScheduleInput`<sup>Optional</sup> <a name="fixedFrequencyScheduleInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput"></a>

```java
public MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule getFixedFrequencyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule">MemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule</a>

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.retentionInput"></a>

```java
public java.lang.String getRetentionInput();
```

- *Type:* java.lang.String

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.retention"></a>

```java
public java.lang.String getRetention();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfigOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceAutomatedBackupConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceAutomatedBackupConfig">MemorystoreInstanceAutomatedBackupConfig</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipList <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList;

new MemorystoreInstanceCrossInstanceReplicationConfigMembershipList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference;

new MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance">primaryInstance</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance">secondaryInstance</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembership">MemorystoreInstanceCrossInstanceReplicationConfigMembership</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryInstance`<sup>Required</sup> <a name="primaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.primaryInstance"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList getPrimaryInstance();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList</a>

---

##### `secondaryInstance`<sup>Required</sup> <a name="secondaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.secondaryInstance"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList getSecondaryInstance();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigMembership getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembership">MemorystoreInstanceCrossInstanceReplicationConfigMembership</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList;

new MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference;

new MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList;

new MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference;

new MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference;

new MemorystoreInstanceCrossInstanceReplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance">putPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances">putSecondaryInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetInstanceRole">resetInstanceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetPrimaryInstance">resetPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetSecondaryInstances">resetSecondaryInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryInstance` <a name="putPrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance"></a>

```java
public void putPrimaryInstance(MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putPrimaryInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---

##### `putSecondaryInstances` <a name="putSecondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances"></a>

```java
public void putSecondaryInstances(IResolvable OR java.util.List<MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.putSecondaryInstances.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>>

---

##### `resetInstanceRole` <a name="resetInstanceRole" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetInstanceRole"></a>

```java
public void resetInstanceRole()
```

##### `resetPrimaryInstance` <a name="resetPrimaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetPrimaryInstance"></a>

```java
public void resetPrimaryInstance()
```

##### `resetSecondaryInstances` <a name="resetSecondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.resetSecondaryInstances"></a>

```java
public void resetSecondaryInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership">membership</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance">primaryInstance</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances">secondaryInstances</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRoleInput">instanceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstanceInput">primaryInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstancesInput">secondaryInstancesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole">instanceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.membership"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigMembershipList getMembership();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigMembershipList">MemorystoreInstanceCrossInstanceReplicationConfigMembershipList</a>

---

##### `primaryInstance`<sup>Required</sup> <a name="primaryInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstance"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference getPrimaryInstance();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference</a>

---

##### `secondaryInstances`<sup>Required</sup> <a name="secondaryInstances" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstances"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList getSecondaryInstances();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `instanceRoleInput`<sup>Optional</sup> <a name="instanceRoleInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRoleInput"></a>

```java
public java.lang.String getInstanceRoleInput();
```

- *Type:* java.lang.String

---

##### `primaryInstanceInput`<sup>Optional</sup> <a name="primaryInstanceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.primaryInstanceInput"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance getPrimaryInstanceInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---

##### `secondaryInstancesInput`<sup>Optional</sup> <a name="secondaryInstancesInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.secondaryInstancesInput"></a>

```java
public java.lang.Object getSecondaryInstancesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>>

---

##### `instanceRole`<sup>Required</sup> <a name="instanceRole" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.instanceRole"></a>

```java
public java.lang.String getInstanceRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfig">MemorystoreInstanceCrossInstanceReplicationConfig</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference;

new MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resetInstance">resetInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.resetInstance"></a>

```java
public void resetInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance">MemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance</a>

---


### MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList <a name="MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList;

new MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get"></a>

```java
public MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>>

---


### MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference <a name="MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference;

new MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resetInstance">resetInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.resetInstance"></a>

```java
public void resetInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances">MemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances</a>

---


### MemorystoreInstanceDesiredPscAutoConnectionsList <a name="MemorystoreInstanceDesiredPscAutoConnectionsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceDesiredPscAutoConnectionsList;

new MemorystoreInstanceDesiredPscAutoConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.get"></a>

```java
public MemorystoreInstanceDesiredPscAutoConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>>

---


### MemorystoreInstanceDesiredPscAutoConnectionsOutputReference <a name="MemorystoreInstanceDesiredPscAutoConnectionsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference;

new MemorystoreInstanceDesiredPscAutoConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDesiredPscAutoConnections">MemorystoreInstanceDesiredPscAutoConnections</a>

---


### MemorystoreInstanceDiscoveryEndpointsList <a name="MemorystoreInstanceDiscoveryEndpointsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceDiscoveryEndpointsList;

new MemorystoreInstanceDiscoveryEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.get"></a>

```java
public MemorystoreInstanceDiscoveryEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceDiscoveryEndpointsOutputReference <a name="MemorystoreInstanceDiscoveryEndpointsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceDiscoveryEndpointsOutputReference;

new MemorystoreInstanceDiscoveryEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpoints">MemorystoreInstanceDiscoveryEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceDiscoveryEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceDiscoveryEndpoints">MemorystoreInstanceDiscoveryEndpoints</a>

---


### MemorystoreInstanceEndpointsConnectionsList <a name="MemorystoreInstanceEndpointsConnectionsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceEndpointsConnectionsList;

new MemorystoreInstanceEndpointsConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.get"></a>

```java
public MemorystoreInstanceEndpointsConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceEndpointsConnectionsOutputReference <a name="MemorystoreInstanceEndpointsConnectionsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceEndpointsConnectionsOutputReference;

new MemorystoreInstanceEndpointsConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection">pscAutoConnection</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnections">MemorystoreInstanceEndpointsConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pscAutoConnection`<sup>Required</sup> <a name="pscAutoConnection" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection"></a>

```java
public MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList getPscAutoConnection();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceEndpointsConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnections">MemorystoreInstanceEndpointsConnections</a>

---


### MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList <a name="MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList;

new MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get"></a>

```java
public MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference <a name="MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference;

new MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection">MemorystoreInstanceEndpointsConnectionsPscAutoConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceEndpointsConnectionsPscAutoConnection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsPscAutoConnection">MemorystoreInstanceEndpointsConnectionsPscAutoConnection</a>

---


### MemorystoreInstanceEndpointsList <a name="MemorystoreInstanceEndpointsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceEndpointsList;

new MemorystoreInstanceEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.get"></a>

```java
public MemorystoreInstanceEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceEndpointsOutputReference <a name="MemorystoreInstanceEndpointsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceEndpointsOutputReference;

new MemorystoreInstanceEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList">MemorystoreInstanceEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpoints">MemorystoreInstanceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.connections"></a>

```java
public MemorystoreInstanceEndpointsConnectionsList getConnections();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsConnectionsList">MemorystoreInstanceEndpointsConnectionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpointsOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceEndpoints">MemorystoreInstanceEndpoints</a>

---


### MemorystoreInstanceGcsSourceOutputReference <a name="MemorystoreInstanceGcsSourceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceGcsSourceOutputReference;

new MemorystoreInstanceGcsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.urisInput">urisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.urisInput"></a>

```java
public java.util.List<java.lang.String> getUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSourceOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceGcsSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceGcsSource">MemorystoreInstanceGcsSource</a>

---


### MemorystoreInstanceMaintenancePolicyOutputReference <a name="MemorystoreInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenancePolicyOutputReference;

new MemorystoreInstanceMaintenancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">putWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">resetWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyMaintenanceWindow` <a name="putWeeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```java
public void putWeeklyMaintenanceWindow(IResolvable OR java.util.List<MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>>

---

##### `resetWeeklyMaintenanceWindow` <a name="resetWeeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```java
public void resetWeeklyMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weeklyMaintenanceWindowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```java
public MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList getWeeklyMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `weeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```java
public java.lang.Object getWeeklyMaintenanceWindowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceMaintenancePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicy">MemorystoreInstanceMaintenancePolicy</a>

---


### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList;

new MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```java
public MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>>

---


### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference;

new MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```java
public void putStartTime(MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```java
public MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```java
public MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference;

new MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### MemorystoreInstanceMaintenanceScheduleList <a name="MemorystoreInstanceMaintenanceScheduleList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenanceScheduleList;

new MemorystoreInstanceMaintenanceScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.get"></a>

```java
public MemorystoreInstanceMaintenanceScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceMaintenanceScheduleOutputReference <a name="MemorystoreInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceMaintenanceScheduleOutputReference;

new MemorystoreInstanceMaintenanceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">scheduleDeadlineTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceSchedule">MemorystoreInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `scheduleDeadlineTime`<sup>Required</sup> <a name="scheduleDeadlineTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```java
public java.lang.String getScheduleDeadlineTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceMaintenanceSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceMaintenanceSchedule">MemorystoreInstanceMaintenanceSchedule</a>

---


### MemorystoreInstanceManagedBackupSourceOutputReference <a name="MemorystoreInstanceManagedBackupSourceOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceManagedBackupSourceOutputReference;

new MemorystoreInstanceManagedBackupSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.backupInput">backupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.backup">backup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.backupInput"></a>

```java
public java.lang.String getBackupInput();
```

- *Type:* java.lang.String

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.backup"></a>

```java
public java.lang.String getBackup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSourceOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceManagedBackupSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceManagedBackupSource">MemorystoreInstanceManagedBackupSource</a>

---


### MemorystoreInstanceNodeConfigList <a name="MemorystoreInstanceNodeConfigList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceNodeConfigList;

new MemorystoreInstanceNodeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.get"></a>

```java
public MemorystoreInstanceNodeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceNodeConfigOutputReference <a name="MemorystoreInstanceNodeConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceNodeConfigOutputReference;

new MemorystoreInstanceNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfig">MemorystoreInstanceNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfigOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceNodeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceNodeConfig">MemorystoreInstanceNodeConfig</a>

---


### MemorystoreInstancePersistenceConfigAofConfigOutputReference <a name="MemorystoreInstancePersistenceConfigAofConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePersistenceConfigAofConfigOutputReference;

new MemorystoreInstancePersistenceConfigAofConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resetAppendFsync">resetAppendFsync</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppendFsync` <a name="resetAppendFsync" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.resetAppendFsync"></a>

```java
public void resetAppendFsync()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsyncInput">appendFsyncInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync">appendFsync</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appendFsyncInput`<sup>Optional</sup> <a name="appendFsyncInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsyncInput"></a>

```java
public java.lang.String getAppendFsyncInput();
```

- *Type:* java.lang.String

---

##### `appendFsync`<sup>Required</sup> <a name="appendFsync" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync"></a>

```java
public java.lang.String getAppendFsync();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue"></a>

```java
public MemorystoreInstancePersistenceConfigAofConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a>

---


### MemorystoreInstancePersistenceConfigOutputReference <a name="MemorystoreInstancePersistenceConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePersistenceConfigOutputReference;

new MemorystoreInstancePersistenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putAofConfig">putAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putRdbConfig">putRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetAofConfig">resetAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetRdbConfig">resetRdbConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAofConfig` <a name="putAofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putAofConfig"></a>

```java
public void putAofConfig(MemorystoreInstancePersistenceConfigAofConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putAofConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a>

---

##### `putRdbConfig` <a name="putRdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putRdbConfig"></a>

```java
public void putRdbConfig(MemorystoreInstancePersistenceConfigRdbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.putRdbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a>

---

##### `resetAofConfig` <a name="resetAofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetAofConfig"></a>

```java
public void resetAofConfig()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetRdbConfig` <a name="resetRdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.resetRdbConfig"></a>

```java
public void resetRdbConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.aofConfig">aofConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference">MemorystoreInstancePersistenceConfigAofConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig">rdbConfig</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference">MemorystoreInstancePersistenceConfigRdbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.aofConfigInput">aofConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.rdbConfigInput">rdbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aofConfig`<sup>Required</sup> <a name="aofConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.aofConfig"></a>

```java
public MemorystoreInstancePersistenceConfigAofConfigOutputReference getAofConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfigOutputReference">MemorystoreInstancePersistenceConfigAofConfigOutputReference</a>

---

##### `rdbConfig`<sup>Required</sup> <a name="rdbConfig" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig"></a>

```java
public MemorystoreInstancePersistenceConfigRdbConfigOutputReference getRdbConfig();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference">MemorystoreInstancePersistenceConfigRdbConfigOutputReference</a>

---

##### `aofConfigInput`<sup>Optional</sup> <a name="aofConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.aofConfigInput"></a>

```java
public MemorystoreInstancePersistenceConfigAofConfig getAofConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigAofConfig">MemorystoreInstancePersistenceConfigAofConfig</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `rdbConfigInput`<sup>Optional</sup> <a name="rdbConfigInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.rdbConfigInput"></a>

```java
public MemorystoreInstancePersistenceConfigRdbConfig getRdbConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigOutputReference.property.internalValue"></a>

```java
public MemorystoreInstancePersistenceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfig">MemorystoreInstancePersistenceConfig</a>

---


### MemorystoreInstancePersistenceConfigRdbConfigOutputReference <a name="MemorystoreInstancePersistenceConfigRdbConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference;

new MemorystoreInstancePersistenceConfigRdbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod">resetRdbSnapshotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime">resetRdbSnapshotStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRdbSnapshotPeriod` <a name="resetRdbSnapshotPeriod" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod"></a>

```java
public void resetRdbSnapshotPeriod()
```

##### `resetRdbSnapshotStartTime` <a name="resetRdbSnapshotStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime"></a>

```java
public void resetRdbSnapshotStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput">rdbSnapshotPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput">rdbSnapshotStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotPeriodInput`<sup>Optional</sup> <a name="rdbSnapshotPeriodInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```java
public java.lang.String getRdbSnapshotPeriodInput();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="rdbSnapshotStartTimeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```java
public java.lang.String getRdbSnapshotStartTimeInput();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotPeriod`<sup>Required</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod"></a>

```java
public java.lang.String getRdbSnapshotPeriod();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotStartTime`<sup>Required</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime"></a>

```java
public java.lang.String getRdbSnapshotStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue"></a>

```java
public MemorystoreInstancePersistenceConfigRdbConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePersistenceConfigRdbConfig">MemorystoreInstancePersistenceConfigRdbConfig</a>

---


### MemorystoreInstancePscAttachmentDetailsList <a name="MemorystoreInstancePscAttachmentDetailsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePscAttachmentDetailsList;

new MemorystoreInstancePscAttachmentDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.get"></a>

```java
public MemorystoreInstancePscAttachmentDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstancePscAttachmentDetailsOutputReference <a name="MemorystoreInstancePscAttachmentDetailsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePscAttachmentDetailsOutputReference;

new MemorystoreInstancePscAttachmentDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetails">MemorystoreInstancePscAttachmentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetailsOutputReference.property.internalValue"></a>

```java
public MemorystoreInstancePscAttachmentDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAttachmentDetails">MemorystoreInstancePscAttachmentDetails</a>

---


### MemorystoreInstancePscAutoConnectionsList <a name="MemorystoreInstancePscAutoConnectionsList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePscAutoConnectionsList;

new MemorystoreInstancePscAutoConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.get"></a>

```java
public MemorystoreInstancePscAutoConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstancePscAutoConnectionsOutputReference <a name="MemorystoreInstancePscAutoConnectionsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstancePscAutoConnectionsOutputReference;

new MemorystoreInstancePscAutoConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnections">MemorystoreInstancePscAutoConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus"></a>

```java
public java.lang.String getPscConnectionStatus();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue"></a>

```java
public MemorystoreInstancePscAutoConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstancePscAutoConnections">MemorystoreInstancePscAutoConnections</a>

---


### MemorystoreInstanceStateInfoList <a name="MemorystoreInstanceStateInfoList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceStateInfoList;

new MemorystoreInstanceStateInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.get"></a>

```java
public MemorystoreInstanceStateInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceStateInfoOutputReference <a name="MemorystoreInstanceStateInfoOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceStateInfoOutputReference;

new MemorystoreInstanceStateInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.updateInfo">updateInfo</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList">MemorystoreInstanceStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfo">MemorystoreInstanceStateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `updateInfo`<sup>Required</sup> <a name="updateInfo" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.updateInfo"></a>

```java
public MemorystoreInstanceStateInfoUpdateInfoList getUpdateInfo();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList">MemorystoreInstanceStateInfoUpdateInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceStateInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfo">MemorystoreInstanceStateInfo</a>

---


### MemorystoreInstanceStateInfoUpdateInfoList <a name="MemorystoreInstanceStateInfoUpdateInfoList" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceStateInfoUpdateInfoList;

new MemorystoreInstanceStateInfoUpdateInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.get"></a>

```java
public MemorystoreInstanceStateInfoUpdateInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MemorystoreInstanceStateInfoUpdateInfoOutputReference <a name="MemorystoreInstanceStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceStateInfoUpdateInfoOutputReference;

new MemorystoreInstanceStateInfoUpdateInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion">targetEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType">targetNodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount">targetReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount">targetShardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfo">MemorystoreInstanceStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetEngineVersion`<sup>Required</sup> <a name="targetEngineVersion" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetEngineVersion"></a>

```java
public java.lang.String getTargetEngineVersion();
```

- *Type:* java.lang.String

---

##### `targetNodeType`<sup>Required</sup> <a name="targetNodeType" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetNodeType"></a>

```java
public java.lang.String getTargetNodeType();
```

- *Type:* java.lang.String

---

##### `targetReplicaCount`<sup>Required</sup> <a name="targetReplicaCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```java
public java.lang.Number getTargetReplicaCount();
```

- *Type:* java.lang.Number

---

##### `targetShardCount`<sup>Required</sup> <a name="targetShardCount" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```java
public java.lang.Number getTargetShardCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceStateInfoUpdateInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceStateInfoUpdateInfo">MemorystoreInstanceStateInfoUpdateInfo</a>

---


### MemorystoreInstanceTimeoutsOutputReference <a name="MemorystoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceTimeoutsOutputReference;

new MemorystoreInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceTimeouts">MemorystoreInstanceTimeouts</a>

---


### MemorystoreInstanceZoneDistributionConfigOutputReference <a name="MemorystoreInstanceZoneDistributionConfigOutputReference" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.memorystore_instance.MemorystoreInstanceZoneDistributionConfigOutputReference;

new MemorystoreInstanceZoneDistributionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue"></a>

```java
public MemorystoreInstanceZoneDistributionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstance.MemorystoreInstanceZoneDistributionConfig">MemorystoreInstanceZoneDistributionConfig</a>

---



