# `managedKafkaCluster` Submodule <a name="`managedKafkaCluster` Submodule" id="@cdktf/provider-google.managedKafkaCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaCluster <a name="ManagedKafkaCluster" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster google_managed_kafka_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaCluster;

ManagedKafkaCluster.Builder.create(Construct scope, java.lang.String id)
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
    .capacityConfig(ManagedKafkaClusterCapacityConfig)
    .clusterId(java.lang.String)
    .gcpConfig(ManagedKafkaClusterGcpConfig)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .rebalanceConfig(ManagedKafkaClusterRebalanceConfig)
//  .timeouts(ManagedKafkaClusterTimeouts)
//  .tlsConfig(ManagedKafkaClusterTlsConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.capacityConfig">capacityConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID to use for the cluster, which will become the final component of the cluster's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.gcpConfig">gcpConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#id ManagedKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#project ManagedKafkaCluster#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.rebalanceConfig">rebalanceConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | rebalance_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a></code> | tls_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityConfig`<sup>Required</sup> <a name="capacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.capacityConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#capacity_config ManagedKafkaCluster#capacity_config}

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

The ID to use for the cluster, which will become the final component of the cluster's name.

The ID must be 1-63 characters long, and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' to comply with RFC 1035. This value is structured like: 'my-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#cluster_id ManagedKafkaCluster#cluster_id}

---

##### `gcpConfig`<sup>Required</sup> <a name="gcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.gcpConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#gcp_config ManagedKafkaCluster#gcp_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#location ManagedKafkaCluster#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#id ManagedKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#labels ManagedKafkaCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#project ManagedKafkaCluster#project}.

---

##### `rebalanceConfig`<sup>Optional</sup> <a name="rebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.rebalanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

rebalance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#rebalance_config ManagedKafkaCluster#rebalance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#timeouts ManagedKafkaCluster#timeouts}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#tls_config ManagedKafkaCluster#tls_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putCapacityConfig">putCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putGcpConfig">putGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putRebalanceConfig">putRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetRebalanceConfig">resetRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityConfig` <a name="putCapacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putCapacityConfig"></a>

