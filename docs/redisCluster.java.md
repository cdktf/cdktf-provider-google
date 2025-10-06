# `redisCluster` Submodule <a name="`redisCluster` Submodule" id="@cdktf/provider-google.redisCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisCluster <a name="RedisCluster" id="@cdktf/provider-google.redisCluster.RedisCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster google_redis_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisCluster;

RedisCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .shardCount(java.lang.Number)
//  .allowFewerZonesDeployment(java.lang.Boolean|IResolvable)
//  .authorizationMode(java.lang.String)
//  .automatedBackupConfig(RedisClusterAutomatedBackupConfig)
//  .crossClusterReplicationConfig(RedisClusterCrossClusterReplicationConfig)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .gcsSource(RedisClusterGcsSource)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .maintenancePolicy(RedisClusterMaintenancePolicy)
//  .managedBackupSource(RedisClusterManagedBackupSource)
//  .name(java.lang.String)
//  .nodeType(java.lang.String)
//  .persistenceConfig(RedisClusterPersistenceConfig)
//  .project(java.lang.String)
//  .pscConfigs(IResolvable|java.util.List<RedisClusterPscConfigs>)
//  .redisConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .region(java.lang.String)
//  .replicaCount(java.lang.Number)
//  .timeouts(RedisClusterTimeouts)
//  .transitEncryptionMode(java.lang.String)
//  .zoneDistributionConfig(RedisClusterZoneDistributionConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Required. Number of shards for the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.allowFewerZonesDeployment">allowFewerZonesDeployment</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allows customers to specify if they are okay with deploying a multi-zone cluster in less than 3 zones. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.authorizationMode">authorizationMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.automatedBackupConfig">automatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig">RedisClusterAutomatedBackupConfig</a></code> | automated_backup_config block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.crossClusterReplicationConfig">crossClusterReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig">RedisClusterCrossClusterReplicationConfig</a></code> | cross_cluster_replication_config block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.gcsSource">gcsSource</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource">RedisClusterGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#id RedisCluster#id}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used to encrypt the at-rest data of the cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.managedBackupSource">managedBackupSource</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource">RedisClusterManagedBackupSource</a></code> | managed_backup_source block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | The nodeType for the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig">RedisClusterPersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#project RedisCluster#project}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.pscConfigs">pscConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>></code> | psc_configs block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.redisConfigs">redisConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configure Redis Cluster behavior using a subset of native Redis configuration parameters. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Optional. The number of replica nodes per shard. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.shardCount"></a>

- *Type:* java.lang.Number

Required. Number of shards for the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#shard_count RedisCluster#shard_count}

---

##### `allowFewerZonesDeployment`<sup>Optional</sup> <a name="allowFewerZonesDeployment" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.allowFewerZonesDeployment"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allows customers to specify if they are okay with deploying a multi-zone cluster in less than 3 zones.

Once set, if there is a zonal outage during
the cluster creation, the cluster will only be deployed in 2 zones, and
stay within the 2 zones for its lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#allow_fewer_zones_deployment RedisCluster#allow_fewer_zones_deployment}

---

##### `authorizationMode`<sup>Optional</sup> <a name="authorizationMode" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.authorizationMode"></a>

- *Type:* java.lang.String

Optional.

The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#authorization_mode RedisCluster#authorization_mode}

---

##### `automatedBackupConfig`<sup>Optional</sup> <a name="automatedBackupConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.automatedBackupConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig">RedisClusterAutomatedBackupConfig</a>

automated_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#automated_backup_config RedisCluster#automated_backup_config}

---

##### `crossClusterReplicationConfig`<sup>Optional</sup> <a name="crossClusterReplicationConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.crossClusterReplicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig">RedisClusterCrossClusterReplicationConfig</a>

cross_cluster_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#cross_cluster_replication_config RedisCluster#cross_cluster_replication_config}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Optional.

Indicates if the cluster is deletion protected or not.
If the value if set to true, any delete cluster operation will fail.
Default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#deletion_protection_enabled RedisCluster#deletion_protection_enabled}

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.gcsSource"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource">RedisClusterGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#gcs_source RedisCluster#gcs_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#id RedisCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

The KMS key used to encrypt the at-rest data of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#kms_key RedisCluster#kms_key}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#maintenance_policy RedisCluster#maintenance_policy}

---

##### `managedBackupSource`<sup>Optional</sup> <a name="managedBackupSource" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.managedBackupSource"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource">RedisClusterManagedBackupSource</a>

managed_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#managed_backup_source RedisCluster#managed_backup_source}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#name RedisCluster#name}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

The nodeType for the Redis cluster.

If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#node_type RedisCluster#node_type}

---

##### `persistenceConfig`<sup>Optional</sup> <a name="persistenceConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.persistenceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig">RedisClusterPersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#persistence_config RedisCluster#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#project RedisCluster#project}.

---

##### `pscConfigs`<sup>Optional</sup> <a name="pscConfigs" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.pscConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>>

psc_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#psc_configs RedisCluster#psc_configs}

---

##### `redisConfigs`<sup>Optional</sup> <a name="redisConfigs" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.redisConfigs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configure Redis Cluster behavior using a subset of native Redis configuration parameters.

Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#redis_configs RedisCluster#redis_configs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#region RedisCluster#region}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.replicaCount"></a>

- *Type:* java.lang.Number

Optional. The number of replica nodes per shard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#replica_count RedisCluster#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#timeouts RedisCluster#timeouts}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.transitEncryptionMode"></a>

- *Type:* java.lang.String

Optional.

The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#transit_encryption_mode RedisCluster#transit_encryption_mode}

---

##### `zoneDistributionConfig`<sup>Optional</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.zoneDistributionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#zone_distribution_config RedisCluster#zone_distribution_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putAutomatedBackupConfig">putAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putCrossClusterReplicationConfig">putCrossClusterReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putGcsSource">putGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putManagedBackupSource">putManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putPersistenceConfig">putPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putPscConfigs">putPscConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putZoneDistributionConfig">putZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetAllowFewerZonesDeployment">resetAllowFewerZonesDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetAuthorizationMode">resetAuthorizationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetAutomatedBackupConfig">resetAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetCrossClusterReplicationConfig">resetCrossClusterReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetGcsSource">resetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetManagedBackupSource">resetManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetPersistenceConfig">resetPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetPscConfigs">resetPscConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetRedisConfigs">resetRedisConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetTransitEncryptionMode">resetTransitEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetZoneDistributionConfig">resetZoneDistributionConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.redisCluster.RedisCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.redisCluster.RedisCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.redisCluster.RedisCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.redisCluster.RedisCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.redisCluster.RedisCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.redisCluster.RedisCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.redisCluster.RedisCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.redisCluster.RedisCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.redisCluster.RedisCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisCluster.RedisCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.redisCluster.RedisCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.redisCluster.RedisCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.redisCluster.RedisCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.redisCluster.RedisCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisCluster.RedisCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.redisCluster.RedisCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomatedBackupConfig` <a name="putAutomatedBackupConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.putAutomatedBackupConfig"></a>

