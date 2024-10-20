# `redisCluster` Submodule <a name="`redisCluster` Submodule" id="@cdktf/provider-google.redisCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisCluster <a name="RedisCluster" id="@cdktf/provider-google.redisCluster.RedisCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster google_redis_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  psc_configs: typing.Union[IResolvable, typing.List[RedisClusterPscConfigs]],
  shard_count: typing.Union[int, float],
  authorization_mode: str = None,
  deletion_protection_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_policy: RedisClusterMaintenancePolicy = None,
  name: str = None,
  node_type: str = None,
  project: str = None,
  redis_configs: typing.Mapping[str] = None,
  region: str = None,
  replica_count: typing.Union[int, float] = None,
  timeouts: RedisClusterTimeouts = None,
  transit_encryption_mode: str = None,
  zone_distribution_config: RedisClusterZoneDistributionConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.pscConfigs">psc_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]]</code> | psc_configs block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | Required. Number of shards for the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.authorizationMode">authorization_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#id RedisCluster#id}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | The nodeType for the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#project RedisCluster#project}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.redisConfigs">redis_configs</a></code> | <code>typing.Mapping[str]</code> | Configure Redis Cluster behavior using a subset of native Redis configuration parameters. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.region">region</a></code> | <code>str</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of replica nodes per shard. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.zoneDistributionConfig">zone_distribution_config</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `psc_configs`<sup>Required</sup> <a name="psc_configs" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.pscConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]]

psc_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#psc_configs RedisCluster#psc_configs}

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.shardCount"></a>

- *Type:* typing.Union[int, float]

Required. Number of shards for the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#shard_count RedisCluster#shard_count}

---

##### `authorization_mode`<sup>Optional</sup> <a name="authorization_mode" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.authorizationMode"></a>

- *Type:* str

Optional.

The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#authorization_mode RedisCluster#authorization_mode}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Indicates if the cluster is deletion protected or not.
If the value if set to true, any delete cluster operation will fail.
Default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#deletion_protection_enabled RedisCluster#deletion_protection_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#id RedisCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#maintenance_policy RedisCluster#maintenance_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.name"></a>

- *Type:* str

Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#name RedisCluster#name}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

The nodeType for the Redis cluster.

If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#node_type RedisCluster#node_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#project RedisCluster#project}.

---

##### `redis_configs`<sup>Optional</sup> <a name="redis_configs" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.redisConfigs"></a>

- *Type:* typing.Mapping[str]

Configure Redis Cluster behavior using a subset of native Redis configuration parameters.

Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#redis_configs RedisCluster#redis_configs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.region"></a>

- *Type:* str

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#region RedisCluster#region}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.replicaCount"></a>

- *Type:* typing.Union[int, float]

Optional. The number of replica nodes per shard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#replica_count RedisCluster#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#timeouts RedisCluster#timeouts}

---

##### `transit_encryption_mode`<sup>Optional</sup> <a name="transit_encryption_mode" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.transitEncryptionMode"></a>

- *Type:* str

Optional.

The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#transit_encryption_mode RedisCluster#transit_encryption_mode}

---

##### `zone_distribution_config`<sup>Optional</sup> <a name="zone_distribution_config" id="@cdktf/provider-google.redisCluster.RedisCluster.Initializer.parameter.zoneDistributionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#zone_distribution_config RedisCluster#zone_distribution_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putMaintenancePolicy">put_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putPscConfigs">put_psc_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.putZoneDistributionConfig">put_zone_distribution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetAuthorizationMode">reset_authorization_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetMaintenancePolicy">reset_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetNodeType">reset_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetRedisConfigs">reset_redis_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetReplicaCount">reset_replica_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetTransitEncryptionMode">reset_transit_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.resetZoneDistributionConfig">reset_zone_distribution_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.redisCluster.RedisCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.redisCluster.RedisCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.redisCluster.RedisCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.redisCluster.RedisCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.redisCluster.RedisCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.redisCluster.RedisCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.redisCluster.RedisCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.redisCluster.RedisCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.redisCluster.RedisCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.redisCluster.RedisCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.redisCluster.RedisCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.redisCluster.RedisCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.redisCluster.RedisCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.redisCluster.RedisCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.redisCluster.RedisCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.redisCluster.RedisCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_maintenance_policy` <a name="put_maintenance_policy" id="@cdktf/provider-google.redisCluster.RedisCluster.putMaintenancePolicy"></a>