```java
public void putCapacityConfig(ManagedKafkaClusterCapacityConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

---

##### `putGcpConfig` <a name="putGcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putGcpConfig"></a>

```java
public void putGcpConfig(ManagedKafkaClusterGcpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putGcpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

---

##### `putRebalanceConfig` <a name="putRebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putRebalanceConfig"></a>

```java
public void putRebalanceConfig(ManagedKafkaClusterRebalanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putRebalanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTimeouts"></a>

```java
public void putTimeouts(ManagedKafkaClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTlsConfig"></a>

```java
public void putTlsConfig(ManagedKafkaClusterTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetRebalanceConfig` <a name="resetRebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetRebalanceConfig"></a>

```java
public void resetRebalanceConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKafkaCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaCluster;

ManagedKafkaCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaCluster;

ManagedKafkaCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaCluster;

ManagedKafkaCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaCluster;

ManagedKafkaCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedKafkaCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedKafkaCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedKafkaCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedKafkaCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKafkaCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfig">capacityConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference">ManagedKafkaClusterCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfig">gcpConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference">ManagedKafkaClusterGcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfig">rebalanceConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference">ManagedKafkaClusterRebalanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference">ManagedKafkaClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference">ManagedKafkaClusterTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfigInput">capacityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfigInput">gcpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfigInput">rebalanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityConfig`<sup>Required</sup> <a name="capacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfig"></a>

```java
public ManagedKafkaClusterCapacityConfigOutputReference getCapacityConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference">ManagedKafkaClusterCapacityConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `gcpConfig`<sup>Required</sup> <a name="gcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfig"></a>

```java
public ManagedKafkaClusterGcpConfigOutputReference getGcpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference">ManagedKafkaClusterGcpConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rebalanceConfig`<sup>Required</sup> <a name="rebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfig"></a>

```java
public ManagedKafkaClusterRebalanceConfigOutputReference getRebalanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference">ManagedKafkaClusterRebalanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeouts"></a>

```java
public ManagedKafkaClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference">ManagedKafkaClusterTimeoutsOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tlsConfig"></a>

```java
public ManagedKafkaClusterTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference">ManagedKafkaClusterTlsConfigOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `capacityConfigInput`<sup>Optional</sup> <a name="capacityConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfigInput"></a>

```java
public ManagedKafkaClusterCapacityConfig getCapacityConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `gcpConfigInput`<sup>Optional</sup> <a name="gcpConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfigInput"></a>

```java
public ManagedKafkaClusterGcpConfig getGcpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rebalanceConfigInput`<sup>Optional</sup> <a name="rebalanceConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfigInput"></a>

```java
public ManagedKafkaClusterRebalanceConfig getRebalanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tlsConfigInput"></a>

```java
public ManagedKafkaClusterTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaClusterCapacityConfig <a name="ManagedKafkaClusterCapacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterCapacityConfig;

ManagedKafkaClusterCapacityConfig.builder()
    .memoryBytes(java.lang.String)
    .vcpuCount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.memoryBytes">memoryBytes</a></code> | <code>java.lang.String</code> | The memory to provision for the cluster in bytes. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.vcpuCount">vcpuCount</a></code> | <code>java.lang.String</code> | The number of vCPUs to provision for the cluster. The minimum is 3. |

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.memoryBytes"></a>

```java
public java.lang.String getMemoryBytes();
```

- *Type:* java.lang.String

The memory to provision for the cluster in bytes.

The value must be between 1 GiB and 8 GiB per vCPU. Ex. 1024Mi, 4Gi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#memory_bytes ManagedKafkaCluster#memory_bytes}

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.vcpuCount"></a>

```java
public java.lang.String getVcpuCount();
```

- *Type:* java.lang.String

The number of vCPUs to provision for the cluster. The minimum is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#vcpu_count ManagedKafkaCluster#vcpu_count}

---

### ManagedKafkaClusterConfig <a name="ManagedKafkaClusterConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterConfig;

ManagedKafkaClusterConfig.builder()
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
    .capacityConfig(ManagedKafkaClusterCapacityConfig)
    .clusterId(java.lang.String)
    .gcpConfig(ManagedKafkaClusterGcpConfig)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .rebalanceConfig(ManagedKafkaClusterRebalanceConfig)
//  .timeouts(ManagedKafkaClusterTimeouts)
//  .tlsConfig(ManagedKafkaClusterTlsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.capacityConfig">capacityConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID to use for the cluster, which will become the final component of the cluster's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.gcpConfig">gcpConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#id ManagedKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#project ManagedKafkaCluster#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.rebalanceConfig">rebalanceConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | rebalance_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a></code> | tls_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityConfig`<sup>Required</sup> <a name="capacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.capacityConfig"></a>

```java
public ManagedKafkaClusterCapacityConfig getCapacityConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#capacity_config ManagedKafkaCluster#capacity_config}

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The ID to use for the cluster, which will become the final component of the cluster's name.

The ID must be 1-63 characters long, and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' to comply with RFC 1035. This value is structured like: 'my-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#cluster_id ManagedKafkaCluster#cluster_id}

---

##### `gcpConfig`<sup>Required</sup> <a name="gcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.gcpConfig"></a>

```java
public ManagedKafkaClusterGcpConfig getGcpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#gcp_config ManagedKafkaCluster#gcp_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#location ManagedKafkaCluster#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#id ManagedKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#labels ManagedKafkaCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#project ManagedKafkaCluster#project}.

---

##### `rebalanceConfig`<sup>Optional</sup> <a name="rebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.rebalanceConfig"></a>

```java
public ManagedKafkaClusterRebalanceConfig getRebalanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

rebalance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#rebalance_config ManagedKafkaCluster#rebalance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.timeouts"></a>

```java
public ManagedKafkaClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#timeouts ManagedKafkaCluster#timeouts}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.tlsConfig"></a>

```java
public ManagedKafkaClusterTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#tls_config ManagedKafkaCluster#tls_config}

---

### ManagedKafkaClusterGcpConfig <a name="ManagedKafkaClusterGcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterGcpConfig;

ManagedKafkaClusterGcpConfig.builder()
    .accessConfig(ManagedKafkaClusterGcpConfigAccessConfig)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The Cloud KMS Key name to use for encryption. |

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.accessConfig"></a>

```java
public ManagedKafkaClusterGcpConfigAccessConfig getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#access_config ManagedKafkaCluster#access_config}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The Cloud KMS Key name to use for encryption.

The key must be located in the same region as the cluster and cannot be changed. Must be in the format 'projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#kms_key ManagedKafkaCluster#kms_key}

---

### ManagedKafkaClusterGcpConfigAccessConfig <a name="ManagedKafkaClusterGcpConfigAccessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterGcpConfigAccessConfig;

ManagedKafkaClusterGcpConfigAccessConfig.builder()
    .networkConfigs(IResolvable)
    .networkConfigs(java.util.List<ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig.property.networkConfigs">networkConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>></code> | network_configs block. |

---

##### `networkConfigs`<sup>Required</sup> <a name="networkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig.property.networkConfigs"></a>

```java
public java.lang.Object getNetworkConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>>

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#network_configs ManagedKafkaCluster#network_configs}

---

### ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs <a name="ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs;

ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.builder()
    .subnet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.property.subnet">subnet</a></code> | <code>java.lang.String</code> | Name of the VPC subnet from which the cluster is accessible. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

Name of the VPC subnet from which the cluster is accessible.

Both broker and bootstrap server IP addresses and DNS entries are automatically created in the subnet. There can only be one subnet per network, and the subnet must be located in the same region as the cluster. The project may differ. The name of the subnet must be in the format 'projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#subnet ManagedKafkaCluster#subnet}

---

### ManagedKafkaClusterRebalanceConfig <a name="ManagedKafkaClusterRebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterRebalanceConfig;

ManagedKafkaClusterRebalanceConfig.builder()
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | The rebalance behavior for the cluster. When not specified, defaults to 'NO_REBALANCE'. Possible values: 'MODE_UNSPECIFIED', 'NO_REBALANCE', 'AUTO_REBALANCE_ON_SCALE_UP'. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The rebalance behavior for the cluster. When not specified, defaults to 'NO_REBALANCE'. Possible values: 'MODE_UNSPECIFIED', 'NO_REBALANCE', 'AUTO_REBALANCE_ON_SCALE_UP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#mode ManagedKafkaCluster#mode}

---

### ManagedKafkaClusterTimeouts <a name="ManagedKafkaClusterTimeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterTimeouts;

ManagedKafkaClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#create ManagedKafkaCluster#create}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#delete ManagedKafkaCluster#delete}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#update ManagedKafkaCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#create ManagedKafkaCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#delete ManagedKafkaCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#update ManagedKafkaCluster#update}.

---

### ManagedKafkaClusterTlsConfig <a name="ManagedKafkaClusterTlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterTlsConfig;

ManagedKafkaClusterTlsConfig.builder()
//  .sslPrincipalMappingRules(java.lang.String)
//  .trustConfig(ManagedKafkaClusterTlsConfigTrustConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.property.sslPrincipalMappingRules">sslPrincipalMappingRules</a></code> | <code>java.lang.String</code> | The rules for mapping mTLS certificate Distinguished Names (DNs) to shortened principal names for Kafka ACLs. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.property.trustConfig">trustConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a></code> | trust_config block. |

---

##### `sslPrincipalMappingRules`<sup>Optional</sup> <a name="sslPrincipalMappingRules" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.property.sslPrincipalMappingRules"></a>

```java
public java.lang.String getSslPrincipalMappingRules();
```

- *Type:* java.lang.String

The rules for mapping mTLS certificate Distinguished Names (DNs) to shortened principal names for Kafka ACLs.

This field corresponds exactly to the ssl.principal.mapping.rules broker config and matches the format and syntax defined in the Apache Kafka documentation. Setting or modifying this field will trigger a rolling restart of the Kafka brokers to apply the change. An empty string means that the default Kafka behavior is used. Example: 'RULE:^CN=(.?),OU=ServiceUsers.$/$1@example.com/,DEFAULT'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#ssl_principal_mapping_rules ManagedKafkaCluster#ssl_principal_mapping_rules}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.property.trustConfig"></a>

```java
public ManagedKafkaClusterTlsConfigTrustConfig getTrustConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a>

trust_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#trust_config ManagedKafkaCluster#trust_config}

---

### ManagedKafkaClusterTlsConfigTrustConfig <a name="ManagedKafkaClusterTlsConfigTrustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterTlsConfigTrustConfig;

ManagedKafkaClusterTlsConfigTrustConfig.builder()
//  .casConfigs(IResolvable)
//  .casConfigs(java.util.List<ManagedKafkaClusterTlsConfigTrustConfigCasConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig.property.casConfigs">casConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>></code> | cas_configs block. |

---

##### `casConfigs`<sup>Optional</sup> <a name="casConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig.property.casConfigs"></a>

```java
public java.lang.Object getCasConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>>

cas_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#cas_configs ManagedKafkaCluster#cas_configs}

---

### ManagedKafkaClusterTlsConfigTrustConfigCasConfigs <a name="ManagedKafkaClusterTlsConfigTrustConfigCasConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs;

ManagedKafkaClusterTlsConfigTrustConfigCasConfigs.builder()
    .caPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs.property.caPool">caPool</a></code> | <code>java.lang.String</code> | The name of the CA pool to pull CA certificates from. |

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

The name of the CA pool to pull CA certificates from.

The CA pool does not need to be in the same project or location as the Kafka cluster. Must be in the format 'projects/PROJECT_ID/locations/LOCATION/caPools/CA_POOL_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/managed_kafka_cluster#ca_pool ManagedKafkaCluster#ca_pool}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaClusterCapacityConfigOutputReference <a name="ManagedKafkaClusterCapacityConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterCapacityConfigOutputReference;

new ManagedKafkaClusterCapacityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytesInput">memoryBytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCountInput">vcpuCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytes">memoryBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCount">vcpuCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryBytesInput`<sup>Optional</sup> <a name="memoryBytesInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytesInput"></a>

```java
public java.lang.String getMemoryBytesInput();
```

- *Type:* java.lang.String

---

##### `vcpuCountInput`<sup>Optional</sup> <a name="vcpuCountInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCountInput"></a>

```java
public java.lang.String getVcpuCountInput();
```

- *Type:* java.lang.String

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytes"></a>

```java
public java.lang.String getMemoryBytes();
```

- *Type:* java.lang.String

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCount"></a>

```java
public java.lang.String getVcpuCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.internalValue"></a>

```java
public ManagedKafkaClusterCapacityConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

---


### ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList <a name="ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList;

new ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get"></a>

```java
public ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>>

---


### ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference <a name="ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference;

new ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>

---


### ManagedKafkaClusterGcpConfigAccessConfigOutputReference <a name="ManagedKafkaClusterGcpConfigAccessConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference;

new ManagedKafkaClusterGcpConfigAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs">putNetworkConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkConfigs` <a name="putNetworkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs"></a>

```java
public void putNetworkConfigs(IResolvable OR java.util.List<ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigs">networkConfigs</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput">networkConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkConfigs`<sup>Required</sup> <a name="networkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigs"></a>

```java
public ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList getNetworkConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList</a>

---

##### `networkConfigsInput`<sup>Optional</sup> <a name="networkConfigsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput"></a>

```java
public java.lang.Object getNetworkConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.internalValue"></a>

```java
public ManagedKafkaClusterGcpConfigAccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

---


### ManagedKafkaClusterGcpConfigOutputReference <a name="ManagedKafkaClusterGcpConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterGcpConfigOutputReference;

new ManagedKafkaClusterGcpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.putAccessConfig"></a>

```java
public void putAccessConfig(ManagedKafkaClusterGcpConfigAccessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

---

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference">ManagedKafkaClusterGcpConfigAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfigInput">accessConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfig"></a>

```java
public ManagedKafkaClusterGcpConfigAccessConfigOutputReference getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference">ManagedKafkaClusterGcpConfigAccessConfigOutputReference</a>

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfigInput"></a>

```java
public ManagedKafkaClusterGcpConfigAccessConfig getAccessConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.internalValue"></a>

```java
public ManagedKafkaClusterGcpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

---


### ManagedKafkaClusterRebalanceConfigOutputReference <a name="ManagedKafkaClusterRebalanceConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterRebalanceConfigOutputReference;

new ManagedKafkaClusterRebalanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.internalValue"></a>

```java
public ManagedKafkaClusterRebalanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

---


### ManagedKafkaClusterTimeoutsOutputReference <a name="ManagedKafkaClusterTimeoutsOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterTimeoutsOutputReference;

new ManagedKafkaClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

---


### ManagedKafkaClusterTlsConfigOutputReference <a name="ManagedKafkaClusterTlsConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterTlsConfigOutputReference;

new ManagedKafkaClusterTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.putTrustConfig">putTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resetSslPrincipalMappingRules">resetSslPrincipalMappingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resetTrustConfig">resetTrustConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrustConfig` <a name="putTrustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.putTrustConfig"></a>

```java
public void putTrustConfig(ManagedKafkaClusterTlsConfigTrustConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.putTrustConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a>

---

##### `resetSslPrincipalMappingRules` <a name="resetSslPrincipalMappingRules" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resetSslPrincipalMappingRules"></a>

```java
public void resetSslPrincipalMappingRules()
```

##### `resetTrustConfig` <a name="resetTrustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resetTrustConfig"></a>

```java
public void resetTrustConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.trustConfig">trustConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference">ManagedKafkaClusterTlsConfigTrustConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.sslPrincipalMappingRulesInput">sslPrincipalMappingRulesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.trustConfigInput">trustConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.sslPrincipalMappingRules">sslPrincipalMappingRules</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trustConfig`<sup>Required</sup> <a name="trustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.trustConfig"></a>

```java
public ManagedKafkaClusterTlsConfigTrustConfigOutputReference getTrustConfig();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference">ManagedKafkaClusterTlsConfigTrustConfigOutputReference</a>

---

##### `sslPrincipalMappingRulesInput`<sup>Optional</sup> <a name="sslPrincipalMappingRulesInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.sslPrincipalMappingRulesInput"></a>

```java
public java.lang.String getSslPrincipalMappingRulesInput();
```

- *Type:* java.lang.String

---

##### `trustConfigInput`<sup>Optional</sup> <a name="trustConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.trustConfigInput"></a>

```java
public ManagedKafkaClusterTlsConfigTrustConfig getTrustConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a>

---

##### `sslPrincipalMappingRules`<sup>Required</sup> <a name="sslPrincipalMappingRules" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.sslPrincipalMappingRules"></a>

```java
public java.lang.String getSslPrincipalMappingRules();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.internalValue"></a>

```java
public ManagedKafkaClusterTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a>

---


### ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList <a name="ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList;

new ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.get"></a>

```java
public ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>>

---


### ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference <a name="ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference;

new ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.caPoolInput">caPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.caPool">caPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.caPoolInput"></a>

```java
public java.lang.String getCaPoolInput();
```

- *Type:* java.lang.String

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>

---


### ManagedKafkaClusterTlsConfigTrustConfigOutputReference <a name="ManagedKafkaClusterTlsConfigTrustConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_cluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference;

new ManagedKafkaClusterTlsConfigTrustConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.putCasConfigs">putCasConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resetCasConfigs">resetCasConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCasConfigs` <a name="putCasConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.putCasConfigs"></a>

```java
public void putCasConfigs(IResolvable OR java.util.List<ManagedKafkaClusterTlsConfigTrustConfigCasConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.putCasConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>>

---

##### `resetCasConfigs` <a name="resetCasConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resetCasConfigs"></a>

```java
public void resetCasConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.casConfigs">casConfigs</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList">ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.casConfigsInput">casConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `casConfigs`<sup>Required</sup> <a name="casConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.casConfigs"></a>

```java
public ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList getCasConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList">ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList</a>

---

##### `casConfigsInput`<sup>Optional</sup> <a name="casConfigsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.casConfigsInput"></a>

```java
public java.lang.Object getCasConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.internalValue"></a>

```java
public ManagedKafkaClusterTlsConfigTrustConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a>

---