```java
public void putAutomatedBackupConfig(RedisClusterAutomatedBackupConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putAutomatedBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig">RedisClusterAutomatedBackupConfig</a>

---

##### `putCrossClusterReplicationConfig` <a name="putCrossClusterReplicationConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.putCrossClusterReplicationConfig"></a>

```java
public void putCrossClusterReplicationConfig(RedisClusterCrossClusterReplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putCrossClusterReplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig">RedisClusterCrossClusterReplicationConfig</a>

---

##### `putGcsSource` <a name="putGcsSource" id="@cdktf/provider-google.redisCluster.RedisCluster.putGcsSource"></a>

```java
public void putGcsSource(RedisClusterGcsSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putGcsSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource">RedisClusterGcsSource</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google.redisCluster.RedisCluster.putMaintenancePolicy"></a>

```java
public void putMaintenancePolicy(RedisClusterMaintenancePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a>

---

##### `putManagedBackupSource` <a name="putManagedBackupSource" id="@cdktf/provider-google.redisCluster.RedisCluster.putManagedBackupSource"></a>

```java
public void putManagedBackupSource(RedisClusterManagedBackupSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putManagedBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource">RedisClusterManagedBackupSource</a>

---

##### `putPersistenceConfig` <a name="putPersistenceConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.putPersistenceConfig"></a>

```java
public void putPersistenceConfig(RedisClusterPersistenceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig">RedisClusterPersistenceConfig</a>

---

##### `putPscConfigs` <a name="putPscConfigs" id="@cdktf/provider-google.redisCluster.RedisCluster.putPscConfigs"></a>

```java
public void putPscConfigs(IResolvable|java.util.List<RedisClusterPscConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putPscConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.redisCluster.RedisCluster.putTimeouts"></a>

```java
public void putTimeouts(RedisClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>

---

##### `putZoneDistributionConfig` <a name="putZoneDistributionConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.putZoneDistributionConfig"></a>

```java
public void putZoneDistributionConfig(RedisClusterZoneDistributionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putZoneDistributionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a>

---

##### `resetAllowFewerZonesDeployment` <a name="resetAllowFewerZonesDeployment" id="@cdktf/provider-google.redisCluster.RedisCluster.resetAllowFewerZonesDeployment"></a>

```java
public void resetAllowFewerZonesDeployment()
```

##### `resetAuthorizationMode` <a name="resetAuthorizationMode" id="@cdktf/provider-google.redisCluster.RedisCluster.resetAuthorizationMode"></a>

```java
public void resetAuthorizationMode()
```

##### `resetAutomatedBackupConfig` <a name="resetAutomatedBackupConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.resetAutomatedBackupConfig"></a>

```java
public void resetAutomatedBackupConfig()
```

##### `resetCrossClusterReplicationConfig` <a name="resetCrossClusterReplicationConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.resetCrossClusterReplicationConfig"></a>

```java
public void resetCrossClusterReplicationConfig()
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-google.redisCluster.RedisCluster.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetGcsSource` <a name="resetGcsSource" id="@cdktf/provider-google.redisCluster.RedisCluster.resetGcsSource"></a>

```java
public void resetGcsSource()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.redisCluster.RedisCluster.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.redisCluster.RedisCluster.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google.redisCluster.RedisCluster.resetMaintenancePolicy"></a>

```java
public void resetMaintenancePolicy()
```

##### `resetManagedBackupSource` <a name="resetManagedBackupSource" id="@cdktf/provider-google.redisCluster.RedisCluster.resetManagedBackupSource"></a>

```java
public void resetManagedBackupSource()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.redisCluster.RedisCluster.resetName"></a>

```java
public void resetName()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-google.redisCluster.RedisCluster.resetNodeType"></a>

```java
public void resetNodeType()
```

##### `resetPersistenceConfig` <a name="resetPersistenceConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.resetPersistenceConfig"></a>

```java
public void resetPersistenceConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.redisCluster.RedisCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetPscConfigs` <a name="resetPscConfigs" id="@cdktf/provider-google.redisCluster.RedisCluster.resetPscConfigs"></a>

```java
public void resetPscConfigs()
```

##### `resetRedisConfigs` <a name="resetRedisConfigs" id="@cdktf/provider-google.redisCluster.RedisCluster.resetRedisConfigs"></a>

```java
public void resetRedisConfigs()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.redisCluster.RedisCluster.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktf/provider-google.redisCluster.RedisCluster.resetReplicaCount"></a>

```java
public void resetReplicaCount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.redisCluster.RedisCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitEncryptionMode` <a name="resetTransitEncryptionMode" id="@cdktf/provider-google.redisCluster.RedisCluster.resetTransitEncryptionMode"></a>

```java
public void resetTransitEncryptionMode()
```

##### `resetZoneDistributionConfig` <a name="resetZoneDistributionConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.resetZoneDistributionConfig"></a>

```java
public void resetZoneDistributionConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedisCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.redisCluster.RedisCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisCluster;

RedisCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisCluster.RedisCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.redisCluster.RedisCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisCluster;

RedisCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisCluster.RedisCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.redisCluster.RedisCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisCluster;

RedisCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisCluster.RedisCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisCluster;

RedisCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedisCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RedisCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedisCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedisCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RedisCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.automatedBackupConfig">automatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference">RedisClusterAutomatedBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.backupCollection">backupCollection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.crossClusterReplicationConfig">crossClusterReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference">RedisClusterCrossClusterReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.discoveryEndpoints">discoveryEndpoints</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList">RedisClusterDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.gcsSource">gcsSource</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference">RedisClusterGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference">RedisClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList">RedisClusterMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.managedBackupSource">managedBackupSource</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference">RedisClusterManagedBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.managedServerCa">managedServerCa</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList">RedisClusterManagedServerCaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference">RedisClusterPersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.preciseSizeGb">preciseSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.pscConfigs">pscConfigs</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList">RedisClusterPscConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.pscConnections">pscConnections</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList">RedisClusterPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.pscServiceAttachments">pscServiceAttachments</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList">RedisClusterPscServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.stateInfo">stateInfo</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList">RedisClusterStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference">RedisClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference">RedisClusterZoneDistributionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.allowFewerZonesDeploymentInput">allowFewerZonesDeploymentInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.authorizationModeInput">authorizationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.automatedBackupConfigInput">automatedBackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig">RedisClusterAutomatedBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.crossClusterReplicationConfigInput">crossClusterReplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig">RedisClusterCrossClusterReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.gcsSourceInput">gcsSourceInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource">RedisClusterGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.managedBackupSourceInput">managedBackupSourceInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource">RedisClusterManagedBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.persistenceConfigInput">persistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig">RedisClusterPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.pscConfigsInput">pscConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.redisConfigsInput">redisConfigsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.replicaCountInput">replicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.shardCountInput">shardCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.transitEncryptionModeInput">transitEncryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.zoneDistributionConfigInput">zoneDistributionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.allowFewerZonesDeployment">allowFewerZonesDeployment</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.authorizationMode">authorizationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.redisConfigs">redisConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.redisCluster.RedisCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.redisCluster.RedisCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.redisCluster.RedisCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.redisCluster.RedisCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.redisCluster.RedisCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.redisCluster.RedisCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisCluster.RedisCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisCluster.RedisCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisCluster.RedisCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisCluster.RedisCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisCluster.RedisCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisCluster.RedisCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automatedBackupConfig`<sup>Required</sup> <a name="automatedBackupConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.property.automatedBackupConfig"></a>

```java
public RedisClusterAutomatedBackupConfigOutputReference getAutomatedBackupConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference">RedisClusterAutomatedBackupConfigOutputReference</a>

---

##### `backupCollection`<sup>Required</sup> <a name="backupCollection" id="@cdktf/provider-google.redisCluster.RedisCluster.property.backupCollection"></a>

```java
public java.lang.String getBackupCollection();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.redisCluster.RedisCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `crossClusterReplicationConfig`<sup>Required</sup> <a name="crossClusterReplicationConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.property.crossClusterReplicationConfig"></a>

```java
public RedisClusterCrossClusterReplicationConfigOutputReference getCrossClusterReplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference">RedisClusterCrossClusterReplicationConfigOutputReference</a>

---

##### `discoveryEndpoints`<sup>Required</sup> <a name="discoveryEndpoints" id="@cdktf/provider-google.redisCluster.RedisCluster.property.discoveryEndpoints"></a>

```java
public RedisClusterDiscoveryEndpointsList getDiscoveryEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList">RedisClusterDiscoveryEndpointsList</a>

---

##### `gcsSource`<sup>Required</sup> <a name="gcsSource" id="@cdktf/provider-google.redisCluster.RedisCluster.property.gcsSource"></a>

```java
public RedisClusterGcsSourceOutputReference getGcsSource();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference">RedisClusterGcsSourceOutputReference</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.redisCluster.RedisCluster.property.maintenancePolicy"></a>

```java
public RedisClusterMaintenancePolicyOutputReference getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference">RedisClusterMaintenancePolicyOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-google.redisCluster.RedisCluster.property.maintenanceSchedule"></a>

```java
public RedisClusterMaintenanceScheduleList getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList">RedisClusterMaintenanceScheduleList</a>

---

##### `managedBackupSource`<sup>Required</sup> <a name="managedBackupSource" id="@cdktf/provider-google.redisCluster.RedisCluster.property.managedBackupSource"></a>

```java
public RedisClusterManagedBackupSourceOutputReference getManagedBackupSource();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference">RedisClusterManagedBackupSourceOutputReference</a>

---

##### `managedServerCa`<sup>Required</sup> <a name="managedServerCa" id="@cdktf/provider-google.redisCluster.RedisCluster.property.managedServerCa"></a>

```java
public RedisClusterManagedServerCaList getManagedServerCa();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList">RedisClusterManagedServerCaList</a>

---

##### `persistenceConfig`<sup>Required</sup> <a name="persistenceConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.property.persistenceConfig"></a>

```java
public RedisClusterPersistenceConfigOutputReference getPersistenceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference">RedisClusterPersistenceConfigOutputReference</a>

---

##### `preciseSizeGb`<sup>Required</sup> <a name="preciseSizeGb" id="@cdktf/provider-google.redisCluster.RedisCluster.property.preciseSizeGb"></a>

```java
public java.lang.Number getPreciseSizeGb();
```

- *Type:* java.lang.Number

---

##### `pscConfigs`<sup>Required</sup> <a name="pscConfigs" id="@cdktf/provider-google.redisCluster.RedisCluster.property.pscConfigs"></a>

```java
public RedisClusterPscConfigsList getPscConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList">RedisClusterPscConfigsList</a>

---

##### `pscConnections`<sup>Required</sup> <a name="pscConnections" id="@cdktf/provider-google.redisCluster.RedisCluster.property.pscConnections"></a>

```java
public RedisClusterPscConnectionsList getPscConnections();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList">RedisClusterPscConnectionsList</a>

---

##### `pscServiceAttachments`<sup>Required</sup> <a name="pscServiceAttachments" id="@cdktf/provider-google.redisCluster.RedisCluster.property.pscServiceAttachments"></a>

```java
public RedisClusterPscServiceAttachmentsList getPscServiceAttachments();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList">RedisClusterPscServiceAttachmentsList</a>

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-google.redisCluster.RedisCluster.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.redisCluster.RedisCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInfo`<sup>Required</sup> <a name="stateInfo" id="@cdktf/provider-google.redisCluster.RedisCluster.property.stateInfo"></a>

```java
public RedisClusterStateInfoList getStateInfo();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList">RedisClusterStateInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.redisCluster.RedisCluster.property.timeouts"></a>

```java
public RedisClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference">RedisClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.redisCluster.RedisCluster.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `zoneDistributionConfig`<sup>Required</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google.redisCluster.RedisCluster.property.zoneDistributionConfig"></a>

```java
public RedisClusterZoneDistributionConfigOutputReference getZoneDistributionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference">RedisClusterZoneDistributionConfigOutputReference</a>

---

##### `allowFewerZonesDeploymentInput`<sup>Optional</sup> <a name="allowFewerZonesDeploymentInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.allowFewerZonesDeploymentInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowFewerZonesDeploymentInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `authorizationModeInput`<sup>Optional</sup> <a name="authorizationModeInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.authorizationModeInput"></a>

```java
public java.lang.String getAuthorizationModeInput();
```

- *Type:* java.lang.String

---

##### `automatedBackupConfigInput`<sup>Optional</sup> <a name="automatedBackupConfigInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.automatedBackupConfigInput"></a>

```java
public RedisClusterAutomatedBackupConfig getAutomatedBackupConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig">RedisClusterAutomatedBackupConfig</a>

---

##### `crossClusterReplicationConfigInput`<sup>Optional</sup> <a name="crossClusterReplicationConfigInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.crossClusterReplicationConfigInput"></a>

```java
public RedisClusterCrossClusterReplicationConfig getCrossClusterReplicationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig">RedisClusterCrossClusterReplicationConfig</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `gcsSourceInput`<sup>Optional</sup> <a name="gcsSourceInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.gcsSourceInput"></a>

```java
public RedisClusterGcsSource getGcsSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource">RedisClusterGcsSource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.maintenancePolicyInput"></a>

```java
public RedisClusterMaintenancePolicy getMaintenancePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a>

---

##### `managedBackupSourceInput`<sup>Optional</sup> <a name="managedBackupSourceInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.managedBackupSourceInput"></a>

```java
public RedisClusterManagedBackupSource getManagedBackupSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource">RedisClusterManagedBackupSource</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `persistenceConfigInput`<sup>Optional</sup> <a name="persistenceConfigInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.persistenceConfigInput"></a>

```java
public RedisClusterPersistenceConfig getPersistenceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig">RedisClusterPersistenceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pscConfigsInput`<sup>Optional</sup> <a name="pscConfigsInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.pscConfigsInput"></a>

```java
public IResolvable|java.util.List<RedisClusterPscConfigs> getPscConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>>

---

##### `redisConfigsInput`<sup>Optional</sup> <a name="redisConfigsInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.redisConfigsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRedisConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.replicaCountInput"></a>

```java
public java.lang.Number getReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.shardCountInput"></a>

```java
public java.lang.Number getShardCountInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.timeoutsInput"></a>

```java
public IResolvable|RedisClusterTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>

---

##### `transitEncryptionModeInput`<sup>Optional</sup> <a name="transitEncryptionModeInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.transitEncryptionModeInput"></a>

```java
public java.lang.String getTransitEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `zoneDistributionConfigInput`<sup>Optional</sup> <a name="zoneDistributionConfigInput" id="@cdktf/provider-google.redisCluster.RedisCluster.property.zoneDistributionConfigInput"></a>

```java
public RedisClusterZoneDistributionConfig getZoneDistributionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a>

---

##### `allowFewerZonesDeployment`<sup>Required</sup> <a name="allowFewerZonesDeployment" id="@cdktf/provider-google.redisCluster.RedisCluster.property.allowFewerZonesDeployment"></a>

```java
public java.lang.Boolean|IResolvable getAllowFewerZonesDeployment();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `authorizationMode`<sup>Required</sup> <a name="authorizationMode" id="@cdktf/provider-google.redisCluster.RedisCluster.property.authorizationMode"></a>

```java
public java.lang.String getAuthorizationMode();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.redisCluster.RedisCluster.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.redisCluster.RedisCluster.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.redisCluster.RedisCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-google.redisCluster.RedisCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.redisCluster.RedisCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `redisConfigs`<sup>Required</sup> <a name="redisConfigs" id="@cdktf/provider-google.redisCluster.RedisCluster.property.redisConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRedisConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.redisCluster.RedisCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktf/provider-google.redisCluster.RedisCluster.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google.redisCluster.RedisCluster.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

---

##### `transitEncryptionMode`<sup>Required</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google.redisCluster.RedisCluster.property.transitEncryptionMode"></a>

```java
public java.lang.String getTransitEncryptionMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.redisCluster.RedisCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterAutomatedBackupConfig <a name="RedisClusterAutomatedBackupConfig" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterAutomatedBackupConfig;

RedisClusterAutomatedBackupConfig.builder()
    .fixedFrequencySchedule(RedisClusterAutomatedBackupConfigFixedFrequencySchedule)
    .retention(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig.property.fixedFrequencySchedule">fixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule">RedisClusterAutomatedBackupConfigFixedFrequencySchedule</a></code> | fixed_frequency_schedule block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig.property.retention">retention</a></code> | <code>java.lang.String</code> | How long to keep automated backups before the backups are deleted. |

---

##### `fixedFrequencySchedule`<sup>Required</sup> <a name="fixedFrequencySchedule" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig.property.fixedFrequencySchedule"></a>

```java
public RedisClusterAutomatedBackupConfigFixedFrequencySchedule getFixedFrequencySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule">RedisClusterAutomatedBackupConfigFixedFrequencySchedule</a>

fixed_frequency_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#fixed_frequency_schedule RedisCluster#fixed_frequency_schedule}

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig.property.retention"></a>

```java
public java.lang.String getRetention();
```

- *Type:* java.lang.String

How long to keep automated backups before the backups are deleted.

The value should be between 1 day and 365 days. If not specified, the default value is 35 days.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#retention RedisCluster#retention}

---

### RedisClusterAutomatedBackupConfigFixedFrequencySchedule <a name="RedisClusterAutomatedBackupConfigFixedFrequencySchedule" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule;

RedisClusterAutomatedBackupConfigFixedFrequencySchedule.builder()
    .startTime(RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | start_time block. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule.property.startTime"></a>

```java
public RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#start_time RedisCluster#start_time}

---

### RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime <a name="RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime;

RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime.builder()
    .hours(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of a day in 24 hour format. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and typically must be less than or equal to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#hours RedisCluster#hours}

---

### RedisClusterConfig <a name="RedisClusterConfig" id="@cdktf/provider-google.redisCluster.RedisClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterConfig;

RedisClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .shardCount(java.lang.Number)
//  .allowFewerZonesDeployment(java.lang.Boolean|IResolvable)
//  .authorizationMode(java.lang.String)
//  .automatedBackupConfig(RedisClusterAutomatedBackupConfig)
//  .crossClusterReplicationConfig(RedisClusterCrossClusterReplicationConfig)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .gcsSource(RedisClusterGcsSource)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .maintenancePolicy(RedisClusterMaintenancePolicy)
//  .managedBackupSource(RedisClusterManagedBackupSource)
//  .name(java.lang.String)
//  .nodeType(java.lang.String)
//  .persistenceConfig(RedisClusterPersistenceConfig)
//  .project(java.lang.String)
//  .pscConfigs(IResolvable|java.util.List<RedisClusterPscConfigs>)
//  .redisConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .region(java.lang.String)
//  .replicaCount(java.lang.Number)
//  .timeouts(RedisClusterTimeouts)
//  .transitEncryptionMode(java.lang.String)
//  .zoneDistributionConfig(RedisClusterZoneDistributionConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Required. Number of shards for the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.allowFewerZonesDeployment">allowFewerZonesDeployment</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allows customers to specify if they are okay with deploying a multi-zone cluster in less than 3 zones. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.authorizationMode">authorizationMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.automatedBackupConfig">automatedBackupConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig">RedisClusterAutomatedBackupConfig</a></code> | automated_backup_config block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.crossClusterReplicationConfig">crossClusterReplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig">RedisClusterCrossClusterReplicationConfig</a></code> | cross_cluster_replication_config block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.gcsSource">gcsSource</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource">RedisClusterGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#id RedisCluster#id}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key used to encrypt the at-rest data of the cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.managedBackupSource">managedBackupSource</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource">RedisClusterManagedBackupSource</a></code> | managed_backup_source block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | The nodeType for the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig">RedisClusterPersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#project RedisCluster#project}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.pscConfigs">pscConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>></code> | psc_configs block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.redisConfigs">redisConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configure Redis Cluster behavior using a subset of native Redis configuration parameters. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Optional. The number of replica nodes per shard. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.zoneDistributionConfig">zoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

Required. Number of shards for the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#shard_count RedisCluster#shard_count}

---

##### `allowFewerZonesDeployment`<sup>Optional</sup> <a name="allowFewerZonesDeployment" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.allowFewerZonesDeployment"></a>

```java
public java.lang.Boolean|IResolvable getAllowFewerZonesDeployment();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allows customers to specify if they are okay with deploying a multi-zone cluster in less than 3 zones.

Once set, if there is a zonal outage during
the cluster creation, the cluster will only be deployed in 2 zones, and
stay within the 2 zones for its lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#allow_fewer_zones_deployment RedisCluster#allow_fewer_zones_deployment}

---

##### `authorizationMode`<sup>Optional</sup> <a name="authorizationMode" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.authorizationMode"></a>

```java
public java.lang.String getAuthorizationMode();
```

- *Type:* java.lang.String

Optional.

The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#authorization_mode RedisCluster#authorization_mode}

---

##### `automatedBackupConfig`<sup>Optional</sup> <a name="automatedBackupConfig" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.automatedBackupConfig"></a>

```java
public RedisClusterAutomatedBackupConfig getAutomatedBackupConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig">RedisClusterAutomatedBackupConfig</a>

automated_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#automated_backup_config RedisCluster#automated_backup_config}

---

##### `crossClusterReplicationConfig`<sup>Optional</sup> <a name="crossClusterReplicationConfig" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.crossClusterReplicationConfig"></a>

```java
public RedisClusterCrossClusterReplicationConfig getCrossClusterReplicationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig">RedisClusterCrossClusterReplicationConfig</a>

cross_cluster_replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#cross_cluster_replication_config RedisCluster#cross_cluster_replication_config}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Optional.

Indicates if the cluster is deletion protected or not.
If the value if set to true, any delete cluster operation will fail.
Default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#deletion_protection_enabled RedisCluster#deletion_protection_enabled}

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.gcsSource"></a>

```java
public RedisClusterGcsSource getGcsSource();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource">RedisClusterGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#gcs_source RedisCluster#gcs_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#id RedisCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS key used to encrypt the at-rest data of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#kms_key RedisCluster#kms_key}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.maintenancePolicy"></a>

```java
public RedisClusterMaintenancePolicy getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#maintenance_policy RedisCluster#maintenance_policy}

---

##### `managedBackupSource`<sup>Optional</sup> <a name="managedBackupSource" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.managedBackupSource"></a>

```java
public RedisClusterManagedBackupSource getManagedBackupSource();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource">RedisClusterManagedBackupSource</a>

managed_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#managed_backup_source RedisCluster#managed_backup_source}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#name RedisCluster#name}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

The nodeType for the Redis cluster.

If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#node_type RedisCluster#node_type}

---

##### `persistenceConfig`<sup>Optional</sup> <a name="persistenceConfig" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.persistenceConfig"></a>

```java
public RedisClusterPersistenceConfig getPersistenceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig">RedisClusterPersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#persistence_config RedisCluster#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#project RedisCluster#project}.

---

##### `pscConfigs`<sup>Optional</sup> <a name="pscConfigs" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.pscConfigs"></a>

```java
public IResolvable|java.util.List<RedisClusterPscConfigs> getPscConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>>

psc_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#psc_configs RedisCluster#psc_configs}

---

##### `redisConfigs`<sup>Optional</sup> <a name="redisConfigs" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.redisConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRedisConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configure Redis Cluster behavior using a subset of native Redis configuration parameters.

Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#redis_configs RedisCluster#redis_configs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#region RedisCluster#region}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

Optional. The number of replica nodes per shard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#replica_count RedisCluster#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.timeouts"></a>

```java
public RedisClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#timeouts RedisCluster#timeouts}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.transitEncryptionMode"></a>

```java
public java.lang.String getTransitEncryptionMode();
```

- *Type:* java.lang.String

Optional.

The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#transit_encryption_mode RedisCluster#transit_encryption_mode}

---

##### `zoneDistributionConfig`<sup>Optional</sup> <a name="zoneDistributionConfig" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.zoneDistributionConfig"></a>

```java
public RedisClusterZoneDistributionConfig getZoneDistributionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#zone_distribution_config RedisCluster#zone_distribution_config}

---

### RedisClusterCrossClusterReplicationConfig <a name="RedisClusterCrossClusterReplicationConfig" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfig;

RedisClusterCrossClusterReplicationConfig.builder()
//  .clusterRole(java.lang.String)
//  .primaryCluster(RedisClusterCrossClusterReplicationConfigPrimaryCluster)
//  .secondaryClusters(IResolvable|java.util.List<RedisClusterCrossClusterReplicationConfigSecondaryClusters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig.property.clusterRole">clusterRole</a></code> | <code>java.lang.String</code> | The role of the cluster in cross cluster replication. Supported values are:. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig.property.primaryCluster">primaryCluster</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster">RedisClusterCrossClusterReplicationConfigPrimaryCluster</a></code> | primary_cluster block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig.property.secondaryClusters">secondaryClusters</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters">RedisClusterCrossClusterReplicationConfigSecondaryClusters</a>></code> | secondary_clusters block. |

---

##### `clusterRole`<sup>Optional</sup> <a name="clusterRole" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig.property.clusterRole"></a>

```java
public java.lang.String getClusterRole();
```

- *Type:* java.lang.String

The role of the cluster in cross cluster replication. Supported values are:.

1. 'CLUSTER_ROLE_UNSPECIFIED': This is an independent cluster that has never participated in cross cluster replication. It allows both reads and writes.
2. 'NONE': This is an independent cluster that previously participated in cross cluster replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
3. 'PRIMARY': This cluster serves as the replication source for secondary clusters that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
4. 'SECONDARY': This cluster replicates data from the primary cluster. It allows only reads. Possible values: ["CLUSTER_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#cluster_role RedisCluster#cluster_role}

---

##### `primaryCluster`<sup>Optional</sup> <a name="primaryCluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig.property.primaryCluster"></a>

```java
public RedisClusterCrossClusterReplicationConfigPrimaryCluster getPrimaryCluster();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster">RedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

primary_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#primary_cluster RedisCluster#primary_cluster}

---

##### `secondaryClusters`<sup>Optional</sup> <a name="secondaryClusters" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig.property.secondaryClusters"></a>

```java
public IResolvable|java.util.List<RedisClusterCrossClusterReplicationConfigSecondaryClusters> getSecondaryClusters();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters">RedisClusterCrossClusterReplicationConfigSecondaryClusters</a>>

secondary_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#secondary_clusters RedisCluster#secondary_clusters}

---

### RedisClusterCrossClusterReplicationConfigMembership <a name="RedisClusterCrossClusterReplicationConfigMembership" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembership.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigMembership;

RedisClusterCrossClusterReplicationConfigMembership.builder()
    .build();
```


### RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster <a name="RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster;

RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster.builder()
    .build();
```


### RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters <a name="RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters;

RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters.builder()
    .build();
```


### RedisClusterCrossClusterReplicationConfigPrimaryCluster <a name="RedisClusterCrossClusterReplicationConfigPrimaryCluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster;

RedisClusterCrossClusterReplicationConfigPrimaryCluster.builder()
//  .cluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The full resource path of the primary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The full resource path of the primary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#cluster RedisCluster#cluster}

---

### RedisClusterCrossClusterReplicationConfigSecondaryClusters <a name="RedisClusterCrossClusterReplicationConfigSecondaryClusters" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters;

RedisClusterCrossClusterReplicationConfigSecondaryClusters.builder()
//  .cluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The full resource path of the secondary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The full resource path of the secondary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#cluster RedisCluster#cluster}

---

### RedisClusterDiscoveryEndpoints <a name="RedisClusterDiscoveryEndpoints" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterDiscoveryEndpoints;

RedisClusterDiscoveryEndpoints.builder()
    .build();
```


### RedisClusterDiscoveryEndpointsPscConfig <a name="RedisClusterDiscoveryEndpointsPscConfig" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterDiscoveryEndpointsPscConfig;

RedisClusterDiscoveryEndpointsPscConfig.builder()
    .build();
```


### RedisClusterGcsSource <a name="RedisClusterGcsSource" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterGcsSource;

RedisClusterGcsSource.builder()
    .uris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | URIs of the GCS objects to import. Example: gs://bucket1/object1, gs://bucket2/folder2/object2. |

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSource.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

URIs of the GCS objects to import. Example: gs://bucket1/object1, gs://bucket2/folder2/object2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#uris RedisCluster#uris}

---

### RedisClusterMaintenancePolicy <a name="RedisClusterMaintenancePolicy" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenancePolicy;

RedisClusterMaintenancePolicy.builder()
//  .weeklyMaintenanceWindow(IResolvable|java.util.List<RedisClusterMaintenancePolicyWeeklyMaintenanceWindow>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | weekly_maintenance_window block. |

---

##### `weeklyMaintenanceWindow`<sup>Optional</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```java
public IResolvable|java.util.List<RedisClusterMaintenancePolicyWeeklyMaintenanceWindow> getWeeklyMaintenanceWindow();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>>

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#weekly_maintenance_window RedisCluster#weekly_maintenance_window}

---

### RedisClusterMaintenancePolicyWeeklyMaintenanceWindow <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow;

RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.builder()
    .day(java.lang.String)
    .startTime(RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>java.lang.String</code> | Required. The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Required. The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#day RedisCluster#day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```java
public RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#start_time RedisCluster#start_time}

---

### RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime;

RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#hours RedisCluster#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#minutes RedisCluster#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#nanos RedisCluster#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#seconds RedisCluster#seconds}

---

### RedisClusterMaintenanceSchedule <a name="RedisClusterMaintenanceSchedule" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenanceSchedule;

RedisClusterMaintenanceSchedule.builder()
    .build();
```


### RedisClusterManagedBackupSource <a name="RedisClusterManagedBackupSource" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterManagedBackupSource;

RedisClusterManagedBackupSource.builder()
    .backup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource.property.backup">backup</a></code> | <code>java.lang.String</code> | Example: 'projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup}'. |

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource.property.backup"></a>

```java
public java.lang.String getBackup();
```

- *Type:* java.lang.String

Example: 'projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#backup RedisCluster#backup}

---

### RedisClusterManagedServerCa <a name="RedisClusterManagedServerCa" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterManagedServerCa;

RedisClusterManagedServerCa.builder()
    .build();
```


### RedisClusterManagedServerCaCaCerts <a name="RedisClusterManagedServerCaCaCerts" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCerts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterManagedServerCaCaCerts;

RedisClusterManagedServerCaCaCerts.builder()
    .build();
```


### RedisClusterPersistenceConfig <a name="RedisClusterPersistenceConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPersistenceConfig;

RedisClusterPersistenceConfig.builder()
//  .aofConfig(RedisClusterPersistenceConfigAofConfig)
//  .mode(java.lang.String)
//  .rdbConfig(RedisClusterPersistenceConfigRdbConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig.property.aofConfig">aofConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig">RedisClusterPersistenceConfigAofConfig</a></code> | aof_config block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig.property.rdbConfig">rdbConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig">RedisClusterPersistenceConfigRdbConfig</a></code> | rdb_config block. |

---

##### `aofConfig`<sup>Optional</sup> <a name="aofConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig.property.aofConfig"></a>

```java
public RedisClusterPersistenceConfigAofConfig getAofConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig">RedisClusterPersistenceConfigAofConfig</a>

aof_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#aof_config RedisCluster#aof_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.

* DISABLED: 	Persistence (both backup and restore) is disabled for the cluster.
* RDB: RDB based Persistence is enabled.
* AOF: AOF based Persistence is enabled. Possible values: ["PERSISTENCE_MODE_UNSPECIFIED", "DISABLED", "RDB", "AOF"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#mode RedisCluster#mode}

---

##### `rdbConfig`<sup>Optional</sup> <a name="rdbConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig.property.rdbConfig"></a>

```java
public RedisClusterPersistenceConfigRdbConfig getRdbConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig">RedisClusterPersistenceConfigRdbConfig</a>

rdb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#rdb_config RedisCluster#rdb_config}

---

### RedisClusterPersistenceConfigAofConfig <a name="RedisClusterPersistenceConfigAofConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPersistenceConfigAofConfig;

RedisClusterPersistenceConfigAofConfig.builder()
//  .appendFsync(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig.property.appendFsync">appendFsync</a></code> | <code>java.lang.String</code> | Optional. Available fsync modes. |

---

##### `appendFsync`<sup>Optional</sup> <a name="appendFsync" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig.property.appendFsync"></a>

```java
public java.lang.String getAppendFsync();
```

- *Type:* java.lang.String

Optional. Available fsync modes.

* NO - Do not explicitly call fsync(). Rely on OS defaults.
* EVERYSEC - Call fsync() once per second in a background thread. A balance between performance and durability.
* ALWAYS - Call fsync() for earch write command. Possible values: ["APPEND_FSYNC_UNSPECIFIED", "NO", "EVERYSEC", "ALWAYS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#append_fsync RedisCluster#append_fsync}

---

### RedisClusterPersistenceConfigRdbConfig <a name="RedisClusterPersistenceConfigRdbConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPersistenceConfigRdbConfig;

RedisClusterPersistenceConfigRdbConfig.builder()
//  .rdbSnapshotPeriod(java.lang.String)
//  .rdbSnapshotStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>java.lang.String</code> | Optional. Available snapshot periods for scheduling. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>java.lang.String</code> | The time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. |

---

##### `rdbSnapshotPeriod`<sup>Optional</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotPeriod"></a>

```java
public java.lang.String getRdbSnapshotPeriod();
```

- *Type:* java.lang.String

Optional. Available snapshot periods for scheduling.

* ONE_HOUR:	Snapshot every 1 hour.
* SIX_HOURS:	Snapshot every 6 hours.
* TWELVE_HOURS:	Snapshot every 12 hours.
* TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["SNAPSHOT_PERIOD_UNSPECIFIED", "ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#rdb_snapshot_period RedisCluster#rdb_snapshot_period}

---

##### `rdbSnapshotStartTime`<sup>Optional</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig.property.rdbSnapshotStartTime"></a>

```java
public java.lang.String getRdbSnapshotStartTime();
```

- *Type:* java.lang.String

The time that the first snapshot was/will be attempted, and to which future snapshots will be aligned.

If not provided, the current time will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#rdb_snapshot_start_time RedisCluster#rdb_snapshot_start_time}

---

### RedisClusterPscConfigs <a name="RedisClusterPscConfigs" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPscConfigs;

RedisClusterPscConfigs.builder()
    .network(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs.property.network">network</a></code> | <code>java.lang.String</code> | Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigs.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#network RedisCluster#network}

---

### RedisClusterPscConnections <a name="RedisClusterPscConnections" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPscConnections;

RedisClusterPscConnections.builder()
    .build();
```


### RedisClusterPscServiceAttachments <a name="RedisClusterPscServiceAttachments" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPscServiceAttachments;

RedisClusterPscServiceAttachments.builder()
    .build();
```


### RedisClusterStateInfo <a name="RedisClusterStateInfo" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterStateInfo;

RedisClusterStateInfo.builder()
    .build();
```


### RedisClusterStateInfoUpdateInfo <a name="RedisClusterStateInfoUpdateInfo" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterStateInfoUpdateInfo;

RedisClusterStateInfoUpdateInfo.builder()
    .build();
```


### RedisClusterTimeouts <a name="RedisClusterTimeouts" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterTimeouts;

RedisClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#create RedisCluster#create}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#delete RedisCluster#delete}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#update RedisCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#create RedisCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#delete RedisCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#update RedisCluster#update}.

---

### RedisClusterZoneDistributionConfig <a name="RedisClusterZoneDistributionConfig" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterZoneDistributionConfig;

RedisClusterZoneDistributionConfig.builder()
//  .mode(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Immutable. The zone for single zone Memorystore Redis cluster. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Immutable.

The mode for zone distribution for Memorystore Redis cluster.
If not provided, MULTI_ZONE will be used as default Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#mode RedisCluster#mode}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Immutable. The zone for single zone Memorystore Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/redis_cluster#zone RedisCluster#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference <a name="RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference;

new RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime"></a>

```java
public void putStartTime(RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule">RedisClusterAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTime"></a>

```java
public RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.startTimeInput"></a>

```java
public RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference.property.internalValue"></a>

```java
public RedisClusterAutomatedBackupConfigFixedFrequencySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule">RedisClusterAutomatedBackupConfigFixedFrequencySchedule</a>

---


### RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference <a name="RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference;

new RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference.property.internalValue"></a>

```java
public RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime</a>

---


### RedisClusterAutomatedBackupConfigOutputReference <a name="RedisClusterAutomatedBackupConfigOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterAutomatedBackupConfigOutputReference;

new RedisClusterAutomatedBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.putFixedFrequencySchedule">putFixedFrequencySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedFrequencySchedule` <a name="putFixedFrequencySchedule" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.putFixedFrequencySchedule"></a>

```java
public void putFixedFrequencySchedule(RedisClusterAutomatedBackupConfigFixedFrequencySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.putFixedFrequencySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule">RedisClusterAutomatedBackupConfigFixedFrequencySchedule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule">fixedFrequencySchedule</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput">fixedFrequencyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule">RedisClusterAutomatedBackupConfigFixedFrequencySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.retentionInput">retentionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.retention">retention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig">RedisClusterAutomatedBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedFrequencySchedule`<sup>Required</sup> <a name="fixedFrequencySchedule" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.fixedFrequencySchedule"></a>

```java
public RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference getFixedFrequencySchedule();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference">RedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference</a>

---

##### `fixedFrequencyScheduleInput`<sup>Optional</sup> <a name="fixedFrequencyScheduleInput" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.fixedFrequencyScheduleInput"></a>

```java
public RedisClusterAutomatedBackupConfigFixedFrequencySchedule getFixedFrequencyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigFixedFrequencySchedule">RedisClusterAutomatedBackupConfigFixedFrequencySchedule</a>

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.retentionInput"></a>

```java
public java.lang.String getRetentionInput();
```

- *Type:* java.lang.String

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.retention"></a>

```java
public java.lang.String getRetention();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfigOutputReference.property.internalValue"></a>

```java
public RedisClusterAutomatedBackupConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterAutomatedBackupConfig">RedisClusterAutomatedBackupConfig</a>

---


### RedisClusterCrossClusterReplicationConfigMembershipList <a name="RedisClusterCrossClusterReplicationConfigMembershipList" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigMembershipList;

new RedisClusterCrossClusterReplicationConfigMembershipList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.get"></a>

```java
public RedisClusterCrossClusterReplicationConfigMembershipOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterCrossClusterReplicationConfigMembershipOutputReference <a name="RedisClusterCrossClusterReplicationConfigMembershipOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference;

new RedisClusterCrossClusterReplicationConfigMembershipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.primaryCluster">primaryCluster</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList">RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.secondaryClusters">secondaryClusters</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList">RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembership">RedisClusterCrossClusterReplicationConfigMembership</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryCluster`<sup>Required</sup> <a name="primaryCluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.primaryCluster"></a>

```java
public RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList getPrimaryCluster();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList">RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList</a>

---

##### `secondaryClusters`<sup>Required</sup> <a name="secondaryClusters" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.secondaryClusters"></a>

```java
public RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList getSecondaryClusters();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList">RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipOutputReference.property.internalValue"></a>

```java
public RedisClusterCrossClusterReplicationConfigMembership getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembership">RedisClusterCrossClusterReplicationConfigMembership</a>

---


### RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList <a name="RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList;

new RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.get"></a>

```java
public RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference <a name="RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference;

new RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster">RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference.property.internalValue"></a>

```java
public RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster">RedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster</a>

---


### RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList <a name="RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList;

new RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.get"></a>

```java
public RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference <a name="RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference;

new RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters">RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference.property.internalValue"></a>

```java
public RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters">RedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters</a>

---


### RedisClusterCrossClusterReplicationConfigOutputReference <a name="RedisClusterCrossClusterReplicationConfigOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigOutputReference;

new RedisClusterCrossClusterReplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.putPrimaryCluster">putPrimaryCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.putSecondaryClusters">putSecondaryClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.resetClusterRole">resetClusterRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.resetPrimaryCluster">resetPrimaryCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.resetSecondaryClusters">resetSecondaryClusters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryCluster` <a name="putPrimaryCluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.putPrimaryCluster"></a>

```java
public void putPrimaryCluster(RedisClusterCrossClusterReplicationConfigPrimaryCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.putPrimaryCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster">RedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

---

##### `putSecondaryClusters` <a name="putSecondaryClusters" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.putSecondaryClusters"></a>

```java
public void putSecondaryClusters(IResolvable|java.util.List<RedisClusterCrossClusterReplicationConfigSecondaryClusters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.putSecondaryClusters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters">RedisClusterCrossClusterReplicationConfigSecondaryClusters</a>>

---

##### `resetClusterRole` <a name="resetClusterRole" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.resetClusterRole"></a>

```java
public void resetClusterRole()
```

##### `resetPrimaryCluster` <a name="resetPrimaryCluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.resetPrimaryCluster"></a>

```java
public void resetPrimaryCluster()
```

##### `resetSecondaryClusters` <a name="resetSecondaryClusters" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.resetSecondaryClusters"></a>

```java
public void resetSecondaryClusters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.membership">membership</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList">RedisClusterCrossClusterReplicationConfigMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.primaryCluster">primaryCluster</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference">RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClusters">secondaryClusters</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList">RedisClusterCrossClusterReplicationConfigSecondaryClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRoleInput">clusterRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.primaryClusterInput">primaryClusterInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster">RedisClusterCrossClusterReplicationConfigPrimaryCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClustersInput">secondaryClustersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters">RedisClusterCrossClusterReplicationConfigSecondaryClusters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRole">clusterRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig">RedisClusterCrossClusterReplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.membership"></a>

```java
public RedisClusterCrossClusterReplicationConfigMembershipList getMembership();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigMembershipList">RedisClusterCrossClusterReplicationConfigMembershipList</a>

---

##### `primaryCluster`<sup>Required</sup> <a name="primaryCluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.primaryCluster"></a>

```java
public RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference getPrimaryCluster();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference">RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference</a>

---

##### `secondaryClusters`<sup>Required</sup> <a name="secondaryClusters" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClusters"></a>

```java
public RedisClusterCrossClusterReplicationConfigSecondaryClustersList getSecondaryClusters();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList">RedisClusterCrossClusterReplicationConfigSecondaryClustersList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `clusterRoleInput`<sup>Optional</sup> <a name="clusterRoleInput" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRoleInput"></a>

```java
public java.lang.String getClusterRoleInput();
```

- *Type:* java.lang.String

---

##### `primaryClusterInput`<sup>Optional</sup> <a name="primaryClusterInput" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.primaryClusterInput"></a>

```java
public RedisClusterCrossClusterReplicationConfigPrimaryCluster getPrimaryClusterInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster">RedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

---

##### `secondaryClustersInput`<sup>Optional</sup> <a name="secondaryClustersInput" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.secondaryClustersInput"></a>

```java
public IResolvable|java.util.List<RedisClusterCrossClusterReplicationConfigSecondaryClusters> getSecondaryClustersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters">RedisClusterCrossClusterReplicationConfigSecondaryClusters</a>>

---

##### `clusterRole`<sup>Required</sup> <a name="clusterRole" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.clusterRole"></a>

```java
public java.lang.String getClusterRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigOutputReference.property.internalValue"></a>

```java
public RedisClusterCrossClusterReplicationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfig">RedisClusterCrossClusterReplicationConfig</a>

---


### RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference <a name="RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference;

new RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resetCluster">resetCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.resetCluster"></a>

```java
public void resetCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster">RedisClusterCrossClusterReplicationConfigPrimaryCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference.property.internalValue"></a>

```java
public RedisClusterCrossClusterReplicationConfigPrimaryCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigPrimaryCluster">RedisClusterCrossClusterReplicationConfigPrimaryCluster</a>

---


### RedisClusterCrossClusterReplicationConfigSecondaryClustersList <a name="RedisClusterCrossClusterReplicationConfigSecondaryClustersList" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList;

new RedisClusterCrossClusterReplicationConfigSecondaryClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.get"></a>

```java
public RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters">RedisClusterCrossClusterReplicationConfigSecondaryClusters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedisClusterCrossClusterReplicationConfigSecondaryClusters> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters">RedisClusterCrossClusterReplicationConfigSecondaryClusters</a>>

---


### RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference <a name="RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference;

new RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resetCluster">resetCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.resetCluster"></a>

```java
public void resetCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters">RedisClusterCrossClusterReplicationConfigSecondaryClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference.property.internalValue"></a>

```java
public IResolvable|RedisClusterCrossClusterReplicationConfigSecondaryClusters getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.redisCluster.RedisClusterCrossClusterReplicationConfigSecondaryClusters">RedisClusterCrossClusterReplicationConfigSecondaryClusters</a>

---


### RedisClusterDiscoveryEndpointsList <a name="RedisClusterDiscoveryEndpointsList" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterDiscoveryEndpointsList;

new RedisClusterDiscoveryEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.get"></a>

```java
public RedisClusterDiscoveryEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterDiscoveryEndpointsOutputReference <a name="RedisClusterDiscoveryEndpointsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterDiscoveryEndpointsOutputReference;

new RedisClusterDiscoveryEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList">RedisClusterDiscoveryEndpointsPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpoints">RedisClusterDiscoveryEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.pscConfig"></a>

```java
public RedisClusterDiscoveryEndpointsPscConfigList getPscConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList">RedisClusterDiscoveryEndpointsPscConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.internalValue"></a>

```java
public RedisClusterDiscoveryEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpoints">RedisClusterDiscoveryEndpoints</a>

---


### RedisClusterDiscoveryEndpointsPscConfigList <a name="RedisClusterDiscoveryEndpointsPscConfigList" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterDiscoveryEndpointsPscConfigList;

new RedisClusterDiscoveryEndpointsPscConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.get"></a>

```java
public RedisClusterDiscoveryEndpointsPscConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterDiscoveryEndpointsPscConfigOutputReference <a name="RedisClusterDiscoveryEndpointsPscConfigOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference;

new RedisClusterDiscoveryEndpointsPscConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfig">RedisClusterDiscoveryEndpointsPscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue"></a>

```java
public RedisClusterDiscoveryEndpointsPscConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfig">RedisClusterDiscoveryEndpointsPscConfig</a>

---


### RedisClusterGcsSourceOutputReference <a name="RedisClusterGcsSourceOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterGcsSourceOutputReference;

new RedisClusterGcsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.urisInput">urisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource">RedisClusterGcsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.urisInput"></a>

```java
public java.util.List<java.lang.String> getUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterGcsSourceOutputReference.property.internalValue"></a>

```java
public RedisClusterGcsSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterGcsSource">RedisClusterGcsSource</a>

---


### RedisClusterMaintenancePolicyOutputReference <a name="RedisClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenancePolicyOutputReference;

new RedisClusterMaintenancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">putWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">resetWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyMaintenanceWindow` <a name="putWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```java
public void putWeeklyMaintenanceWindow(IResolvable|java.util.List<RedisClusterMaintenancePolicyWeeklyMaintenanceWindow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>>

---

##### `resetWeeklyMaintenanceWindow` <a name="resetWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```java
public void resetWeeklyMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weeklyMaintenanceWindowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```java
public RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList getWeeklyMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `weeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowInput" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```java
public IResolvable|java.util.List<RedisClusterMaintenancePolicyWeeklyMaintenanceWindow> getWeeklyMaintenanceWindowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```java
public RedisClusterMaintenancePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a>

---


### RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList;

new RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```java
public RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedisClusterMaintenancePolicyWeeklyMaintenanceWindow> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>>

---


### RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference;

new RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```java
public void putStartTime(RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```java
public RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```java
public RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|RedisClusterMaintenancePolicyWeeklyMaintenanceWindow getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference;

new RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```java
public RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### RedisClusterMaintenanceScheduleList <a name="RedisClusterMaintenanceScheduleList" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenanceScheduleList;

new RedisClusterMaintenanceScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.get"></a>

```java
public RedisClusterMaintenanceScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterMaintenanceScheduleOutputReference <a name="RedisClusterMaintenanceScheduleOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterMaintenanceScheduleOutputReference;

new RedisClusterMaintenanceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">scheduleDeadlineTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceSchedule">RedisClusterMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `scheduleDeadlineTime`<sup>Required</sup> <a name="scheduleDeadlineTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```java
public java.lang.String getScheduleDeadlineTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.internalValue"></a>

```java
public RedisClusterMaintenanceSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceSchedule">RedisClusterMaintenanceSchedule</a>

---


### RedisClusterManagedBackupSourceOutputReference <a name="RedisClusterManagedBackupSourceOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterManagedBackupSourceOutputReference;

new RedisClusterManagedBackupSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.backupInput">backupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.backup">backup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource">RedisClusterManagedBackupSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.backupInput"></a>

```java
public java.lang.String getBackupInput();
```

- *Type:* java.lang.String

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.backup"></a>

```java
public java.lang.String getBackup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSourceOutputReference.property.internalValue"></a>

```java
public RedisClusterManagedBackupSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedBackupSource">RedisClusterManagedBackupSource</a>

---


### RedisClusterManagedServerCaCaCertsList <a name="RedisClusterManagedServerCaCaCertsList" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterManagedServerCaCaCertsList;

new RedisClusterManagedServerCaCaCertsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.get"></a>

```java
public RedisClusterManagedServerCaCaCertsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterManagedServerCaCaCertsOutputReference <a name="RedisClusterManagedServerCaCaCertsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterManagedServerCaCaCertsOutputReference;

new RedisClusterManagedServerCaCaCertsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.property.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCerts">RedisClusterManagedServerCaCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.property.certificates"></a>

```java
public java.util.List<java.lang.String> getCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsOutputReference.property.internalValue"></a>

```java
public RedisClusterManagedServerCaCaCerts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCerts">RedisClusterManagedServerCaCaCerts</a>

---


### RedisClusterManagedServerCaList <a name="RedisClusterManagedServerCaList" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterManagedServerCaList;

new RedisClusterManagedServerCaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.get"></a>

```java
public RedisClusterManagedServerCaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterManagedServerCaOutputReference <a name="RedisClusterManagedServerCaOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterManagedServerCaOutputReference;

new RedisClusterManagedServerCaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList">RedisClusterManagedServerCaCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCa">RedisClusterManagedServerCa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.property.caCerts"></a>

```java
public RedisClusterManagedServerCaCaCertsList getCaCerts();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaCaCertsList">RedisClusterManagedServerCaCaCertsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterManagedServerCaOutputReference.property.internalValue"></a>

```java
public RedisClusterManagedServerCa getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterManagedServerCa">RedisClusterManagedServerCa</a>

---


### RedisClusterPersistenceConfigAofConfigOutputReference <a name="RedisClusterPersistenceConfigAofConfigOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPersistenceConfigAofConfigOutputReference;

new RedisClusterPersistenceConfigAofConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.resetAppendFsync">resetAppendFsync</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppendFsync` <a name="resetAppendFsync" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.resetAppendFsync"></a>

```java
public void resetAppendFsync()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsyncInput">appendFsyncInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsync">appendFsync</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig">RedisClusterPersistenceConfigAofConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appendFsyncInput`<sup>Optional</sup> <a name="appendFsyncInput" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsyncInput"></a>

```java
public java.lang.String getAppendFsyncInput();
```

- *Type:* java.lang.String

---

##### `appendFsync`<sup>Required</sup> <a name="appendFsync" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.appendFsync"></a>

```java
public java.lang.String getAppendFsync();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference.property.internalValue"></a>

```java
public RedisClusterPersistenceConfigAofConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig">RedisClusterPersistenceConfigAofConfig</a>

---


### RedisClusterPersistenceConfigOutputReference <a name="RedisClusterPersistenceConfigOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPersistenceConfigOutputReference;

new RedisClusterPersistenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.putAofConfig">putAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.putRdbConfig">putRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.resetAofConfig">resetAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.resetRdbConfig">resetRdbConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAofConfig` <a name="putAofConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.putAofConfig"></a>

```java
public void putAofConfig(RedisClusterPersistenceConfigAofConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.putAofConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig">RedisClusterPersistenceConfigAofConfig</a>

---

##### `putRdbConfig` <a name="putRdbConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.putRdbConfig"></a>

```java
public void putRdbConfig(RedisClusterPersistenceConfigRdbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.putRdbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig">RedisClusterPersistenceConfigRdbConfig</a>

---

##### `resetAofConfig` <a name="resetAofConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.resetAofConfig"></a>

```java
public void resetAofConfig()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetRdbConfig` <a name="resetRdbConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.resetRdbConfig"></a>

```java
public void resetRdbConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.aofConfig">aofConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference">RedisClusterPersistenceConfigAofConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.rdbConfig">rdbConfig</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference">RedisClusterPersistenceConfigRdbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.aofConfigInput">aofConfigInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig">RedisClusterPersistenceConfigAofConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.rdbConfigInput">rdbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig">RedisClusterPersistenceConfigRdbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig">RedisClusterPersistenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aofConfig`<sup>Required</sup> <a name="aofConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.aofConfig"></a>

```java
public RedisClusterPersistenceConfigAofConfigOutputReference getAofConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfigOutputReference">RedisClusterPersistenceConfigAofConfigOutputReference</a>

---

##### `rdbConfig`<sup>Required</sup> <a name="rdbConfig" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.rdbConfig"></a>

```java
public RedisClusterPersistenceConfigRdbConfigOutputReference getRdbConfig();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference">RedisClusterPersistenceConfigRdbConfigOutputReference</a>

---

##### `aofConfigInput`<sup>Optional</sup> <a name="aofConfigInput" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.aofConfigInput"></a>

```java
public RedisClusterPersistenceConfigAofConfig getAofConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigAofConfig">RedisClusterPersistenceConfigAofConfig</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `rdbConfigInput`<sup>Optional</sup> <a name="rdbConfigInput" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.rdbConfigInput"></a>

```java
public RedisClusterPersistenceConfigRdbConfig getRdbConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig">RedisClusterPersistenceConfigRdbConfig</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigOutputReference.property.internalValue"></a>

```java
public RedisClusterPersistenceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfig">RedisClusterPersistenceConfig</a>

---


### RedisClusterPersistenceConfigRdbConfigOutputReference <a name="RedisClusterPersistenceConfigRdbConfigOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPersistenceConfigRdbConfigOutputReference;

new RedisClusterPersistenceConfigRdbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod">resetRdbSnapshotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime">resetRdbSnapshotStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRdbSnapshotPeriod` <a name="resetRdbSnapshotPeriod" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotPeriod"></a>

```java
public void resetRdbSnapshotPeriod()
```

##### `resetRdbSnapshotStartTime` <a name="resetRdbSnapshotStartTime" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.resetRdbSnapshotStartTime"></a>

```java
public void resetRdbSnapshotStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput">rdbSnapshotPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput">rdbSnapshotStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig">RedisClusterPersistenceConfigRdbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotPeriodInput`<sup>Optional</sup> <a name="rdbSnapshotPeriodInput" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```java
public java.lang.String getRdbSnapshotPeriodInput();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="rdbSnapshotStartTimeInput" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```java
public java.lang.String getRdbSnapshotStartTimeInput();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotPeriod`<sup>Required</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod"></a>

```java
public java.lang.String getRdbSnapshotPeriod();
```

- *Type:* java.lang.String

---

##### `rdbSnapshotStartTime`<sup>Required</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime"></a>

```java
public java.lang.String getRdbSnapshotStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfigOutputReference.property.internalValue"></a>

```java
public RedisClusterPersistenceConfigRdbConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPersistenceConfigRdbConfig">RedisClusterPersistenceConfigRdbConfig</a>

---


### RedisClusterPscConfigsList <a name="RedisClusterPscConfigsList" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPscConfigsList;

new RedisClusterPscConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.get"></a>

```java
public RedisClusterPscConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedisClusterPscConfigs> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>>

---


### RedisClusterPscConfigsOutputReference <a name="RedisClusterPscConfigsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPscConfigsOutputReference;

new RedisClusterPscConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedisClusterPscConfigs getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>

---


### RedisClusterPscConnectionsList <a name="RedisClusterPscConnectionsList" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPscConnectionsList;

new RedisClusterPscConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.get"></a>

```java
public RedisClusterPscConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterPscConnectionsOutputReference <a name="RedisClusterPscConnectionsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPscConnectionsOutputReference;

new RedisClusterPscConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnections">RedisClusterPscConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.internalValue"></a>

```java
public RedisClusterPscConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnections">RedisClusterPscConnections</a>

---


### RedisClusterPscServiceAttachmentsList <a name="RedisClusterPscServiceAttachmentsList" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPscServiceAttachmentsList;

new RedisClusterPscServiceAttachmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.get"></a>

```java
public RedisClusterPscServiceAttachmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterPscServiceAttachmentsOutputReference <a name="RedisClusterPscServiceAttachmentsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterPscServiceAttachmentsOutputReference;

new RedisClusterPscServiceAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachments">RedisClusterPscServiceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachmentsOutputReference.property.internalValue"></a>

```java
public RedisClusterPscServiceAttachments getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscServiceAttachments">RedisClusterPscServiceAttachments</a>

---


### RedisClusterStateInfoList <a name="RedisClusterStateInfoList" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterStateInfoList;

new RedisClusterStateInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.get"></a>

```java
public RedisClusterStateInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterStateInfoOutputReference <a name="RedisClusterStateInfoOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterStateInfoOutputReference;

new RedisClusterStateInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.updateInfo">updateInfo</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList">RedisClusterStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfo">RedisClusterStateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `updateInfo`<sup>Required</sup> <a name="updateInfo" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.updateInfo"></a>

```java
public RedisClusterStateInfoUpdateInfoList getUpdateInfo();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList">RedisClusterStateInfoUpdateInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.internalValue"></a>

```java
public RedisClusterStateInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfo">RedisClusterStateInfo</a>

---


### RedisClusterStateInfoUpdateInfoList <a name="RedisClusterStateInfoUpdateInfoList" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterStateInfoUpdateInfoList;

new RedisClusterStateInfoUpdateInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.get"></a>

```java
public RedisClusterStateInfoUpdateInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedisClusterStateInfoUpdateInfoOutputReference <a name="RedisClusterStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterStateInfoUpdateInfoOutputReference;

new RedisClusterStateInfoUpdateInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount">targetReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount">targetShardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfo">RedisClusterStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetReplicaCount`<sup>Required</sup> <a name="targetReplicaCount" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```java
public java.lang.Number getTargetReplicaCount();
```

- *Type:* java.lang.Number

---

##### `targetShardCount`<sup>Required</sup> <a name="targetShardCount" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```java
public java.lang.Number getTargetShardCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```java
public RedisClusterStateInfoUpdateInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfo">RedisClusterStateInfoUpdateInfo</a>

---


### RedisClusterTimeoutsOutputReference <a name="RedisClusterTimeoutsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterTimeoutsOutputReference;

new RedisClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedisClusterTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>

---


### RedisClusterZoneDistributionConfigOutputReference <a name="RedisClusterZoneDistributionConfigOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster.RedisClusterZoneDistributionConfigOutputReference;

new RedisClusterZoneDistributionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.internalValue"></a>

```java
public RedisClusterZoneDistributionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a>

---