```python
def put_maintenance_policy(
  weekly_maintenance_window: typing.Union[IResolvable, typing.List[RedisClusterMaintenancePolicyWeeklyMaintenanceWindow]] = None
) -> None
```

###### `weekly_maintenance_window`<sup>Optional</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google.redisCluster.RedisCluster.putMaintenancePolicy.parameter.weeklyMaintenanceWindow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#weekly_maintenance_window RedisCluster#weekly_maintenance_window}

---

##### `put_psc_configs` <a name="put_psc_configs" id="@cdktf/provider-google.redisCluster.RedisCluster.putPscConfigs"></a>

```python
def put_psc_configs(
  value: typing.Union[IResolvable, typing.List[RedisClusterPscConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisCluster.putPscConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.redisCluster.RedisCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.redisCluster.RedisCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#create RedisCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.redisCluster.RedisCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#delete RedisCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.redisCluster.RedisCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#update RedisCluster#update}.

---

##### `put_zone_distribution_config` <a name="put_zone_distribution_config" id="@cdktf/provider-google.redisCluster.RedisCluster.putZoneDistributionConfig"></a>

```python
def put_zone_distribution_config(
  mode: str = None,
  zone: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.redisCluster.RedisCluster.putZoneDistributionConfig.parameter.mode"></a>

- *Type:* str

Immutable.

The mode for zone distribution for Memorystore Redis cluster.
If not provided, MULTI_ZONE will be used as default Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#mode RedisCluster#mode}

---

###### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.redisCluster.RedisCluster.putZoneDistributionConfig.parameter.zone"></a>

- *Type:* str

Immutable. The zone for single zone Memorystore Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#zone RedisCluster#zone}

---

##### `reset_authorization_mode` <a name="reset_authorization_mode" id="@cdktf/provider-google.redisCluster.RedisCluster.resetAuthorizationMode"></a>

```python
def reset_authorization_mode() -> None
```

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktf/provider-google.redisCluster.RedisCluster.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.redisCluster.RedisCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_policy` <a name="reset_maintenance_policy" id="@cdktf/provider-google.redisCluster.RedisCluster.resetMaintenancePolicy"></a>

```python
def reset_maintenance_policy() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.redisCluster.RedisCluster.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_node_type` <a name="reset_node_type" id="@cdktf/provider-google.redisCluster.RedisCluster.resetNodeType"></a>

```python
def reset_node_type() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.redisCluster.RedisCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_redis_configs` <a name="reset_redis_configs" id="@cdktf/provider-google.redisCluster.RedisCluster.resetRedisConfigs"></a>

```python
def reset_redis_configs() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.redisCluster.RedisCluster.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_replica_count` <a name="reset_replica_count" id="@cdktf/provider-google.redisCluster.RedisCluster.resetReplicaCount"></a>

```python
def reset_replica_count() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.redisCluster.RedisCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transit_encryption_mode` <a name="reset_transit_encryption_mode" id="@cdktf/provider-google.redisCluster.RedisCluster.resetTransitEncryptionMode"></a>

```python
def reset_transit_encryption_mode() -> None
```

##### `reset_zone_distribution_config` <a name="reset_zone_distribution_config" id="@cdktf/provider-google.redisCluster.RedisCluster.resetZoneDistributionConfig"></a>

```python
def reset_zone_distribution_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedisCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.redisCluster.RedisCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisCluster.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.redisCluster.RedisCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisCluster.RedisCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.redisCluster.RedisCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisCluster.RedisCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedisCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedisCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedisCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedisCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.discoveryEndpoints">discovery_endpoints</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList">RedisClusterDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference">RedisClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList">RedisClusterMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.preciseSizeGb">precise_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.pscConfigs">psc_configs</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList">RedisClusterPscConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.pscConnections">psc_connections</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList">RedisClusterPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.stateInfo">state_info</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList">RedisClusterStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference">RedisClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.zoneDistributionConfig">zone_distribution_config</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference">RedisClusterZoneDistributionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.authorizationModeInput">authorization_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.maintenancePolicyInput">maintenance_policy_input</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.pscConfigsInput">psc_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.redisConfigsInput">redis_configs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.replicaCountInput">replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.shardCountInput">shard_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.transitEncryptionModeInput">transit_encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.zoneDistributionConfigInput">zone_distribution_config_input</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.authorizationMode">authorization_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.redisConfigs">redis_configs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.redisCluster.RedisCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.redisCluster.RedisCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.redisCluster.RedisCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.redisCluster.RedisCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.redisCluster.RedisCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.redisCluster.RedisCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisCluster.RedisCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisCluster.RedisCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.redisCluster.RedisCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.redisCluster.RedisCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisCluster.RedisCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisCluster.RedisCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.redisCluster.RedisCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `discovery_endpoints`<sup>Required</sup> <a name="discovery_endpoints" id="@cdktf/provider-google.redisCluster.RedisCluster.property.discoveryEndpoints"></a>

```python
discovery_endpoints: RedisClusterDiscoveryEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList">RedisClusterDiscoveryEndpointsList</a>

---

##### `maintenance_policy`<sup>Required</sup> <a name="maintenance_policy" id="@cdktf/provider-google.redisCluster.RedisCluster.property.maintenancePolicy"></a>

```python
maintenance_policy: RedisClusterMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference">RedisClusterMaintenancePolicyOutputReference</a>

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktf/provider-google.redisCluster.RedisCluster.property.maintenanceSchedule"></a>

```python
maintenance_schedule: RedisClusterMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList">RedisClusterMaintenanceScheduleList</a>

---

##### `precise_size_gb`<sup>Required</sup> <a name="precise_size_gb" id="@cdktf/provider-google.redisCluster.RedisCluster.property.preciseSizeGb"></a>

```python
precise_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_configs`<sup>Required</sup> <a name="psc_configs" id="@cdktf/provider-google.redisCluster.RedisCluster.property.pscConfigs"></a>

```python
psc_configs: RedisClusterPscConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList">RedisClusterPscConfigsList</a>

---

##### `psc_connections`<sup>Required</sup> <a name="psc_connections" id="@cdktf/provider-google.redisCluster.RedisCluster.property.pscConnections"></a>

```python
psc_connections: RedisClusterPscConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList">RedisClusterPscConnectionsList</a>

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-google.redisCluster.RedisCluster.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.redisCluster.RedisCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_info`<sup>Required</sup> <a name="state_info" id="@cdktf/provider-google.redisCluster.RedisCluster.property.stateInfo"></a>

```python
state_info: RedisClusterStateInfoList
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList">RedisClusterStateInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.redisCluster.RedisCluster.property.timeouts"></a>

```python
timeouts: RedisClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference">RedisClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.redisCluster.RedisCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `zone_distribution_config`<sup>Required</sup> <a name="zone_distribution_config" id="@cdktf/provider-google.redisCluster.RedisCluster.property.zoneDistributionConfig"></a>

```python
zone_distribution_config: RedisClusterZoneDistributionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference">RedisClusterZoneDistributionConfigOutputReference</a>

---

##### `authorization_mode_input`<sup>Optional</sup> <a name="authorization_mode_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.authorizationModeInput"></a>

```python
authorization_mode_input: str
```

- *Type:* str

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_policy_input`<sup>Optional</sup> <a name="maintenance_policy_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.maintenancePolicyInput"></a>

```python
maintenance_policy_input: RedisClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_configs_input`<sup>Optional</sup> <a name="psc_configs_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.pscConfigsInput"></a>

```python
psc_configs_input: typing.Union[IResolvable, typing.List[RedisClusterPscConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]]

---

##### `redis_configs_input`<sup>Optional</sup> <a name="redis_configs_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.redisConfigsInput"></a>

```python
redis_configs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `replica_count_input`<sup>Optional</sup> <a name="replica_count_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.replicaCountInput"></a>

```python
replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_count_input`<sup>Optional</sup> <a name="shard_count_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.shardCountInput"></a>

```python
shard_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RedisClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>]

---

##### `transit_encryption_mode_input`<sup>Optional</sup> <a name="transit_encryption_mode_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.transitEncryptionModeInput"></a>

```python
transit_encryption_mode_input: str
```

- *Type:* str

---

##### `zone_distribution_config_input`<sup>Optional</sup> <a name="zone_distribution_config_input" id="@cdktf/provider-google.redisCluster.RedisCluster.property.zoneDistributionConfigInput"></a>

```python
zone_distribution_config_input: RedisClusterZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a>

---

##### `authorization_mode`<sup>Required</sup> <a name="authorization_mode" id="@cdktf/provider-google.redisCluster.RedisCluster.property.authorizationMode"></a>

```python
authorization_mode: str
```

- *Type:* str

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktf/provider-google.redisCluster.RedisCluster.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.redisCluster.RedisCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-google.redisCluster.RedisCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.redisCluster.RedisCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `redis_configs`<sup>Required</sup> <a name="redis_configs" id="@cdktf/provider-google.redisCluster.RedisCluster.property.redisConfigs"></a>

```python
redis_configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.redisCluster.RedisCluster.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktf/provider-google.redisCluster.RedisCluster.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-google.redisCluster.RedisCluster.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transit_encryption_mode`<sup>Required</sup> <a name="transit_encryption_mode" id="@cdktf/provider-google.redisCluster.RedisCluster.property.transitEncryptionMode"></a>

```python
transit_encryption_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.redisCluster.RedisCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterConfig <a name="RedisClusterConfig" id="@cdktf/provider-google.redisCluster.RedisClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  psc_configs: typing.Union[IResolvable, typing.List[RedisClusterPscConfigs]],
  shard_count: typing.Union[int, float],
  authorization_mode: str = None,
  deletion_protection_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_policy: RedisClusterMaintenancePolicy = None,
  name: str = None,
  node_type: str = None,
  project: str = None,
  redis_configs: typing.Mapping[str] = None,
  region: str = None,
  replica_count: typing.Union[int, float] = None,
  timeouts: RedisClusterTimeouts = None,
  transit_encryption_mode: str = None,
  zone_distribution_config: RedisClusterZoneDistributionConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.pscConfigs">psc_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]]</code> | psc_configs block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | Required. Number of shards for the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.authorizationMode">authorization_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#id RedisCluster#id}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.name">name</a></code> | <code>str</code> | Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | The nodeType for the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#project RedisCluster#project}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.redisConfigs">redis_configs</a></code> | <code>typing.Mapping[str]</code> | Configure Redis Cluster behavior using a subset of native Redis configuration parameters. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.region">region</a></code> | <code>str</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of replica nodes per shard. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterConfig.property.zoneDistributionConfig">zone_distribution_config</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a></code> | zone_distribution_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `psc_configs`<sup>Required</sup> <a name="psc_configs" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.pscConfigs"></a>

```python
psc_configs: typing.Union[IResolvable, typing.List[RedisClusterPscConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]]

psc_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#psc_configs RedisCluster#psc_configs}

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Required. Number of shards for the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#shard_count RedisCluster#shard_count}

---

##### `authorization_mode`<sup>Optional</sup> <a name="authorization_mode" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.authorizationMode"></a>

```python
authorization_mode: str
```

- *Type:* str

Optional.

The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#authorization_mode RedisCluster#authorization_mode}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Indicates if the cluster is deletion protected or not.
If the value if set to true, any delete cluster operation will fail.
Default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#deletion_protection_enabled RedisCluster#deletion_protection_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#id RedisCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.maintenancePolicy"></a>

```python
maintenance_policy: RedisClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#maintenance_policy RedisCluster#maintenance_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#name RedisCluster#name}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

The nodeType for the Redis cluster.

If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#node_type RedisCluster#node_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#project RedisCluster#project}.

---

##### `redis_configs`<sup>Optional</sup> <a name="redis_configs" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.redisConfigs"></a>

```python
redis_configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Configure Redis Cluster behavior using a subset of native Redis configuration parameters.

Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#redis_configs RedisCluster#redis_configs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#region RedisCluster#region}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The number of replica nodes per shard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#replica_count RedisCluster#replica_count}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.timeouts"></a>

```python
timeouts: RedisClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#timeouts RedisCluster#timeouts}

---

##### `transit_encryption_mode`<sup>Optional</sup> <a name="transit_encryption_mode" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.transitEncryptionMode"></a>

```python
transit_encryption_mode: str
```

- *Type:* str

Optional.

The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#transit_encryption_mode RedisCluster#transit_encryption_mode}

---

##### `zone_distribution_config`<sup>Optional</sup> <a name="zone_distribution_config" id="@cdktf/provider-google.redisCluster.RedisClusterConfig.property.zoneDistributionConfig"></a>

```python
zone_distribution_config: RedisClusterZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a>

zone_distribution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#zone_distribution_config RedisCluster#zone_distribution_config}

---

### RedisClusterDiscoveryEndpoints <a name="RedisClusterDiscoveryEndpoints" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterDiscoveryEndpoints()
```


### RedisClusterDiscoveryEndpointsPscConfig <a name="RedisClusterDiscoveryEndpointsPscConfig" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterDiscoveryEndpointsPscConfig()
```


### RedisClusterMaintenancePolicy <a name="RedisClusterMaintenancePolicy" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenancePolicy(
  weekly_maintenance_window: typing.Union[IResolvable, typing.List[RedisClusterMaintenancePolicyWeeklyMaintenanceWindow]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy.property.weeklyMaintenanceWindow">weekly_maintenance_window</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]</code> | weekly_maintenance_window block. |

---

##### `weekly_maintenance_window`<sup>Optional</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```python
weekly_maintenance_window: typing.Union[IResolvable, typing.List[RedisClusterMaintenancePolicyWeeklyMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#weekly_maintenance_window RedisCluster#weekly_maintenance_window}

---

### RedisClusterMaintenancePolicyWeeklyMaintenanceWindow <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow(
  day: str,
  start_time: RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>str</code> | Required. The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```python
day: str
```

- *Type:* str

Required. The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#day RedisCluster#day}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```python
start_time: RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#start_time RedisCluster#start_time}

---

### RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#hours RedisCluster#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#minutes RedisCluster#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#nanos RedisCluster#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#seconds RedisCluster#seconds}

---

### RedisClusterMaintenanceSchedule <a name="RedisClusterMaintenanceSchedule" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenanceSchedule()
```


### RedisClusterPscConfigs <a name="RedisClusterPscConfigs" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterPscConfigs(
  network: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs.property.network">network</a></code> | <code>str</code> | Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigs.property.network"></a>

```python
network: str
```

- *Type:* str

Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#network RedisCluster#network}

---

### RedisClusterPscConnections <a name="RedisClusterPscConnections" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterPscConnections()
```


### RedisClusterStateInfo <a name="RedisClusterStateInfo" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterStateInfo()
```


### RedisClusterStateInfoUpdateInfo <a name="RedisClusterStateInfoUpdateInfo" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterStateInfoUpdateInfo()
```


### RedisClusterTimeouts <a name="RedisClusterTimeouts" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#create RedisCluster#create}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#delete RedisCluster#delete}. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#update RedisCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#create RedisCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#delete RedisCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.redisCluster.RedisClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#update RedisCluster#update}.

---

### RedisClusterZoneDistributionConfig <a name="RedisClusterZoneDistributionConfig" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterZoneDistributionConfig(
  mode: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.property.mode">mode</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.property.zone">zone</a></code> | <code>str</code> | Immutable. The zone for single zone Memorystore Redis cluster. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Immutable.

The mode for zone distribution for Memorystore Redis cluster.
If not provided, MULTI_ZONE will be used as default Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#mode RedisCluster#mode}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Immutable. The zone for single zone Memorystore Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#zone RedisCluster#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterDiscoveryEndpointsList <a name="RedisClusterDiscoveryEndpointsList" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterDiscoveryEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisClusterDiscoveryEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedisClusterDiscoveryEndpointsOutputReference <a name="RedisClusterDiscoveryEndpointsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterDiscoveryEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList">RedisClusterDiscoveryEndpointsPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpoints">RedisClusterDiscoveryEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_config`<sup>Required</sup> <a name="psc_config" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.pscConfig"></a>

```python
psc_config: RedisClusterDiscoveryEndpointsPscConfigList
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList">RedisClusterDiscoveryEndpointsPscConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: RedisClusterDiscoveryEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpoints">RedisClusterDiscoveryEndpoints</a>

---


### RedisClusterDiscoveryEndpointsPscConfigList <a name="RedisClusterDiscoveryEndpointsPscConfigList" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterDiscoveryEndpointsPscConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisClusterDiscoveryEndpointsPscConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedisClusterDiscoveryEndpointsPscConfigOutputReference <a name="RedisClusterDiscoveryEndpointsPscConfigOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfig">RedisClusterDiscoveryEndpointsPscConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue"></a>

```python
internal_value: RedisClusterDiscoveryEndpointsPscConfig
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterDiscoveryEndpointsPscConfig">RedisClusterDiscoveryEndpointsPscConfig</a>

---


### RedisClusterMaintenancePolicyOutputReference <a name="RedisClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">put_weekly_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">reset_weekly_maintenance_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_weekly_maintenance_window` <a name="put_weekly_maintenance_window" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```python
def put_weekly_maintenance_window(
  value: typing.Union[IResolvable, typing.List[RedisClusterMaintenancePolicyWeeklyMaintenanceWindow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

---

##### `reset_weekly_maintenance_window` <a name="reset_weekly_maintenance_window" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```python
def reset_weekly_maintenance_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weekly_maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weekly_maintenance_window_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `weekly_maintenance_window`<sup>Required</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```python
weekly_maintenance_window: RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `weekly_maintenance_window_input`<sup>Optional</sup> <a name="weekly_maintenance_window_input" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```python
weekly_maintenance_window_input: typing.Union[IResolvable, typing.List[RedisClusterMaintenancePolicyWeeklyMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: RedisClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicy">RedisClusterMaintenancePolicy</a>

---


### RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RedisClusterMaintenancePolicyWeeklyMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]]

---


### RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">put_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_start_time` <a name="put_start_time" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```python
def put_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#hours RedisCluster#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#minutes RedisCluster#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#nanos RedisCluster#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/redis_cluster#seconds RedisCluster#seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">start_time_input</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```python
start_time: RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```python
start_time_input: RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedisClusterMaintenancePolicyWeeklyMaintenanceWindow]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindow">RedisClusterMaintenancePolicyWeeklyMaintenanceWindow</a>]

---


### RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### RedisClusterMaintenanceScheduleList <a name="RedisClusterMaintenanceScheduleList" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenanceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisClusterMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedisClusterMaintenanceScheduleOutputReference <a name="RedisClusterMaintenanceScheduleOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">schedule_deadline_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceSchedule">RedisClusterMaintenanceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `schedule_deadline_time`<sup>Required</sup> <a name="schedule_deadline_time" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```python
schedule_deadline_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: RedisClusterMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterMaintenanceSchedule">RedisClusterMaintenanceSchedule</a>

---


### RedisClusterPscConfigsList <a name="RedisClusterPscConfigsList" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterPscConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisClusterPscConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RedisClusterPscConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]]

---


### RedisClusterPscConfigsOutputReference <a name="RedisClusterPscConfigsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterPscConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterPscConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedisClusterPscConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConfigs">RedisClusterPscConfigs</a>]

---


### RedisClusterPscConnectionsList <a name="RedisClusterPscConnectionsList" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterPscConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisClusterPscConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedisClusterPscConnectionsOutputReference <a name="RedisClusterPscConnectionsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterPscConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnections">RedisClusterPscConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterPscConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: RedisClusterPscConnections
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterPscConnections">RedisClusterPscConnections</a>

---


### RedisClusterStateInfoList <a name="RedisClusterStateInfoList" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterStateInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisClusterStateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedisClusterStateInfoOutputReference <a name="RedisClusterStateInfoOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterStateInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.updateInfo">update_info</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList">RedisClusterStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfo">RedisClusterStateInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `update_info`<sup>Required</sup> <a name="update_info" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.updateInfo"></a>

```python
update_info: RedisClusterStateInfoUpdateInfoList
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList">RedisClusterStateInfoUpdateInfoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoOutputReference.property.internalValue"></a>

```python
internal_value: RedisClusterStateInfo
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfo">RedisClusterStateInfo</a>

---


### RedisClusterStateInfoUpdateInfoList <a name="RedisClusterStateInfoUpdateInfoList" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterStateInfoUpdateInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisClusterStateInfoUpdateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RedisClusterStateInfoUpdateInfoOutputReference <a name="RedisClusterStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterStateInfoUpdateInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount">target_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount">target_shard_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfo">RedisClusterStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_replica_count`<sup>Required</sup> <a name="target_replica_count" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```python
target_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_shard_count`<sup>Required</sup> <a name="target_shard_count" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```python
target_shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```python
internal_value: RedisClusterStateInfoUpdateInfo
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterStateInfoUpdateInfo">RedisClusterStateInfoUpdateInfo</a>

---


### RedisClusterTimeoutsOutputReference <a name="RedisClusterTimeoutsOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedisClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.redisCluster.RedisClusterTimeouts">RedisClusterTimeouts</a>]

---


### RedisClusterZoneDistributionConfigOutputReference <a name="RedisClusterZoneDistributionConfigOutputReference" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import redis_cluster

redisCluster.RedisClusterZoneDistributionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfigOutputReference.property.internalValue"></a>

```python
internal_value: RedisClusterZoneDistributionConfig
```

- *Type:* <a href="#@cdktf/provider-google.redisCluster.RedisClusterZoneDistributionConfig">RedisClusterZoneDistributionConfig</a>

---



