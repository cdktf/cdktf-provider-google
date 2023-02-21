# `dataprocCluster` Submodule <a name="`dataprocCluster` Submodule" id="@cdktf/provider-google.dataprocCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocCluster <a name="DataprocCluster" id="@cdktf/provider-google.dataprocCluster.DataprocCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster google_dataproc_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocCluster;

DataprocCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .clusterConfig(DataprocClusterClusterConfig)
//  .gracefulDecommissionTimeout(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DataprocClusterTimeouts)
//  .virtualClusterConfig(DataprocClusterVirtualClusterConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the cluster, unique within the project and zone. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.gracefulDecommissionTimeout">gracefulDecommissionTimeout</a></code> | <code>java.lang.String</code> | The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#id DataprocCluster#id}. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The list of labels (key/value pairs) to be applied to instances in the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the cluster will exist. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region in which the cluster and associated nodes will be created in. Defaults to global. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.virtualClusterConfig">virtualClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a></code> | virtual_cluster_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the cluster, unique within the project and zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#name DataprocCluster#name}

---

##### `clusterConfig`<sup>Optional</sup> <a name="clusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.clusterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#cluster_config DataprocCluster#cluster_config}

---

##### `gracefulDecommissionTimeout`<sup>Optional</sup> <a name="gracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.gracefulDecommissionTimeout"></a>

- *Type:* java.lang.String

The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#graceful_decommission_timeout DataprocCluster#graceful_decommission_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#id DataprocCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The list of labels (key/value pairs) to be applied to instances in the cluster.

GCP generates some itself including goog-dataproc-cluster-name which is the name of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#labels DataprocCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the cluster will exist.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#project DataprocCluster#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region in which the cluster and associated nodes will be created in. Defaults to global.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#region DataprocCluster#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#timeouts DataprocCluster#timeouts}

---

##### `virtualClusterConfig`<sup>Optional</sup> <a name="virtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.Initializer.parameter.virtualClusterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a>

virtual_cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#virtual_cluster_config DataprocCluster#virtual_cluster_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.putClusterConfig">putClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.putVirtualClusterConfig">putVirtualClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetClusterConfig">resetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetGracefulDecommissionTimeout">resetGracefulDecommissionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.resetVirtualClusterConfig">resetVirtualClusterConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putClusterConfig` <a name="putClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putClusterConfig"></a>

```java
public void putClusterConfig(DataprocClusterClusterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putTimeouts"></a>

```java
public void putTimeouts(DataprocClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a>

---

##### `putVirtualClusterConfig` <a name="putVirtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putVirtualClusterConfig"></a>

```java
public void putVirtualClusterConfig(DataprocClusterVirtualClusterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.putVirtualClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a>

---

##### `resetClusterConfig` <a name="resetClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetClusterConfig"></a>

```java
public void resetClusterConfig()
```

##### `resetGracefulDecommissionTimeout` <a name="resetGracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetGracefulDecommissionTimeout"></a>

```java
public void resetGracefulDecommissionTimeout()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualClusterConfig` <a name="resetVirtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.resetVirtualClusterConfig"></a>

```java
public void resetVirtualClusterConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocCluster;

DataprocCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocCluster;

DataprocCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocCluster;

DataprocCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference">DataprocClusterClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference">DataprocClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.virtualClusterConfig">virtualClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference">DataprocClusterVirtualClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.clusterConfigInput">clusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.gracefulDecommissionTimeoutInput">gracefulDecommissionTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.virtualClusterConfigInput">virtualClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.gracefulDecommissionTimeout">gracefulDecommissionTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.clusterConfig"></a>

```java
public DataprocClusterClusterConfigOutputReference getClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference">DataprocClusterClusterConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.timeouts"></a>

```java
public DataprocClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference">DataprocClusterTimeoutsOutputReference</a>

---

##### `virtualClusterConfig`<sup>Required</sup> <a name="virtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.virtualClusterConfig"></a>

```java
public DataprocClusterVirtualClusterConfigOutputReference getVirtualClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference">DataprocClusterVirtualClusterConfigOutputReference</a>

---

##### `clusterConfigInput`<sup>Optional</sup> <a name="clusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.clusterConfigInput"></a>

```java
public DataprocClusterClusterConfig getClusterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a>

---

##### `gracefulDecommissionTimeoutInput`<sup>Optional</sup> <a name="gracefulDecommissionTimeoutInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.gracefulDecommissionTimeoutInput"></a>

```java
public java.lang.String getGracefulDecommissionTimeoutInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `virtualClusterConfigInput`<sup>Optional</sup> <a name="virtualClusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.virtualClusterConfigInput"></a>

```java
public DataprocClusterVirtualClusterConfig getVirtualClusterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a>

---

##### `gracefulDecommissionTimeout`<sup>Required</sup> <a name="gracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.gracefulDecommissionTimeout"></a>

```java
public java.lang.String getGracefulDecommissionTimeout();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocCluster.DataprocCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocClusterClusterConfig <a name="DataprocClusterClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfig;

DataprocClusterClusterConfig.builder()
//  .autoscalingConfig(DataprocClusterClusterConfigAutoscalingConfig)
//  .dataprocMetricConfig(DataprocClusterClusterConfigDataprocMetricConfig)
//  .encryptionConfig(DataprocClusterClusterConfigEncryptionConfig)
//  .endpointConfig(DataprocClusterClusterConfigEndpointConfig)
//  .gceClusterConfig(DataprocClusterClusterConfigGceClusterConfig)
//  .initializationAction(IResolvable)
//  .initializationAction(java.util.List<DataprocClusterClusterConfigInitializationAction>)
//  .lifecycleConfig(DataprocClusterClusterConfigLifecycleConfig)
//  .masterConfig(DataprocClusterClusterConfigMasterConfig)
//  .metastoreConfig(DataprocClusterClusterConfigMetastoreConfig)
//  .preemptibleWorkerConfig(DataprocClusterClusterConfigPreemptibleWorkerConfig)
//  .securityConfig(DataprocClusterClusterConfigSecurityConfig)
//  .softwareConfig(DataprocClusterClusterConfigSoftwareConfig)
//  .stagingBucket(java.lang.String)
//  .tempBucket(java.lang.String)
//  .workerConfig(DataprocClusterClusterConfigWorkerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.dataprocMetricConfig">dataprocMetricConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a></code> | dataproc_metric_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.endpointConfig">endpointConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a></code> | endpoint_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.gceClusterConfig">gceClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a></code> | gce_cluster_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.initializationAction">initializationAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction">DataprocClusterClusterConfigInitializationAction</a>></code> | initialization_action block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.lifecycleConfig">lifecycleConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a></code> | lifecycle_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.masterConfig">masterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a></code> | master_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.metastoreConfig">metastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a></code> | metastore_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.preemptibleWorkerConfig">preemptibleWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a></code> | preemptible_worker_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.securityConfig">securityConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a></code> | security_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | The Cloud Storage staging bucket used to stage files, such as Hadoop jars, between client machines and the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.tempBucket">tempBucket</a></code> | <code>java.lang.String</code> | The Cloud Storage temp bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a></code> | worker_config block. |

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.autoscalingConfig"></a>

```java
public DataprocClusterClusterConfigAutoscalingConfig getAutoscalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#autoscaling_config DataprocCluster#autoscaling_config}

---

##### `dataprocMetricConfig`<sup>Optional</sup> <a name="dataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.dataprocMetricConfig"></a>

```java
public DataprocClusterClusterConfigDataprocMetricConfig getDataprocMetricConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a>

dataproc_metric_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#dataproc_metric_config DataprocCluster#dataproc_metric_config}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.encryptionConfig"></a>

```java
public DataprocClusterClusterConfigEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#encryption_config DataprocCluster#encryption_config}

---

##### `endpointConfig`<sup>Optional</sup> <a name="endpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.endpointConfig"></a>

```java
public DataprocClusterClusterConfigEndpointConfig getEndpointConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a>

endpoint_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#endpoint_config DataprocCluster#endpoint_config}

---

##### `gceClusterConfig`<sup>Optional</sup> <a name="gceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.gceClusterConfig"></a>

```java
public DataprocClusterClusterConfigGceClusterConfig getGceClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a>

gce_cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#gce_cluster_config DataprocCluster#gce_cluster_config}

---

##### `initializationAction`<sup>Optional</sup> <a name="initializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.initializationAction"></a>

```java
public java.lang.Object getInitializationAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction">DataprocClusterClusterConfigInitializationAction</a>>

initialization_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#initialization_action DataprocCluster#initialization_action}

---

##### `lifecycleConfig`<sup>Optional</sup> <a name="lifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.lifecycleConfig"></a>

```java
public DataprocClusterClusterConfigLifecycleConfig getLifecycleConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a>

lifecycle_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#lifecycle_config DataprocCluster#lifecycle_config}

---

##### `masterConfig`<sup>Optional</sup> <a name="masterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.masterConfig"></a>

```java
public DataprocClusterClusterConfigMasterConfig getMasterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a>

master_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#master_config DataprocCluster#master_config}

---

##### `metastoreConfig`<sup>Optional</sup> <a name="metastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.metastoreConfig"></a>

```java
public DataprocClusterClusterConfigMetastoreConfig getMetastoreConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a>

metastore_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#metastore_config DataprocCluster#metastore_config}

---

##### `preemptibleWorkerConfig`<sup>Optional</sup> <a name="preemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.preemptibleWorkerConfig"></a>

```java
public DataprocClusterClusterConfigPreemptibleWorkerConfig getPreemptibleWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a>

preemptible_worker_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#preemptible_worker_config DataprocCluster#preemptible_worker_config}

---

##### `securityConfig`<sup>Optional</sup> <a name="securityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.securityConfig"></a>

```java
public DataprocClusterClusterConfigSecurityConfig getSecurityConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a>

security_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#security_config DataprocCluster#security_config}

---

##### `softwareConfig`<sup>Optional</sup> <a name="softwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.softwareConfig"></a>

```java
public DataprocClusterClusterConfigSoftwareConfig getSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#software_config DataprocCluster#software_config}

---

##### `stagingBucket`<sup>Optional</sup> <a name="stagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

The Cloud Storage staging bucket used to stage files, such as Hadoop jars, between client machines and the cluster.

Note: If you don't explicitly specify a staging_bucket then GCP will auto create / assign one for you. However, you are not guaranteed an auto generated bucket which is solely dedicated to your cluster; it may be shared with other clusters in the same region/zone also choosing to use the auto generation option.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#staging_bucket DataprocCluster#staging_bucket}

---

##### `tempBucket`<sup>Optional</sup> <a name="tempBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.tempBucket"></a>

```java
public java.lang.String getTempBucket();
```

- *Type:* java.lang.String

The Cloud Storage temp bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files.

Note: If you don't explicitly specify a temp_bucket then GCP will auto create / assign one for you.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#temp_bucket DataprocCluster#temp_bucket}

---

##### `workerConfig`<sup>Optional</sup> <a name="workerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig.property.workerConfig"></a>

```java
public DataprocClusterClusterConfigWorkerConfig getWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#worker_config DataprocCluster#worker_config}

---

### DataprocClusterClusterConfigAutoscalingConfig <a name="DataprocClusterClusterConfigAutoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigAutoscalingConfig;

DataprocClusterClusterConfigAutoscalingConfig.builder()
    .policyUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig.property.policyUri">policyUri</a></code> | <code>java.lang.String</code> | The autoscaling policy used by the cluster. |

---

##### `policyUri`<sup>Required</sup> <a name="policyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig.property.policyUri"></a>

```java
public java.lang.String getPolicyUri();
```

- *Type:* java.lang.String

The autoscaling policy used by the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#policy_uri DataprocCluster#policy_uri}

---

### DataprocClusterClusterConfigDataprocMetricConfig <a name="DataprocClusterClusterConfigDataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigDataprocMetricConfig;

DataprocClusterClusterConfigDataprocMetricConfig.builder()
    .metrics(IResolvable)
    .metrics(java.util.List<DataprocClusterClusterConfigDataprocMetricConfigMetrics>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig.property.metrics">metrics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics">DataprocClusterClusterConfigDataprocMetricConfigMetrics</a>></code> | metrics block. |

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig.property.metrics"></a>

```java
public java.lang.Object getMetrics();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics">DataprocClusterClusterConfigDataprocMetricConfigMetrics</a>>

metrics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#metrics DataprocCluster#metrics}

---

### DataprocClusterClusterConfigDataprocMetricConfigMetrics <a name="DataprocClusterClusterConfigDataprocMetricConfigMetrics" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics;

DataprocClusterClusterConfigDataprocMetricConfigMetrics.builder()
    .metricSource(java.lang.String)
//  .metricOverrides(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.property.metricSource">metricSource</a></code> | <code>java.lang.String</code> | A source for the collection of Dataproc OSS metrics (see [available OSS metrics] (https://cloud.google.com//dataproc/docs/guides/monitoring#available_oss_metrics)). |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.property.metricOverrides">metricOverrides</a></code> | <code>java.util.List<java.lang.String></code> | Specify one or more [available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect. |

---

##### `metricSource`<sup>Required</sup> <a name="metricSource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.property.metricSource"></a>

```java
public java.lang.String getMetricSource();
```

- *Type:* java.lang.String

A source for the collection of Dataproc OSS metrics (see [available OSS metrics] (https://cloud.google.com//dataproc/docs/guides/monitoring#available_oss_metrics)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#metric_source DataprocCluster#metric_source}

---

##### `metricOverrides`<sup>Optional</sup> <a name="metricOverrides" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics.property.metricOverrides"></a>

```java
public java.util.List<java.lang.String> getMetricOverrides();
```

- *Type:* java.util.List<java.lang.String>

Specify one or more [available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#metric_overrides DataprocCluster#metric_overrides}

---

### DataprocClusterClusterConfigEncryptionConfig <a name="DataprocClusterClusterConfigEncryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigEncryptionConfig;

DataprocClusterClusterConfigEncryptionConfig.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS key name to use for PD disk encryption for all instances in the cluster. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#kms_key_name DataprocCluster#kms_key_name}

---

### DataprocClusterClusterConfigEndpointConfig <a name="DataprocClusterClusterConfigEndpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigEndpointConfig;

DataprocClusterClusterConfigEndpointConfig.builder()
    .enableHttpPortAccess(java.lang.Boolean)
    .enableHttpPortAccess(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig.property.enableHttpPortAccess">enableHttpPortAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The flag to enable http access to specific ports on the cluster from external sources (aka Component Gateway). |

---

##### `enableHttpPortAccess`<sup>Required</sup> <a name="enableHttpPortAccess" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig.property.enableHttpPortAccess"></a>

```java
public java.lang.Object getEnableHttpPortAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The flag to enable http access to specific ports on the cluster from external sources (aka Component Gateway).

Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#enable_http_port_access DataprocCluster#enable_http_port_access}

---

### DataprocClusterClusterConfigGceClusterConfig <a name="DataprocClusterClusterConfigGceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigGceClusterConfig;

DataprocClusterClusterConfigGceClusterConfig.builder()
//  .internalIpOnly(java.lang.Boolean)
//  .internalIpOnly(IResolvable)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .nodeGroupAffinity(DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity)
//  .reservationAffinity(DataprocClusterClusterConfigGceClusterConfigReservationAffinity)
//  .serviceAccount(java.lang.String)
//  .serviceAccountScopes(java.util.List<java.lang.String>)
//  .shieldedInstanceConfig(DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig)
//  .subnetwork(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.internalIpOnly">internalIpOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of the Compute Engine metadata entries to add to all instances. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.network">network</a></code> | <code>java.lang.String</code> | The name or self_link of the Google Compute Engine network to the cluster will be part of. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.nodeGroupAffinity">nodeGroupAffinity</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a></code> | node_group_affinity block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account to be used by the Node VMs. If not specified, the "default" service account is used. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>java.util.List<java.lang.String></code> | The set of Google API scopes to be made available on all of the node VMs under the service_account specified. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name or self_link of the Google Compute Engine subnetwork the cluster will be part of. Conflicts with network. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The list of instance tags applied to instances in the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The GCP zone where your data is stored and used (i.e. where the master and the worker nodes will be created in). If region is set to 'global' (default) then zone is mandatory, otherwise GCP is able to make use of Auto Zone Placement to determine this automatically for you. Note: This setting additionally determines and restricts which computing resources are available for use with other configs such as cluster_config.master_config.machine_type and cluster_config.worker_config.machine_type. |

---

##### `internalIpOnly`<sup>Optional</sup> <a name="internalIpOnly" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.internalIpOnly"></a>

```java
public java.lang.Object getInternalIpOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance.

If set to true, all instances in the cluster will only have internal IP addresses. Note: Private Google Access (also known as privateIpGoogleAccess) must be enabled on the subnetwork that the cluster will be launched in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#internal_ip_only DataprocCluster#internal_ip_only}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of the Compute Engine metadata entries to add to all instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#metadata DataprocCluster#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name or self_link of the Google Compute Engine network to the cluster will be part of.

Conflicts with subnetwork. If neither is specified, this defaults to the "default" network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#network DataprocCluster#network}

---

##### `nodeGroupAffinity`<sup>Optional</sup> <a name="nodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.nodeGroupAffinity"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity getNodeGroupAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a>

node_group_affinity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#node_group_affinity DataprocCluster#node_group_affinity}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.reservationAffinity"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigReservationAffinity getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#reservation_affinity DataprocCluster#reservation_affinity}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The service account to be used by the Node VMs. If not specified, the "default" service account is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#service_account DataprocCluster#service_account}

---

##### `serviceAccountScopes`<sup>Optional</sup> <a name="serviceAccountScopes" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.serviceAccountScopes"></a>

```java
public java.util.List<java.lang.String> getServiceAccountScopes();
```

- *Type:* java.util.List<java.lang.String>

The set of Google API scopes to be made available on all of the node VMs under the service_account specified.

These can be either FQDNs, or scope aliases.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#service_account_scopes DataprocCluster#service_account_scopes}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.shieldedInstanceConfig"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#shielded_instance_config DataprocCluster#shielded_instance_config}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The name or self_link of the Google Compute Engine subnetwork the cluster will be part of. Conflicts with network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#subnetwork DataprocCluster#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

The list of instance tags applied to instances in the cluster.

Tags are used to identify valid sources or targets for network firewalls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#tags DataprocCluster#tags}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The GCP zone where your data is stored and used (i.e. where the master and the worker nodes will be created in). If region is set to 'global' (default) then zone is mandatory, otherwise GCP is able to make use of Auto Zone Placement to determine this automatically for you. Note: This setting additionally determines and restricts which computing resources are available for use with other configs such as cluster_config.master_config.machine_type and cluster_config.worker_config.machine_type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#zone DataprocCluster#zone}

---

### DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity <a name="DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity;

DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity.builder()
    .nodeGroupUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity.property.nodeGroupUri">nodeGroupUri</a></code> | <code>java.lang.String</code> | The URI of a sole-tenant that the cluster will be created on. |

---

##### `nodeGroupUri`<sup>Required</sup> <a name="nodeGroupUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity.property.nodeGroupUri"></a>

```java
public java.lang.String getNodeGroupUri();
```

- *Type:* java.lang.String

The URI of a sole-tenant that the cluster will be created on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#node_group_uri DataprocCluster#node_group_uri}

---

### DataprocClusterClusterConfigGceClusterConfigReservationAffinity <a name="DataprocClusterClusterConfigGceClusterConfigReservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity;

DataprocClusterClusterConfigGceClusterConfigReservationAffinity.builder()
//  .consumeReservationType(java.lang.String)
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.consumeReservationType">consumeReservationType</a></code> | <code>java.lang.String</code> | Type of reservation to consume. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.key">key</a></code> | <code>java.lang.String</code> | Corresponds to the label key of reservation resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Corresponds to the label values of reservation resource. |

---

##### `consumeReservationType`<sup>Optional</sup> <a name="consumeReservationType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.consumeReservationType"></a>

```java
public java.lang.String getConsumeReservationType();
```

- *Type:* java.lang.String

Type of reservation to consume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#consume_reservation_type DataprocCluster#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#key DataprocCluster#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#values DataprocCluster#values}

---

### DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig <a name="DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig;

DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean)
//  .enableIntegrityMonitoring(IResolvable)
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
//  .enableVtpm(java.lang.Boolean)
//  .enableVtpm(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether instances have integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether instances have Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether instances have the vTPM enabled. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether instances have integrity monitoring enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#enable_integrity_monitoring DataprocCluster#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether instances have Secure Boot enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#enable_secure_boot DataprocCluster#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether instances have the vTPM enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#enable_vtpm DataprocCluster#enable_vtpm}

---

### DataprocClusterClusterConfigInitializationAction <a name="DataprocClusterClusterConfigInitializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigInitializationAction;

DataprocClusterClusterConfigInitializationAction.builder()
    .script(java.lang.String)
//  .timeoutSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.property.script">script</a></code> | <code>java.lang.String</code> | The script to be executed during initialization of the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | The maximum duration (in seconds) which script is allowed to take to execute its action. |

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

The script to be executed during initialization of the cluster.

The script must be a GCS file with a gs:// prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#script DataprocCluster#script}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

The maximum duration (in seconds) which script is allowed to take to execute its action.

GCP will default to a predetermined computed value if not set (currently 300).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#timeout_sec DataprocCluster#timeout_sec}

---

### DataprocClusterClusterConfigLifecycleConfig <a name="DataprocClusterClusterConfigLifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigLifecycleConfig;

DataprocClusterClusterConfigLifecycleConfig.builder()
//  .autoDeleteTime(java.lang.String)
//  .idleDeleteTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.property.autoDeleteTime">autoDeleteTime</a></code> | <code>java.lang.String</code> | The time when cluster will be auto-deleted. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.property.idleDeleteTtl">idleDeleteTtl</a></code> | <code>java.lang.String</code> | The duration to keep the cluster alive while idling (no jobs running). |

---

##### `autoDeleteTime`<sup>Optional</sup> <a name="autoDeleteTime" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.property.autoDeleteTime"></a>

```java
public java.lang.String getAutoDeleteTime();
```

- *Type:* java.lang.String

The time when cluster will be auto-deleted. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#auto_delete_time DataprocCluster#auto_delete_time}

---

##### `idleDeleteTtl`<sup>Optional</sup> <a name="idleDeleteTtl" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig.property.idleDeleteTtl"></a>

```java
public java.lang.String getIdleDeleteTtl();
```

- *Type:* java.lang.String

The duration to keep the cluster alive while idling (no jobs running).

After this TTL, the cluster will be deleted. Valid range: [10m, 14d].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#idle_delete_ttl DataprocCluster#idle_delete_ttl}

---

### DataprocClusterClusterConfigMasterConfig <a name="DataprocClusterClusterConfigMasterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigMasterConfig;

DataprocClusterClusterConfigMasterConfig.builder()
//  .accelerators(IResolvable)
//  .accelerators(java.util.List<DataprocClusterClusterConfigMasterConfigAccelerators>)
//  .diskConfig(DataprocClusterClusterConfigMasterConfigDiskConfig)
//  .imageUri(java.lang.String)
//  .machineType(java.lang.String)
//  .minCpuPlatform(java.lang.String)
//  .numInstances(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.accelerators">accelerators</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators">DataprocClusterClusterConfigMasterConfigAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.diskConfig">diskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a></code> | disk_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The URI for the image to use for this master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The name of a Google Compute Engine machine type to create for the master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | The name of a minimum generation of CPU family for the master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.numInstances">numInstances</a></code> | <code>java.lang.Number</code> | Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value. |

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.accelerators"></a>

```java
public java.lang.Object getAccelerators();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators">DataprocClusterClusterConfigMasterConfigAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#accelerators DataprocCluster#accelerators}

---

##### `diskConfig`<sup>Optional</sup> <a name="diskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.diskConfig"></a>

```java
public DataprocClusterClusterConfigMasterConfigDiskConfig getDiskConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a>

disk_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#disk_config DataprocCluster#disk_config}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The URI for the image to use for this master/worker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#image_uri DataprocCluster#image_uri}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The name of a Google Compute Engine machine type to create for the master/worker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#machine_type DataprocCluster#machine_type}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

The name of a minimum generation of CPU family for the master/worker.

If not specified, GCP will default to a predetermined computed value for each zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}

---

##### `numInstances`<sup>Optional</sup> <a name="numInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig.property.numInstances"></a>

```java
public java.lang.Number getNumInstances();
```

- *Type:* java.lang.Number

Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#num_instances DataprocCluster#num_instances}

---

### DataprocClusterClusterConfigMasterConfigAccelerators <a name="DataprocClusterClusterConfigMasterConfigAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigMasterConfigAccelerators;

DataprocClusterClusterConfigMasterConfigAccelerators.builder()
    .acceleratorCount(java.lang.Number)
    .acceleratorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of the accelerator cards of this type exposed to this instance. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80. |

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of the accelerator cards of this type exposed to this instance.

Often restricted to one of 1, 2, 4, or 8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#accelerator_count DataprocCluster#accelerator_count}

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#accelerator_type DataprocCluster#accelerator_type}

---

### DataprocClusterClusterConfigMasterConfigDiskConfig <a name="DataprocClusterClusterConfigMasterConfigDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigMasterConfigDiskConfig;

DataprocClusterClusterConfigMasterConfigDiskConfig.builder()
//  .bootDiskSizeGb(java.lang.Number)
//  .bootDiskType(java.lang.String)
//  .numLocalSsds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | Size of the primary disk attached to each node, specified in GB. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard". |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.numLocalSsds">numLocalSsds</a></code> | <code>java.lang.Number</code> | The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0. |

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

Size of the primary disk attached to each node, specified in GB.

The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}

---

##### `numLocalSsds`<sup>Optional</sup> <a name="numLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig.property.numLocalSsds"></a>

```java
public java.lang.Number getNumLocalSsds();
```

- *Type:* java.lang.Number

The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}

---

### DataprocClusterClusterConfigMetastoreConfig <a name="DataprocClusterClusterConfigMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigMetastoreConfig;

DataprocClusterClusterConfigMetastoreConfig.builder()
    .dataprocMetastoreService(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig.property.dataprocMetastoreService">dataprocMetastoreService</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Metastore service. |

---

##### `dataprocMetastoreService`<sup>Required</sup> <a name="dataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig.property.dataprocMetastoreService"></a>

```java
public java.lang.String getDataprocMetastoreService();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#dataproc_metastore_service DataprocCluster#dataproc_metastore_service}

---

### DataprocClusterClusterConfigPreemptibleWorkerConfig <a name="DataprocClusterClusterConfigPreemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigPreemptibleWorkerConfig;

DataprocClusterClusterConfigPreemptibleWorkerConfig.builder()
//  .diskConfig(DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig)
//  .numInstances(java.lang.Number)
//  .preemptibility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.diskConfig">diskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a></code> | disk_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.numInstances">numInstances</a></code> | <code>java.lang.Number</code> | Specifies the number of preemptible nodes to create. Defaults to 0. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.preemptibility">preemptibility</a></code> | <code>java.lang.String</code> | Specifies the preemptibility of the secondary nodes. Defaults to PREEMPTIBLE. |

---

##### `diskConfig`<sup>Optional</sup> <a name="diskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.diskConfig"></a>

```java
public DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig getDiskConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a>

disk_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#disk_config DataprocCluster#disk_config}

---

##### `numInstances`<sup>Optional</sup> <a name="numInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.numInstances"></a>

```java
public java.lang.Number getNumInstances();
```

- *Type:* java.lang.Number

Specifies the number of preemptible nodes to create. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#num_instances DataprocCluster#num_instances}

---

##### `preemptibility`<sup>Optional</sup> <a name="preemptibility" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig.property.preemptibility"></a>

```java
public java.lang.String getPreemptibility();
```

- *Type:* java.lang.String

Specifies the preemptibility of the secondary nodes. Defaults to PREEMPTIBLE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#preemptibility DataprocCluster#preemptibility}

---

### DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig <a name="DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig;

DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.builder()
//  .bootDiskSizeGb(java.lang.Number)
//  .bootDiskType(java.lang.String)
//  .numLocalSsds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | Size of the primary disk attached to each preemptible worker node, specified in GB. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | The disk type of the primary disk attached to each preemptible worker node. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.numLocalSsds">numLocalSsds</a></code> | <code>java.lang.Number</code> | The amount of local SSD disks that will be attached to each preemptible worker node. Defaults to 0. |

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

Size of the primary disk attached to each preemptible worker node, specified in GB.

The smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

The disk type of the primary disk attached to each preemptible worker node.

Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}

---

##### `numLocalSsds`<sup>Optional</sup> <a name="numLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig.property.numLocalSsds"></a>

```java
public java.lang.Number getNumLocalSsds();
```

- *Type:* java.lang.Number

The amount of local SSD disks that will be attached to each preemptible worker node. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}

---

### DataprocClusterClusterConfigSecurityConfig <a name="DataprocClusterClusterConfigSecurityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigSecurityConfig;

DataprocClusterClusterConfigSecurityConfig.builder()
    .kerberosConfig(DataprocClusterClusterConfigSecurityConfigKerberosConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a></code> | kerberos_config block. |

---

##### `kerberosConfig`<sup>Required</sup> <a name="kerberosConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig.property.kerberosConfig"></a>

```java
public DataprocClusterClusterConfigSecurityConfigKerberosConfig getKerberosConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a>

kerberos_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#kerberos_config DataprocCluster#kerberos_config}

---

### DataprocClusterClusterConfigSecurityConfigKerberosConfig <a name="DataprocClusterClusterConfigSecurityConfigKerberosConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig;

DataprocClusterClusterConfigSecurityConfigKerberosConfig.builder()
    .kmsKeyUri(java.lang.String)
    .rootPrincipalPasswordUri(java.lang.String)
//  .crossRealmTrustAdminServer(java.lang.String)
//  .crossRealmTrustKdc(java.lang.String)
//  .crossRealmTrustRealm(java.lang.String)
//  .crossRealmTrustSharedPasswordUri(java.lang.String)
//  .enableKerberos(java.lang.Boolean)
//  .enableKerberos(IResolvable)
//  .kdcDbKeyUri(java.lang.String)
//  .keyPasswordUri(java.lang.String)
//  .keystorePasswordUri(java.lang.String)
//  .keystoreUri(java.lang.String)
//  .realm(java.lang.String)
//  .tgtLifetimeHours(java.lang.Number)
//  .truststorePasswordUri(java.lang.String)
//  .truststoreUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.kmsKeyUri">kmsKeyUri</a></code> | <code>java.lang.String</code> | The uri of the KMS key used to encrypt various sensitive files. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.rootPrincipalPasswordUri">rootPrincipalPasswordUri</a></code> | <code>java.lang.String</code> | The cloud Storage URI of a KMS encrypted file containing the root principal password. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustAdminServer">crossRealmTrustAdminServer</a></code> | <code>java.lang.String</code> | The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustKdc">crossRealmTrustKdc</a></code> | <code>java.lang.String</code> | The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustRealm">crossRealmTrustRealm</a></code> | <code>java.lang.String</code> | The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustSharedPasswordUri">crossRealmTrustSharedPasswordUri</a></code> | <code>java.lang.String</code> | The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.enableKerberos">enableKerberos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to indicate whether to Kerberize the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.kdcDbKeyUri">kdcDbKeyUri</a></code> | <code>java.lang.String</code> | The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keyPasswordUri">keyPasswordUri</a></code> | <code>java.lang.String</code> | The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keystorePasswordUri">keystorePasswordUri</a></code> | <code>java.lang.String</code> | The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keystoreUri">keystoreUri</a></code> | <code>java.lang.String</code> | The Cloud Storage URI of the keystore file used for SSL encryption. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.realm">realm</a></code> | <code>java.lang.String</code> | The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.tgtLifetimeHours">tgtLifetimeHours</a></code> | <code>java.lang.Number</code> | The lifetime of the ticket granting ticket, in hours. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.truststorePasswordUri">truststorePasswordUri</a></code> | <code>java.lang.String</code> | The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.truststoreUri">truststoreUri</a></code> | <code>java.lang.String</code> | The Cloud Storage URI of the truststore file used for SSL encryption. |

---

##### `kmsKeyUri`<sup>Required</sup> <a name="kmsKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.kmsKeyUri"></a>

```java
public java.lang.String getKmsKeyUri();
```

- *Type:* java.lang.String

The uri of the KMS key used to encrypt various sensitive files.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#kms_key_uri DataprocCluster#kms_key_uri}

---

##### `rootPrincipalPasswordUri`<sup>Required</sup> <a name="rootPrincipalPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.rootPrincipalPasswordUri"></a>

```java
public java.lang.String getRootPrincipalPasswordUri();
```

- *Type:* java.lang.String

The cloud Storage URI of a KMS encrypted file containing the root principal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#root_principal_password_uri DataprocCluster#root_principal_password_uri}

---

##### `crossRealmTrustAdminServer`<sup>Optional</sup> <a name="crossRealmTrustAdminServer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustAdminServer"></a>

```java
public java.lang.String getCrossRealmTrustAdminServer();
```

- *Type:* java.lang.String

The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#cross_realm_trust_admin_server DataprocCluster#cross_realm_trust_admin_server}

---

##### `crossRealmTrustKdc`<sup>Optional</sup> <a name="crossRealmTrustKdc" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustKdc"></a>

```java
public java.lang.String getCrossRealmTrustKdc();
```

- *Type:* java.lang.String

The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#cross_realm_trust_kdc DataprocCluster#cross_realm_trust_kdc}

---

##### `crossRealmTrustRealm`<sup>Optional</sup> <a name="crossRealmTrustRealm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustRealm"></a>

```java
public java.lang.String getCrossRealmTrustRealm();
```

- *Type:* java.lang.String

The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#cross_realm_trust_realm DataprocCluster#cross_realm_trust_realm}

---

##### `crossRealmTrustSharedPasswordUri`<sup>Optional</sup> <a name="crossRealmTrustSharedPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.crossRealmTrustSharedPasswordUri"></a>

```java
public java.lang.String getCrossRealmTrustSharedPasswordUri();
```

- *Type:* java.lang.String

The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#cross_realm_trust_shared_password_uri DataprocCluster#cross_realm_trust_shared_password_uri}

---

##### `enableKerberos`<sup>Optional</sup> <a name="enableKerberos" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.enableKerberos"></a>

```java
public java.lang.Object getEnableKerberos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to indicate whether to Kerberize the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#enable_kerberos DataprocCluster#enable_kerberos}

---

##### `kdcDbKeyUri`<sup>Optional</sup> <a name="kdcDbKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.kdcDbKeyUri"></a>

```java
public java.lang.String getKdcDbKeyUri();
```

- *Type:* java.lang.String

The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#kdc_db_key_uri DataprocCluster#kdc_db_key_uri}

---

##### `keyPasswordUri`<sup>Optional</sup> <a name="keyPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keyPasswordUri"></a>

```java
public java.lang.String getKeyPasswordUri();
```

- *Type:* java.lang.String

The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key.

For the self-signed certificate, this password is generated by Dataproc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#key_password_uri DataprocCluster#key_password_uri}

---

##### `keystorePasswordUri`<sup>Optional</sup> <a name="keystorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keystorePasswordUri"></a>

```java
public java.lang.String getKeystorePasswordUri();
```

- *Type:* java.lang.String

The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore.

For the self-signed certificate, this password is generated
by Dataproc

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#keystore_password_uri DataprocCluster#keystore_password_uri}

---

##### `keystoreUri`<sup>Optional</sup> <a name="keystoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.keystoreUri"></a>

```java
public java.lang.String getKeystoreUri();
```

- *Type:* java.lang.String

The Cloud Storage URI of the keystore file used for SSL encryption.

If not provided, Dataproc will provide a self-signed certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#keystore_uri DataprocCluster#keystore_uri}

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#realm DataprocCluster#realm}

---

##### `tgtLifetimeHours`<sup>Optional</sup> <a name="tgtLifetimeHours" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.tgtLifetimeHours"></a>

```java
public java.lang.Number getTgtLifetimeHours();
```

- *Type:* java.lang.Number

The lifetime of the ticket granting ticket, in hours.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#tgt_lifetime_hours DataprocCluster#tgt_lifetime_hours}

---

##### `truststorePasswordUri`<sup>Optional</sup> <a name="truststorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.truststorePasswordUri"></a>

```java
public java.lang.String getTruststorePasswordUri();
```

- *Type:* java.lang.String

The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore.

For the self-signed certificate, this password is generated by Dataproc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#truststore_password_uri DataprocCluster#truststore_password_uri}

---

##### `truststoreUri`<sup>Optional</sup> <a name="truststoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig.property.truststoreUri"></a>

```java
public java.lang.String getTruststoreUri();
```

- *Type:* java.lang.String

The Cloud Storage URI of the truststore file used for SSL encryption.

If not provided, Dataproc will provide a self-signed certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#truststore_uri DataprocCluster#truststore_uri}

---

### DataprocClusterClusterConfigSoftwareConfig <a name="DataprocClusterClusterConfigSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigSoftwareConfig;

DataprocClusterClusterConfigSoftwareConfig.builder()
//  .imageVersion(java.lang.String)
//  .optionalComponents(java.util.List<java.lang.String>)
//  .overrideProperties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | The Cloud Dataproc image version to use for the cluster - this controls the sets of software versions installed onto the nodes when you create clusters. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.optionalComponents">optionalComponents</a></code> | <code>java.util.List<java.lang.String></code> | The set of optional components to activate on the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.overrideProperties">overrideProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of override and additional properties (key/value pairs) used to modify various aspects of the common configuration files used when creating a cluster. |

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

The Cloud Dataproc image version to use for the cluster - this controls the sets of software versions installed onto the nodes when you create clusters.

If not specified, defaults to the latest version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#image_version DataprocCluster#image_version}

---

##### `optionalComponents`<sup>Optional</sup> <a name="optionalComponents" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.optionalComponents"></a>

```java
public java.util.List<java.lang.String> getOptionalComponents();
```

- *Type:* java.util.List<java.lang.String>

The set of optional components to activate on the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#optional_components DataprocCluster#optional_components}

---

##### `overrideProperties`<sup>Optional</sup> <a name="overrideProperties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig.property.overrideProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOverrideProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of override and additional properties (key/value pairs) used to modify various aspects of the common configuration files used when creating a cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#override_properties DataprocCluster#override_properties}

---

### DataprocClusterClusterConfigWorkerConfig <a name="DataprocClusterClusterConfigWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigWorkerConfig;

DataprocClusterClusterConfigWorkerConfig.builder()
//  .accelerators(IResolvable)
//  .accelerators(java.util.List<DataprocClusterClusterConfigWorkerConfigAccelerators>)
//  .diskConfig(DataprocClusterClusterConfigWorkerConfigDiskConfig)
//  .imageUri(java.lang.String)
//  .machineType(java.lang.String)
//  .minCpuPlatform(java.lang.String)
//  .numInstances(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.accelerators">accelerators</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators">DataprocClusterClusterConfigWorkerConfigAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.diskConfig">diskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a></code> | disk_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The URI for the image to use for this master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The name of a Google Compute Engine machine type to create for the master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | The name of a minimum generation of CPU family for the master/worker. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.numInstances">numInstances</a></code> | <code>java.lang.Number</code> | Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value. |

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.accelerators"></a>

```java
public java.lang.Object getAccelerators();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators">DataprocClusterClusterConfigWorkerConfigAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#accelerators DataprocCluster#accelerators}

---

##### `diskConfig`<sup>Optional</sup> <a name="diskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.diskConfig"></a>

```java
public DataprocClusterClusterConfigWorkerConfigDiskConfig getDiskConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a>

disk_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#disk_config DataprocCluster#disk_config}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The URI for the image to use for this master/worker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#image_uri DataprocCluster#image_uri}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The name of a Google Compute Engine machine type to create for the master/worker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#machine_type DataprocCluster#machine_type}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

The name of a minimum generation of CPU family for the master/worker.

If not specified, GCP will default to a predetermined computed value for each zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}

---

##### `numInstances`<sup>Optional</sup> <a name="numInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig.property.numInstances"></a>

```java
public java.lang.Number getNumInstances();
```

- *Type:* java.lang.Number

Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#num_instances DataprocCluster#num_instances}

---

### DataprocClusterClusterConfigWorkerConfigAccelerators <a name="DataprocClusterClusterConfigWorkerConfigAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigWorkerConfigAccelerators;

DataprocClusterClusterConfigWorkerConfigAccelerators.builder()
    .acceleratorCount(java.lang.Number)
    .acceleratorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of the accelerator cards of this type exposed to this instance. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80. |

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of the accelerator cards of this type exposed to this instance.

Often restricted to one of 1, 2, 4, or 8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#accelerator_count DataprocCluster#accelerator_count}

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#accelerator_type DataprocCluster#accelerator_type}

---

### DataprocClusterClusterConfigWorkerConfigDiskConfig <a name="DataprocClusterClusterConfigWorkerConfigDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigWorkerConfigDiskConfig;

DataprocClusterClusterConfigWorkerConfigDiskConfig.builder()
//  .bootDiskSizeGb(java.lang.Number)
//  .bootDiskType(java.lang.String)
//  .numLocalSsds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | Size of the primary disk attached to each node, specified in GB. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard". |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.numLocalSsds">numLocalSsds</a></code> | <code>java.lang.Number</code> | The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0. |

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

Size of the primary disk attached to each node, specified in GB.

The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#boot_disk_type DataprocCluster#boot_disk_type}

---

##### `numLocalSsds`<sup>Optional</sup> <a name="numLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig.property.numLocalSsds"></a>

```java
public java.lang.Number getNumLocalSsds();
```

- *Type:* java.lang.Number

The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#num_local_ssds DataprocCluster#num_local_ssds}

---

### DataprocClusterConfig <a name="DataprocClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterConfig;

DataprocClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .clusterConfig(DataprocClusterClusterConfig)
//  .gracefulDecommissionTimeout(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DataprocClusterTimeouts)
//  .virtualClusterConfig(DataprocClusterVirtualClusterConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the cluster, unique within the project and zone. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.gracefulDecommissionTimeout">gracefulDecommissionTimeout</a></code> | <code>java.lang.String</code> | The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#id DataprocCluster#id}. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The list of labels (key/value pairs) to be applied to instances in the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the cluster will exist. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region in which the cluster and associated nodes will be created in. Defaults to global. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.virtualClusterConfig">virtualClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a></code> | virtual_cluster_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the cluster, unique within the project and zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#name DataprocCluster#name}

---

##### `clusterConfig`<sup>Optional</sup> <a name="clusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.clusterConfig"></a>

```java
public DataprocClusterClusterConfig getClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#cluster_config DataprocCluster#cluster_config}

---

##### `gracefulDecommissionTimeout`<sup>Optional</sup> <a name="gracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.gracefulDecommissionTimeout"></a>

```java
public java.lang.String getGracefulDecommissionTimeout();
```

- *Type:* java.lang.String

The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#graceful_decommission_timeout DataprocCluster#graceful_decommission_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#id DataprocCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The list of labels (key/value pairs) to be applied to instances in the cluster.

GCP generates some itself including goog-dataproc-cluster-name which is the name of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#labels DataprocCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the cluster will exist.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#project DataprocCluster#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region in which the cluster and associated nodes will be created in. Defaults to global.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#region DataprocCluster#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.timeouts"></a>

```java
public DataprocClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#timeouts DataprocCluster#timeouts}

---

##### `virtualClusterConfig`<sup>Optional</sup> <a name="virtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterConfig.property.virtualClusterConfig"></a>

```java
public DataprocClusterVirtualClusterConfig getVirtualClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a>

virtual_cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#virtual_cluster_config DataprocCluster#virtual_cluster_config}

---

### DataprocClusterTimeouts <a name="DataprocClusterTimeouts" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterTimeouts;

DataprocClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#create DataprocCluster#create}. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#delete DataprocCluster#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#update DataprocCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#create DataprocCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#delete DataprocCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#update DataprocCluster#update}.

---

### DataprocClusterVirtualClusterConfig <a name="DataprocClusterVirtualClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfig;

DataprocClusterVirtualClusterConfig.builder()
//  .auxiliaryServicesConfig(DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig)
//  .kubernetesClusterConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfig)
//  .stagingBucket(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.auxiliaryServicesConfig">auxiliaryServicesConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a></code> | auxiliary_services_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.kubernetesClusterConfig">kubernetesClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a></code> | kubernetes_cluster_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. |

---

##### `auxiliaryServicesConfig`<sup>Optional</sup> <a name="auxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.auxiliaryServicesConfig"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig getAuxiliaryServicesConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a>

auxiliary_services_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#auxiliary_services_config DataprocCluster#auxiliary_services_config}

---

##### `kubernetesClusterConfig`<sup>Optional</sup> <a name="kubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.kubernetesClusterConfig"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfig getKubernetesClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a>

kubernetes_cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#kubernetes_cluster_config DataprocCluster#kubernetes_cluster_config}

---

##### `stagingBucket`<sup>Optional</sup> <a name="stagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output.

If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#staging_bucket DataprocCluster#staging_bucket}

---

### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig;

DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.builder()
//  .metastoreConfig(DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig)
//  .sparkHistoryServerConfig(DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.property.metastoreConfig">metastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a></code> | metastore_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreConfig`<sup>Optional</sup> <a name="metastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.property.metastoreConfig"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig getMetastoreConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a>

metastore_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#metastore_config DataprocCluster#metastore_config}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig.property.sparkHistoryServerConfig"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#spark_history_server_config DataprocCluster#spark_history_server_config}

---

### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig;

DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig.builder()
//  .dataprocMetastoreService(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig.property.dataprocMetastoreService">dataprocMetastoreService</a></code> | <code>java.lang.String</code> | The Hive Metastore configuration for this workload. |

---

##### `dataprocMetastoreService`<sup>Optional</sup> <a name="dataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig.property.dataprocMetastoreService"></a>

```java
public java.lang.String getDataprocMetastoreService();
```

- *Type:* java.lang.String

The Hive Metastore configuration for this workload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#dataproc_metastore_service DataprocCluster#dataproc_metastore_service}

---

### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig;

DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig.builder()
//  .dataprocCluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#dataproc_cluster DataprocCluster#dataproc_cluster}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig;

DataprocClusterVirtualClusterConfigKubernetesClusterConfig.builder()
    .gkeClusterConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig)
    .kubernetesSoftwareConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig)
//  .kubernetesNamespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.gkeClusterConfig">gkeClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a></code> | gke_cluster_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.kubernetesSoftwareConfig">kubernetesSoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a></code> | kubernetes_software_config block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>java.lang.String</code> | A namespace within the Kubernetes cluster to deploy into. |

---

##### `gkeClusterConfig`<sup>Required</sup> <a name="gkeClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.gkeClusterConfig"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig getGkeClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a>

gke_cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#gke_cluster_config DataprocCluster#gke_cluster_config}

---

##### `kubernetesSoftwareConfig`<sup>Required</sup> <a name="kubernetesSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.kubernetesSoftwareConfig"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig getKubernetesSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a>

kubernetes_software_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#kubernetes_software_config DataprocCluster#kubernetes_software_config}

---

##### `kubernetesNamespace`<sup>Optional</sup> <a name="kubernetesNamespace" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig.property.kubernetesNamespace"></a>

```java
public java.lang.String getKubernetesNamespace();
```

- *Type:* java.lang.String

A namespace within the Kubernetes cluster to deploy into.

If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#kubernetes_namespace DataprocCluster#kubernetes_namespace}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig;

DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.builder()
//  .gkeClusterTarget(java.lang.String)
//  .nodePoolTarget(IResolvable)
//  .nodePoolTarget(java.util.List<DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.property.gkeClusterTarget">gkeClusterTarget</a></code> | <code>java.lang.String</code> | A target GKE cluster to deploy to. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.property.nodePoolTarget">nodePoolTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget</a>></code> | node_pool_target block. |

---

##### `gkeClusterTarget`<sup>Optional</sup> <a name="gkeClusterTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.property.gkeClusterTarget"></a>

```java
public java.lang.String getGkeClusterTarget();
```

- *Type:* java.lang.String

A target GKE cluster to deploy to.

It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#gke_cluster_target DataprocCluster#gke_cluster_target}

---

##### `nodePoolTarget`<sup>Optional</sup> <a name="nodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig.property.nodePoolTarget"></a>

```java
public java.lang.Object getNodePoolTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget</a>>

node_pool_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#node_pool_target DataprocCluster#node_pool_target}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget;

DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.builder()
    .nodePool(java.lang.String)
    .roles(java.util.List<java.lang.String>)
//  .nodePoolConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.nodePool">nodePool</a></code> | <code>java.lang.String</code> | The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{nodePool}'. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | The roles associated with the GKE node pool. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a></code> | node_pool_config block. |

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.nodePool"></a>

```java
public java.lang.String getNodePool();
```

- *Type:* java.lang.String

The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{nodePool}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#node_pool DataprocCluster#node_pool}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

The roles associated with the GKE node pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#roles DataprocCluster#roles}

---

##### `nodePoolConfig`<sup>Optional</sup> <a name="nodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget.property.nodePoolConfig"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig getNodePoolConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#node_pool_config DataprocCluster#node_pool_config}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig;

DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.builder()
    .locations(java.util.List<java.lang.String>)
//  .autoscaling(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling)
//  .config(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | The list of Compute Engine zones where node pool nodes associated with a Dataproc on GKE virtual cluster will be located. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a></code> | config block. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

The list of Compute Engine zones where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#locations DataprocCluster#locations}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.autoscaling"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#autoscaling DataprocCluster#autoscaling}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig.property.config"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#config DataprocCluster#config}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling;

DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.builder()
//  .maxNodeCount(java.lang.Number)
//  .minNodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount. |

---

##### `maxNodeCount`<sup>Optional</sup> <a name="maxNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#max_node_count DataprocCluster#max_node_count}

---

##### `minNodeCount`<sup>Optional</sup> <a name="minNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#min_node_count DataprocCluster#min_node_count}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig;

DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.builder()
//  .localSsdCount(java.lang.Number)
//  .machineType(java.lang.String)
//  .minCpuPlatform(java.lang.String)
//  .preemptible(java.lang.Boolean)
//  .preemptible(IResolvable)
//  .spot(java.lang.Boolean)
//  .spot(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The name of a Compute Engine machine type. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | Minimum CPU platform to be used by this instance. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the nodes are created as preemptible VM instances. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.spot">spot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. |

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#local_ssd_count DataprocCluster#local_ssd_count}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#machine_type DataprocCluster#machine_type}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

Minimum CPU platform to be used by this instance.

The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell" or "Intel Sandy Bridge".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#min_cpu_platform DataprocCluster#min_cpu_platform}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the nodes are created as preemptible VM instances.

Preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#preemptible DataprocCluster#preemptible}

---

##### `spot`<sup>Optional</sup> <a name="spot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig.property.spot"></a>

```java
public java.lang.Object getSpot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#spot DataprocCluster#spot}

---

### DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig;

DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.builder()
    .componentVersion(java.util.Map<java.lang.String, java.lang.String>)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.property.componentVersion">componentVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The components that should be installed in this Dataproc cluster. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The properties to set on daemon config files. Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. |

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.property.componentVersion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getComponentVersion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The components that should be installed in this Dataproc cluster.

The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#component_version DataprocCluster#component_version}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster#properties DataprocCluster#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocClusterClusterConfigAutoscalingConfigOutputReference <a name="DataprocClusterClusterConfigAutoscalingConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference;

new DataprocClusterClusterConfigAutoscalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.policyUriInput">policyUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.policyUri">policyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyUriInput`<sup>Optional</sup> <a name="policyUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.policyUriInput"></a>

```java
public java.lang.String getPolicyUriInput();
```

- *Type:* java.lang.String

---

##### `policyUri`<sup>Required</sup> <a name="policyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.policyUri"></a>

```java
public java.lang.String getPolicyUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigAutoscalingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a>

---


### DataprocClusterClusterConfigDataprocMetricConfigMetricsList <a name="DataprocClusterClusterConfigDataprocMetricConfigMetricsList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList;

new DataprocClusterClusterConfigDataprocMetricConfigMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.get"></a>

```java
public DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics">DataprocClusterClusterConfigDataprocMetricConfigMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics">DataprocClusterClusterConfigDataprocMetricConfigMetrics</a>>

---


### DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference <a name="DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference;

new DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resetMetricOverrides">resetMetricOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricOverrides` <a name="resetMetricOverrides" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.resetMetricOverrides"></a>

```java
public void resetMetricOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricOverridesInput">metricOverridesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricSourceInput">metricSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricOverrides">metricOverrides</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricSource">metricSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics">DataprocClusterClusterConfigDataprocMetricConfigMetrics</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricOverridesInput`<sup>Optional</sup> <a name="metricOverridesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricOverridesInput"></a>

```java
public java.util.List<java.lang.String> getMetricOverridesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricSourceInput`<sup>Optional</sup> <a name="metricSourceInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricSourceInput"></a>

```java
public java.lang.String getMetricSourceInput();
```

- *Type:* java.lang.String

---

##### `metricOverrides`<sup>Required</sup> <a name="metricOverrides" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricOverrides"></a>

```java
public java.util.List<java.lang.String> getMetricOverrides();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricSource`<sup>Required</sup> <a name="metricSource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.metricSource"></a>

```java
public java.lang.String getMetricSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics">DataprocClusterClusterConfigDataprocMetricConfigMetrics</a> OR com.hashicorp.cdktf.IResolvable

---


### DataprocClusterClusterConfigDataprocMetricConfigOutputReference <a name="DataprocClusterClusterConfigDataprocMetricConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference;

new DataprocClusterClusterConfigDataprocMetricConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.putMetrics">putMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetrics` <a name="putMetrics" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.putMetrics"></a>

```java
public void putMetrics(IResolvable OR java.util.List<DataprocClusterClusterConfigDataprocMetricConfigMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.putMetrics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics">DataprocClusterClusterConfigDataprocMetricConfigMetrics</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList">DataprocClusterClusterConfigDataprocMetricConfigMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.metricsInput">metricsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics">DataprocClusterClusterConfigDataprocMetricConfigMetrics</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.metrics"></a>

```java
public DataprocClusterClusterConfigDataprocMetricConfigMetricsList getMetrics();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetricsList">DataprocClusterClusterConfigDataprocMetricConfigMetricsList</a>

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.metricsInput"></a>

```java
public java.lang.Object getMetricsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigMetrics">DataprocClusterClusterConfigDataprocMetricConfigMetrics</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigDataprocMetricConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a>

---


### DataprocClusterClusterConfigEncryptionConfigOutputReference <a name="DataprocClusterClusterConfigEncryptionConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigEncryptionConfigOutputReference;

new DataprocClusterClusterConfigEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a>

---


### DataprocClusterClusterConfigEndpointConfigOutputReference <a name="DataprocClusterClusterConfigEndpointConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigEndpointConfigOutputReference;

new DataprocClusterClusterConfigEndpointConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.httpPorts">httpPorts</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.enableHttpPortAccessInput">enableHttpPortAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.enableHttpPortAccess">enableHttpPortAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpPorts`<sup>Required</sup> <a name="httpPorts" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.httpPorts"></a>

```java
public StringMap getHttpPorts();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `enableHttpPortAccessInput`<sup>Optional</sup> <a name="enableHttpPortAccessInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.enableHttpPortAccessInput"></a>

```java
public java.lang.Object getEnableHttpPortAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttpPortAccess`<sup>Required</sup> <a name="enableHttpPortAccess" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.enableHttpPortAccess"></a>

```java
public java.lang.Object getEnableHttpPortAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigEndpointConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a>

---


### DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference <a name="DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference;

new DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.nodeGroupUriInput">nodeGroupUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.nodeGroupUri">nodeGroupUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeGroupUriInput`<sup>Optional</sup> <a name="nodeGroupUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.nodeGroupUriInput"></a>

```java
public java.lang.String getNodeGroupUriInput();
```

- *Type:* java.lang.String

---

##### `nodeGroupUri`<sup>Required</sup> <a name="nodeGroupUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.nodeGroupUri"></a>

```java
public java.lang.String getNodeGroupUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a>

---


### DataprocClusterClusterConfigGceClusterConfigOutputReference <a name="DataprocClusterClusterConfigGceClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigGceClusterConfigOutputReference;

new DataprocClusterClusterConfigGceClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putNodeGroupAffinity">putNodeGroupAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetInternalIpOnly">resetInternalIpOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetNodeGroupAffinity">resetNodeGroupAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetServiceAccountScopes">resetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeGroupAffinity` <a name="putNodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putNodeGroupAffinity"></a>

```java
public void putNodeGroupAffinity(DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putNodeGroupAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putReservationAffinity"></a>

```java
public void putReservationAffinity(DataprocClusterClusterConfigGceClusterConfigReservationAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a>

---

##### `resetInternalIpOnly` <a name="resetInternalIpOnly" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetInternalIpOnly"></a>

```java
public void resetInternalIpOnly()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNodeGroupAffinity` <a name="resetNodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetNodeGroupAffinity"></a>

```java
public void resetNodeGroupAffinity()
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetReservationAffinity"></a>

```java
public void resetReservationAffinity()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetServiceAccountScopes` <a name="resetServiceAccountScopes" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetServiceAccountScopes"></a>

```java
public void resetServiceAccountScopes()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.nodeGroupAffinity">nodeGroupAffinity</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference">DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalIpOnlyInput">internalIpOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.nodeGroupAffinityInput">nodeGroupAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountScopesInput">serviceAccountScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalIpOnly">internalIpOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeGroupAffinity`<sup>Required</sup> <a name="nodeGroupAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.nodeGroupAffinity"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference getNodeGroupAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference</a>

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.reservationAffinity"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference">DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.shieldedInstanceConfig"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference</a>

---

##### `internalIpOnlyInput`<sup>Optional</sup> <a name="internalIpOnlyInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalIpOnlyInput"></a>

```java
public java.lang.Object getInternalIpOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `nodeGroupAffinityInput`<sup>Optional</sup> <a name="nodeGroupAffinityInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.nodeGroupAffinityInput"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity getNodeGroupAffinityInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity">DataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity</a>

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.reservationAffinityInput"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigReservationAffinity getReservationAffinityInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountScopesInput`<sup>Optional</sup> <a name="serviceAccountScopesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountScopesInput"></a>

```java
public java.util.List<java.lang.String> getServiceAccountScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a>

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `internalIpOnly`<sup>Required</sup> <a name="internalIpOnly" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalIpOnly"></a>

```java
public java.lang.Object getInternalIpOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `serviceAccountScopes`<sup>Required</sup> <a name="serviceAccountScopes" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.serviceAccountScopes"></a>

```java
public java.util.List<java.lang.String> getServiceAccountScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigGceClusterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a>

---


### DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference <a name="DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference;

new DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetConsumeReservationType">resetConsumeReservationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumeReservationType` <a name="resetConsumeReservationType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetConsumeReservationType"></a>

```java
public void resetConsumeReservationType()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.consumeReservationTypeInput">consumeReservationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.consumeReservationType">consumeReservationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumeReservationTypeInput`<sup>Optional</sup> <a name="consumeReservationTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```java
public java.lang.String getConsumeReservationTypeInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.consumeReservationType"></a>

```java
public java.lang.String getConsumeReservationType();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigReservationAffinity">DataprocClusterClusterConfigGceClusterConfigReservationAffinity</a>

---


### DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference <a name="DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference;

new DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```java
public void resetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Object getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```java
public java.lang.Object getEnableVtpmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig">DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig</a>

---


### DataprocClusterClusterConfigInitializationActionList <a name="DataprocClusterClusterConfigInitializationActionList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigInitializationActionList;

new DataprocClusterClusterConfigInitializationActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.get"></a>

```java
public DataprocClusterClusterConfigInitializationActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction">DataprocClusterClusterConfigInitializationAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction">DataprocClusterClusterConfigInitializationAction</a>>

---


### DataprocClusterClusterConfigInitializationActionOutputReference <a name="DataprocClusterClusterConfigInitializationActionOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigInitializationActionOutputReference;

new DataprocClusterClusterConfigInitializationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.resetTimeoutSec"></a>

```java
public void resetTimeoutSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.scriptInput">scriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.timeoutSecInput">timeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction">DataprocClusterClusterConfigInitializationAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.scriptInput"></a>

```java
public java.lang.String getScriptInput();
```

- *Type:* java.lang.String

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.timeoutSecInput"></a>

```java
public java.lang.Number getTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction">DataprocClusterClusterConfigInitializationAction</a> OR com.hashicorp.cdktf.IResolvable

---


### DataprocClusterClusterConfigLifecycleConfigOutputReference <a name="DataprocClusterClusterConfigLifecycleConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigLifecycleConfigOutputReference;

new DataprocClusterClusterConfigLifecycleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resetAutoDeleteTime">resetAutoDeleteTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resetIdleDeleteTtl">resetIdleDeleteTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoDeleteTime` <a name="resetAutoDeleteTime" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resetAutoDeleteTime"></a>

```java
public void resetAutoDeleteTime()
```

##### `resetIdleDeleteTtl` <a name="resetIdleDeleteTtl" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.resetIdleDeleteTtl"></a>

```java
public void resetIdleDeleteTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleStartTime">idleStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.autoDeleteTimeInput">autoDeleteTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleDeleteTtlInput">idleDeleteTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.autoDeleteTime">autoDeleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleDeleteTtl">idleDeleteTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleStartTime`<sup>Required</sup> <a name="idleStartTime" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleStartTime"></a>

```java
public java.lang.String getIdleStartTime();
```

- *Type:* java.lang.String

---

##### `autoDeleteTimeInput`<sup>Optional</sup> <a name="autoDeleteTimeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.autoDeleteTimeInput"></a>

```java
public java.lang.String getAutoDeleteTimeInput();
```

- *Type:* java.lang.String

---

##### `idleDeleteTtlInput`<sup>Optional</sup> <a name="idleDeleteTtlInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleDeleteTtlInput"></a>

```java
public java.lang.String getIdleDeleteTtlInput();
```

- *Type:* java.lang.String

---

##### `autoDeleteTime`<sup>Required</sup> <a name="autoDeleteTime" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.autoDeleteTime"></a>

```java
public java.lang.String getAutoDeleteTime();
```

- *Type:* java.lang.String

---

##### `idleDeleteTtl`<sup>Required</sup> <a name="idleDeleteTtl" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.idleDeleteTtl"></a>

```java
public java.lang.String getIdleDeleteTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigLifecycleConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a>

---


### DataprocClusterClusterConfigMasterConfigAcceleratorsList <a name="DataprocClusterClusterConfigMasterConfigAcceleratorsList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList;

new DataprocClusterClusterConfigMasterConfigAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.get"></a>

```java
public DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators">DataprocClusterClusterConfigMasterConfigAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators">DataprocClusterClusterConfigMasterConfigAccelerators</a>>

---


### DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference <a name="DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference;

new DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators">DataprocClusterClusterConfigMasterConfigAccelerators</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators">DataprocClusterClusterConfigMasterConfigAccelerators</a> OR com.hashicorp.cdktf.IResolvable

---


### DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference <a name="DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference;

new DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetBootDiskType">resetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetNumLocalSsds">resetNumLocalSsds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetBootDiskSizeGb"></a>

```java
public void resetBootDiskSizeGb()
```

##### `resetBootDiskType` <a name="resetBootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetBootDiskType"></a>

```java
public void resetBootDiskType()
```

##### `resetNumLocalSsds` <a name="resetNumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.resetNumLocalSsds"></a>

```java
public void resetNumLocalSsds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskTypeInput">bootDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.numLocalSsdsInput">numLocalSsdsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.numLocalSsds">numLocalSsds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskSizeGbInput"></a>

```java
public java.lang.Number getBootDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskTypeInput`<sup>Optional</sup> <a name="bootDiskTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskTypeInput"></a>

```java
public java.lang.String getBootDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `numLocalSsdsInput`<sup>Optional</sup> <a name="numLocalSsdsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.numLocalSsdsInput"></a>

```java
public java.lang.Number getNumLocalSsdsInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `bootDiskType`<sup>Required</sup> <a name="bootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

---

##### `numLocalSsds`<sup>Required</sup> <a name="numLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.numLocalSsds"></a>

```java
public java.lang.Number getNumLocalSsds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigMasterConfigDiskConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a>

---


### DataprocClusterClusterConfigMasterConfigOutputReference <a name="DataprocClusterClusterConfigMasterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigMasterConfigOutputReference;

new DataprocClusterClusterConfigMasterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putAccelerators">putAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putDiskConfig">putDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetDiskConfig">resetDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetNumInstances">resetNumInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccelerators` <a name="putAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putAccelerators"></a>

```java
public void putAccelerators(IResolvable OR java.util.List<DataprocClusterClusterConfigMasterConfigAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putAccelerators.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators">DataprocClusterClusterConfigMasterConfigAccelerators</a>>

---

##### `putDiskConfig` <a name="putDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putDiskConfig"></a>

```java
public void putDiskConfig(DataprocClusterClusterConfigMasterConfigDiskConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.putDiskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetAccelerators"></a>

```java
public void resetAccelerators()
```

##### `resetDiskConfig` <a name="resetDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetDiskConfig"></a>

```java
public void resetDiskConfig()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetMinCpuPlatform"></a>

```java
public void resetMinCpuPlatform()
```

##### `resetNumInstances` <a name="resetNumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.resetNumInstances"></a>

```java
public void resetNumInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList">DataprocClusterClusterConfigMasterConfigAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.diskConfig">diskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference">DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.instanceNames">instanceNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.acceleratorsInput">acceleratorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators">DataprocClusterClusterConfigMasterConfigAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.diskConfigInput">diskConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.numInstancesInput">numInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.numInstances">numInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.accelerators"></a>

```java
public DataprocClusterClusterConfigMasterConfigAcceleratorsList getAccelerators();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAcceleratorsList">DataprocClusterClusterConfigMasterConfigAcceleratorsList</a>

---

##### `diskConfig`<sup>Required</sup> <a name="diskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.diskConfig"></a>

```java
public DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference getDiskConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference">DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference</a>

---

##### `instanceNames`<sup>Required</sup> <a name="instanceNames" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.instanceNames"></a>

```java
public java.util.List<java.lang.String> getInstanceNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.acceleratorsInput"></a>

```java
public java.lang.Object getAcceleratorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigAccelerators">DataprocClusterClusterConfigMasterConfigAccelerators</a>>

---

##### `diskConfigInput`<sup>Optional</sup> <a name="diskConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.diskConfigInput"></a>

```java
public DataprocClusterClusterConfigMasterConfigDiskConfig getDiskConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigDiskConfig">DataprocClusterClusterConfigMasterConfigDiskConfig</a>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.minCpuPlatformInput"></a>

```java
public java.lang.String getMinCpuPlatformInput();
```

- *Type:* java.lang.String

---

##### `numInstancesInput`<sup>Optional</sup> <a name="numInstancesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.numInstancesInput"></a>

```java
public java.lang.Number getNumInstancesInput();
```

- *Type:* java.lang.Number

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `numInstances`<sup>Required</sup> <a name="numInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.numInstances"></a>

```java
public java.lang.Number getNumInstances();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigMasterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a>

---


### DataprocClusterClusterConfigMetastoreConfigOutputReference <a name="DataprocClusterClusterConfigMetastoreConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigMetastoreConfigOutputReference;

new DataprocClusterClusterConfigMetastoreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.dataprocMetastoreServiceInput">dataprocMetastoreServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.dataprocMetastoreService">dataprocMetastoreService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataprocMetastoreServiceInput`<sup>Optional</sup> <a name="dataprocMetastoreServiceInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.dataprocMetastoreServiceInput"></a>

```java
public java.lang.String getDataprocMetastoreServiceInput();
```

- *Type:* java.lang.String

---

##### `dataprocMetastoreService`<sup>Required</sup> <a name="dataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.dataprocMetastoreService"></a>

```java
public java.lang.String getDataprocMetastoreService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigMetastoreConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a>

---


### DataprocClusterClusterConfigOutputReference <a name="DataprocClusterClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigOutputReference;

new DataprocClusterClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putAutoscalingConfig">putAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putDataprocMetricConfig">putDataprocMetricConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEndpointConfig">putEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putGceClusterConfig">putGceClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putInitializationAction">putInitializationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putLifecycleConfig">putLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMasterConfig">putMasterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMetastoreConfig">putMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putPreemptibleWorkerConfig">putPreemptibleWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSecurityConfig">putSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSoftwareConfig">putSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putWorkerConfig">putWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetAutoscalingConfig">resetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetDataprocMetricConfig">resetDataprocMetricConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetEndpointConfig">resetEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetGceClusterConfig">resetGceClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetInitializationAction">resetInitializationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetLifecycleConfig">resetLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetMasterConfig">resetMasterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetMetastoreConfig">resetMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetPreemptibleWorkerConfig">resetPreemptibleWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetSecurityConfig">resetSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetSoftwareConfig">resetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetStagingBucket">resetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetTempBucket">resetTempBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetWorkerConfig">resetWorkerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingConfig` <a name="putAutoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putAutoscalingConfig"></a>

```java
public void putAutoscalingConfig(DataprocClusterClusterConfigAutoscalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a>

---

##### `putDataprocMetricConfig` <a name="putDataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putDataprocMetricConfig"></a>

```java
public void putDataprocMetricConfig(DataprocClusterClusterConfigDataprocMetricConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putDataprocMetricConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(DataprocClusterClusterConfigEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a>

---

##### `putEndpointConfig` <a name="putEndpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEndpointConfig"></a>

```java
public void putEndpointConfig(DataprocClusterClusterConfigEndpointConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a>

---

##### `putGceClusterConfig` <a name="putGceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putGceClusterConfig"></a>

```java
public void putGceClusterConfig(DataprocClusterClusterConfigGceClusterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putGceClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a>

---

##### `putInitializationAction` <a name="putInitializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putInitializationAction"></a>

```java
public void putInitializationAction(IResolvable OR java.util.List<DataprocClusterClusterConfigInitializationAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putInitializationAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction">DataprocClusterClusterConfigInitializationAction</a>>

---

##### `putLifecycleConfig` <a name="putLifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putLifecycleConfig"></a>

```java
public void putLifecycleConfig(DataprocClusterClusterConfigLifecycleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putLifecycleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a>

---

##### `putMasterConfig` <a name="putMasterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMasterConfig"></a>

```java
public void putMasterConfig(DataprocClusterClusterConfigMasterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMasterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a>

---

##### `putMetastoreConfig` <a name="putMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMetastoreConfig"></a>

```java
public void putMetastoreConfig(DataprocClusterClusterConfigMetastoreConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putMetastoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a>

---

##### `putPreemptibleWorkerConfig` <a name="putPreemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putPreemptibleWorkerConfig"></a>

```java
public void putPreemptibleWorkerConfig(DataprocClusterClusterConfigPreemptibleWorkerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putPreemptibleWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a>

---

##### `putSecurityConfig` <a name="putSecurityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSecurityConfig"></a>

```java
public void putSecurityConfig(DataprocClusterClusterConfigSecurityConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a>

---

##### `putSoftwareConfig` <a name="putSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSoftwareConfig"></a>

```java
public void putSoftwareConfig(DataprocClusterClusterConfigSoftwareConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a>

---

##### `putWorkerConfig` <a name="putWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putWorkerConfig"></a>

```java
public void putWorkerConfig(DataprocClusterClusterConfigWorkerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a>

---

##### `resetAutoscalingConfig` <a name="resetAutoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetAutoscalingConfig"></a>

```java
public void resetAutoscalingConfig()
```

##### `resetDataprocMetricConfig` <a name="resetDataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetDataprocMetricConfig"></a>

```java
public void resetDataprocMetricConfig()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetEndpointConfig` <a name="resetEndpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetEndpointConfig"></a>

```java
public void resetEndpointConfig()
```

##### `resetGceClusterConfig` <a name="resetGceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetGceClusterConfig"></a>

```java
public void resetGceClusterConfig()
```

##### `resetInitializationAction` <a name="resetInitializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetInitializationAction"></a>

```java
public void resetInitializationAction()
```

##### `resetLifecycleConfig` <a name="resetLifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetLifecycleConfig"></a>

```java
public void resetLifecycleConfig()
```

##### `resetMasterConfig` <a name="resetMasterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetMasterConfig"></a>

```java
public void resetMasterConfig()
```

##### `resetMetastoreConfig` <a name="resetMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetMetastoreConfig"></a>

```java
public void resetMetastoreConfig()
```

##### `resetPreemptibleWorkerConfig` <a name="resetPreemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetPreemptibleWorkerConfig"></a>

```java
public void resetPreemptibleWorkerConfig()
```

##### `resetSecurityConfig` <a name="resetSecurityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetSecurityConfig"></a>

```java
public void resetSecurityConfig()
```

##### `resetSoftwareConfig` <a name="resetSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetSoftwareConfig"></a>

```java
public void resetSoftwareConfig()
```

##### `resetStagingBucket` <a name="resetStagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetStagingBucket"></a>

```java
public void resetStagingBucket()
```

##### `resetTempBucket` <a name="resetTempBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetTempBucket"></a>

```java
public void resetTempBucket()
```

##### `resetWorkerConfig` <a name="resetWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.resetWorkerConfig"></a>

```java
public void resetWorkerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference">DataprocClusterClusterConfigAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.dataprocMetricConfig">dataprocMetricConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference">DataprocClusterClusterConfigDataprocMetricConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference">DataprocClusterClusterConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.endpointConfig">endpointConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference">DataprocClusterClusterConfigEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.gceClusterConfig">gceClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference">DataprocClusterClusterConfigGceClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.initializationAction">initializationAction</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList">DataprocClusterClusterConfigInitializationActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.lifecycleConfig">lifecycleConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference">DataprocClusterClusterConfigLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.masterConfig">masterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference">DataprocClusterClusterConfigMasterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.metastoreConfig">metastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference">DataprocClusterClusterConfigMetastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.preemptibleWorkerConfig">preemptibleWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference">DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.securityConfig">securityConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference">DataprocClusterClusterConfigSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference">DataprocClusterClusterConfigSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference">DataprocClusterClusterConfigWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.autoscalingConfigInput">autoscalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.dataprocMetricConfigInput">dataprocMetricConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.endpointConfigInput">endpointConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.gceClusterConfigInput">gceClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.initializationActionInput">initializationActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction">DataprocClusterClusterConfigInitializationAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.lifecycleConfigInput">lifecycleConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.masterConfigInput">masterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.metastoreConfigInput">metastoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.preemptibleWorkerConfigInput">preemptibleWorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.securityConfigInput">securityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.softwareConfigInput">softwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.stagingBucketInput">stagingBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.tempBucketInput">tempBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.workerConfigInput">workerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.tempBucket">tempBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.autoscalingConfig"></a>

```java
public DataprocClusterClusterConfigAutoscalingConfigOutputReference getAutoscalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfigOutputReference">DataprocClusterClusterConfigAutoscalingConfigOutputReference</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `dataprocMetricConfig`<sup>Required</sup> <a name="dataprocMetricConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.dataprocMetricConfig"></a>

```java
public DataprocClusterClusterConfigDataprocMetricConfigOutputReference getDataprocMetricConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfigOutputReference">DataprocClusterClusterConfigDataprocMetricConfigOutputReference</a>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.encryptionConfig"></a>

```java
public DataprocClusterClusterConfigEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfigOutputReference">DataprocClusterClusterConfigEncryptionConfigOutputReference</a>

---

##### `endpointConfig`<sup>Required</sup> <a name="endpointConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.endpointConfig"></a>

```java
public DataprocClusterClusterConfigEndpointConfigOutputReference getEndpointConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfigOutputReference">DataprocClusterClusterConfigEndpointConfigOutputReference</a>

---

##### `gceClusterConfig`<sup>Required</sup> <a name="gceClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.gceClusterConfig"></a>

```java
public DataprocClusterClusterConfigGceClusterConfigOutputReference getGceClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfigOutputReference">DataprocClusterClusterConfigGceClusterConfigOutputReference</a>

---

##### `initializationAction`<sup>Required</sup> <a name="initializationAction" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.initializationAction"></a>

```java
public DataprocClusterClusterConfigInitializationActionList getInitializationAction();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationActionList">DataprocClusterClusterConfigInitializationActionList</a>

---

##### `lifecycleConfig`<sup>Required</sup> <a name="lifecycleConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.lifecycleConfig"></a>

```java
public DataprocClusterClusterConfigLifecycleConfigOutputReference getLifecycleConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfigOutputReference">DataprocClusterClusterConfigLifecycleConfigOutputReference</a>

---

##### `masterConfig`<sup>Required</sup> <a name="masterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.masterConfig"></a>

```java
public DataprocClusterClusterConfigMasterConfigOutputReference getMasterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfigOutputReference">DataprocClusterClusterConfigMasterConfigOutputReference</a>

---

##### `metastoreConfig`<sup>Required</sup> <a name="metastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.metastoreConfig"></a>

```java
public DataprocClusterClusterConfigMetastoreConfigOutputReference getMetastoreConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfigOutputReference">DataprocClusterClusterConfigMetastoreConfigOutputReference</a>

---

##### `preemptibleWorkerConfig`<sup>Required</sup> <a name="preemptibleWorkerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.preemptibleWorkerConfig"></a>

```java
public DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference getPreemptibleWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference">DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference</a>

---

##### `securityConfig`<sup>Required</sup> <a name="securityConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.securityConfig"></a>

```java
public DataprocClusterClusterConfigSecurityConfigOutputReference getSecurityConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference">DataprocClusterClusterConfigSecurityConfigOutputReference</a>

---

##### `softwareConfig`<sup>Required</sup> <a name="softwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.softwareConfig"></a>

```java
public DataprocClusterClusterConfigSoftwareConfigOutputReference getSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference">DataprocClusterClusterConfigSoftwareConfigOutputReference</a>

---

##### `workerConfig`<sup>Required</sup> <a name="workerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.workerConfig"></a>

```java
public DataprocClusterClusterConfigWorkerConfigOutputReference getWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference">DataprocClusterClusterConfigWorkerConfigOutputReference</a>

---

##### `autoscalingConfigInput`<sup>Optional</sup> <a name="autoscalingConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.autoscalingConfigInput"></a>

```java
public DataprocClusterClusterConfigAutoscalingConfig getAutoscalingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigAutoscalingConfig">DataprocClusterClusterConfigAutoscalingConfig</a>

---

##### `dataprocMetricConfigInput`<sup>Optional</sup> <a name="dataprocMetricConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.dataprocMetricConfigInput"></a>

```java
public DataprocClusterClusterConfigDataprocMetricConfig getDataprocMetricConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigDataprocMetricConfig">DataprocClusterClusterConfigDataprocMetricConfig</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.encryptionConfigInput"></a>

```java
public DataprocClusterClusterConfigEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEncryptionConfig">DataprocClusterClusterConfigEncryptionConfig</a>

---

##### `endpointConfigInput`<sup>Optional</sup> <a name="endpointConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.endpointConfigInput"></a>

```java
public DataprocClusterClusterConfigEndpointConfig getEndpointConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigEndpointConfig">DataprocClusterClusterConfigEndpointConfig</a>

---

##### `gceClusterConfigInput`<sup>Optional</sup> <a name="gceClusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.gceClusterConfigInput"></a>

```java
public DataprocClusterClusterConfigGceClusterConfig getGceClusterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigGceClusterConfig">DataprocClusterClusterConfigGceClusterConfig</a>

---

##### `initializationActionInput`<sup>Optional</sup> <a name="initializationActionInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.initializationActionInput"></a>

```java
public java.lang.Object getInitializationActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigInitializationAction">DataprocClusterClusterConfigInitializationAction</a>>

---

##### `lifecycleConfigInput`<sup>Optional</sup> <a name="lifecycleConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.lifecycleConfigInput"></a>

```java
public DataprocClusterClusterConfigLifecycleConfig getLifecycleConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigLifecycleConfig">DataprocClusterClusterConfigLifecycleConfig</a>

---

##### `masterConfigInput`<sup>Optional</sup> <a name="masterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.masterConfigInput"></a>

```java
public DataprocClusterClusterConfigMasterConfig getMasterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMasterConfig">DataprocClusterClusterConfigMasterConfig</a>

---

##### `metastoreConfigInput`<sup>Optional</sup> <a name="metastoreConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.metastoreConfigInput"></a>

```java
public DataprocClusterClusterConfigMetastoreConfig getMetastoreConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigMetastoreConfig">DataprocClusterClusterConfigMetastoreConfig</a>

---

##### `preemptibleWorkerConfigInput`<sup>Optional</sup> <a name="preemptibleWorkerConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.preemptibleWorkerConfigInput"></a>

```java
public DataprocClusterClusterConfigPreemptibleWorkerConfig getPreemptibleWorkerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a>

---

##### `securityConfigInput`<sup>Optional</sup> <a name="securityConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.securityConfigInput"></a>

```java
public DataprocClusterClusterConfigSecurityConfig getSecurityConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a>

---

##### `softwareConfigInput`<sup>Optional</sup> <a name="softwareConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.softwareConfigInput"></a>

```java
public DataprocClusterClusterConfigSoftwareConfig getSoftwareConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a>

---

##### `stagingBucketInput`<sup>Optional</sup> <a name="stagingBucketInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.stagingBucketInput"></a>

```java
public java.lang.String getStagingBucketInput();
```

- *Type:* java.lang.String

---

##### `tempBucketInput`<sup>Optional</sup> <a name="tempBucketInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.tempBucketInput"></a>

```java
public java.lang.String getTempBucketInput();
```

- *Type:* java.lang.String

---

##### `workerConfigInput`<sup>Optional</sup> <a name="workerConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.workerConfigInput"></a>

```java
public DataprocClusterClusterConfigWorkerConfig getWorkerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a>

---

##### `stagingBucket`<sup>Required</sup> <a name="stagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

---

##### `tempBucket`<sup>Required</sup> <a name="tempBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.tempBucket"></a>

```java
public java.lang.String getTempBucket();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfig">DataprocClusterClusterConfig</a>

---


### DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference <a name="DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference;

new DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetBootDiskType">resetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetNumLocalSsds">resetNumLocalSsds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetBootDiskSizeGb"></a>

```java
public void resetBootDiskSizeGb()
```

##### `resetBootDiskType` <a name="resetBootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetBootDiskType"></a>

```java
public void resetBootDiskType()
```

##### `resetNumLocalSsds` <a name="resetNumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.resetNumLocalSsds"></a>

```java
public void resetNumLocalSsds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskTypeInput">bootDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.numLocalSsdsInput">numLocalSsdsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.numLocalSsds">numLocalSsds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGbInput"></a>

```java
public java.lang.Number getBootDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskTypeInput`<sup>Optional</sup> <a name="bootDiskTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskTypeInput"></a>

```java
public java.lang.String getBootDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `numLocalSsdsInput`<sup>Optional</sup> <a name="numLocalSsdsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.numLocalSsdsInput"></a>

```java
public java.lang.Number getNumLocalSsdsInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `bootDiskType`<sup>Required</sup> <a name="bootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

---

##### `numLocalSsds`<sup>Required</sup> <a name="numLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.numLocalSsds"></a>

```java
public java.lang.Number getNumLocalSsds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a>

---


### DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference <a name="DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference;

new DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.putDiskConfig">putDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetDiskConfig">resetDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetNumInstances">resetNumInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetPreemptibility">resetPreemptibility</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskConfig` <a name="putDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.putDiskConfig"></a>

```java
public void putDiskConfig(DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.putDiskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a>

---

##### `resetDiskConfig` <a name="resetDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetDiskConfig"></a>

```java
public void resetDiskConfig()
```

##### `resetNumInstances` <a name="resetNumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetNumInstances"></a>

```java
public void resetNumInstances()
```

##### `resetPreemptibility` <a name="resetPreemptibility" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.resetPreemptibility"></a>

```java
public void resetPreemptibility()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.diskConfig">diskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.instanceNames">instanceNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.diskConfigInput">diskConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.numInstancesInput">numInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.preemptibilityInput">preemptibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.numInstances">numInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.preemptibility">preemptibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskConfig`<sup>Required</sup> <a name="diskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.diskConfig"></a>

```java
public DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference getDiskConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference</a>

---

##### `instanceNames`<sup>Required</sup> <a name="instanceNames" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.instanceNames"></a>

```java
public java.util.List<java.lang.String> getInstanceNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `diskConfigInput`<sup>Optional</sup> <a name="diskConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.diskConfigInput"></a>

```java
public DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig getDiskConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig">DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig</a>

---

##### `numInstancesInput`<sup>Optional</sup> <a name="numInstancesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.numInstancesInput"></a>

```java
public java.lang.Number getNumInstancesInput();
```

- *Type:* java.lang.Number

---

##### `preemptibilityInput`<sup>Optional</sup> <a name="preemptibilityInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.preemptibilityInput"></a>

```java
public java.lang.String getPreemptibilityInput();
```

- *Type:* java.lang.String

---

##### `numInstances`<sup>Required</sup> <a name="numInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.numInstances"></a>

```java
public java.lang.Number getNumInstances();
```

- *Type:* java.lang.Number

---

##### `preemptibility`<sup>Required</sup> <a name="preemptibility" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.preemptibility"></a>

```java
public java.lang.String getPreemptibility();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigPreemptibleWorkerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigPreemptibleWorkerConfig">DataprocClusterClusterConfigPreemptibleWorkerConfig</a>

---


### DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference <a name="DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference;

new DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustAdminServer">resetCrossRealmTrustAdminServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustKdc">resetCrossRealmTrustKdc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustRealm">resetCrossRealmTrustRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustSharedPasswordUri">resetCrossRealmTrustSharedPasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetEnableKerberos">resetEnableKerberos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKdcDbKeyUri">resetKdcDbKeyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeyPasswordUri">resetKeyPasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeystorePasswordUri">resetKeystorePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeystoreUri">resetKeystoreUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetRealm">resetRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTgtLifetimeHours">resetTgtLifetimeHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTruststorePasswordUri">resetTruststorePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTruststoreUri">resetTruststoreUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrossRealmTrustAdminServer` <a name="resetCrossRealmTrustAdminServer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustAdminServer"></a>

```java
public void resetCrossRealmTrustAdminServer()
```

##### `resetCrossRealmTrustKdc` <a name="resetCrossRealmTrustKdc" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustKdc"></a>

```java
public void resetCrossRealmTrustKdc()
```

##### `resetCrossRealmTrustRealm` <a name="resetCrossRealmTrustRealm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustRealm"></a>

```java
public void resetCrossRealmTrustRealm()
```

##### `resetCrossRealmTrustSharedPasswordUri` <a name="resetCrossRealmTrustSharedPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetCrossRealmTrustSharedPasswordUri"></a>

```java
public void resetCrossRealmTrustSharedPasswordUri()
```

##### `resetEnableKerberos` <a name="resetEnableKerberos" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetEnableKerberos"></a>

```java
public void resetEnableKerberos()
```

##### `resetKdcDbKeyUri` <a name="resetKdcDbKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKdcDbKeyUri"></a>

```java
public void resetKdcDbKeyUri()
```

##### `resetKeyPasswordUri` <a name="resetKeyPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeyPasswordUri"></a>

```java
public void resetKeyPasswordUri()
```

##### `resetKeystorePasswordUri` <a name="resetKeystorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeystorePasswordUri"></a>

```java
public void resetKeystorePasswordUri()
```

##### `resetKeystoreUri` <a name="resetKeystoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetKeystoreUri"></a>

```java
public void resetKeystoreUri()
```

##### `resetRealm` <a name="resetRealm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetRealm"></a>

```java
public void resetRealm()
```

##### `resetTgtLifetimeHours` <a name="resetTgtLifetimeHours" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTgtLifetimeHours"></a>

```java
public void resetTgtLifetimeHours()
```

##### `resetTruststorePasswordUri` <a name="resetTruststorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTruststorePasswordUri"></a>

```java
public void resetTruststorePasswordUri()
```

##### `resetTruststoreUri` <a name="resetTruststoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.resetTruststoreUri"></a>

```java
public void resetTruststoreUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustAdminServerInput">crossRealmTrustAdminServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustKdcInput">crossRealmTrustKdcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustRealmInput">crossRealmTrustRealmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustSharedPasswordUriInput">crossRealmTrustSharedPasswordUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.enableKerberosInput">enableKerberosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kdcDbKeyUriInput">kdcDbKeyUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keyPasswordUriInput">keyPasswordUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystorePasswordUriInput">keystorePasswordUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystoreUriInput">keystoreUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kmsKeyUriInput">kmsKeyUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.realmInput">realmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.rootPrincipalPasswordUriInput">rootPrincipalPasswordUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.tgtLifetimeHoursInput">tgtLifetimeHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststorePasswordUriInput">truststorePasswordUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststoreUriInput">truststoreUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustAdminServer">crossRealmTrustAdminServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustKdc">crossRealmTrustKdc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustRealm">crossRealmTrustRealm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustSharedPasswordUri">crossRealmTrustSharedPasswordUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.enableKerberos">enableKerberos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kdcDbKeyUri">kdcDbKeyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keyPasswordUri">keyPasswordUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystorePasswordUri">keystorePasswordUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystoreUri">keystoreUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kmsKeyUri">kmsKeyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.realm">realm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.rootPrincipalPasswordUri">rootPrincipalPasswordUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.tgtLifetimeHours">tgtLifetimeHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststorePasswordUri">truststorePasswordUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststoreUri">truststoreUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustAdminServerInput`<sup>Optional</sup> <a name="crossRealmTrustAdminServerInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustAdminServerInput"></a>

```java
public java.lang.String getCrossRealmTrustAdminServerInput();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustKdcInput`<sup>Optional</sup> <a name="crossRealmTrustKdcInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustKdcInput"></a>

```java
public java.lang.String getCrossRealmTrustKdcInput();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustRealmInput`<sup>Optional</sup> <a name="crossRealmTrustRealmInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustRealmInput"></a>

```java
public java.lang.String getCrossRealmTrustRealmInput();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustSharedPasswordUriInput`<sup>Optional</sup> <a name="crossRealmTrustSharedPasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustSharedPasswordUriInput"></a>

```java
public java.lang.String getCrossRealmTrustSharedPasswordUriInput();
```

- *Type:* java.lang.String

---

##### `enableKerberosInput`<sup>Optional</sup> <a name="enableKerberosInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.enableKerberosInput"></a>

```java
public java.lang.Object getEnableKerberosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kdcDbKeyUriInput`<sup>Optional</sup> <a name="kdcDbKeyUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kdcDbKeyUriInput"></a>

```java
public java.lang.String getKdcDbKeyUriInput();
```

- *Type:* java.lang.String

---

##### `keyPasswordUriInput`<sup>Optional</sup> <a name="keyPasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keyPasswordUriInput"></a>

```java
public java.lang.String getKeyPasswordUriInput();
```

- *Type:* java.lang.String

---

##### `keystorePasswordUriInput`<sup>Optional</sup> <a name="keystorePasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystorePasswordUriInput"></a>

```java
public java.lang.String getKeystorePasswordUriInput();
```

- *Type:* java.lang.String

---

##### `keystoreUriInput`<sup>Optional</sup> <a name="keystoreUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystoreUriInput"></a>

```java
public java.lang.String getKeystoreUriInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyUriInput`<sup>Optional</sup> <a name="kmsKeyUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kmsKeyUriInput"></a>

```java
public java.lang.String getKmsKeyUriInput();
```

- *Type:* java.lang.String

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.realmInput"></a>

```java
public java.lang.String getRealmInput();
```

- *Type:* java.lang.String

---

##### `rootPrincipalPasswordUriInput`<sup>Optional</sup> <a name="rootPrincipalPasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.rootPrincipalPasswordUriInput"></a>

```java
public java.lang.String getRootPrincipalPasswordUriInput();
```

- *Type:* java.lang.String

---

##### `tgtLifetimeHoursInput`<sup>Optional</sup> <a name="tgtLifetimeHoursInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.tgtLifetimeHoursInput"></a>

```java
public java.lang.Number getTgtLifetimeHoursInput();
```

- *Type:* java.lang.Number

---

##### `truststorePasswordUriInput`<sup>Optional</sup> <a name="truststorePasswordUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststorePasswordUriInput"></a>

```java
public java.lang.String getTruststorePasswordUriInput();
```

- *Type:* java.lang.String

---

##### `truststoreUriInput`<sup>Optional</sup> <a name="truststoreUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststoreUriInput"></a>

```java
public java.lang.String getTruststoreUriInput();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustAdminServer`<sup>Required</sup> <a name="crossRealmTrustAdminServer" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustAdminServer"></a>

```java
public java.lang.String getCrossRealmTrustAdminServer();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustKdc`<sup>Required</sup> <a name="crossRealmTrustKdc" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustKdc"></a>

```java
public java.lang.String getCrossRealmTrustKdc();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustRealm`<sup>Required</sup> <a name="crossRealmTrustRealm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustRealm"></a>

```java
public java.lang.String getCrossRealmTrustRealm();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustSharedPasswordUri`<sup>Required</sup> <a name="crossRealmTrustSharedPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.crossRealmTrustSharedPasswordUri"></a>

```java
public java.lang.String getCrossRealmTrustSharedPasswordUri();
```

- *Type:* java.lang.String

---

##### `enableKerberos`<sup>Required</sup> <a name="enableKerberos" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.enableKerberos"></a>

```java
public java.lang.Object getEnableKerberos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kdcDbKeyUri`<sup>Required</sup> <a name="kdcDbKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kdcDbKeyUri"></a>

```java
public java.lang.String getKdcDbKeyUri();
```

- *Type:* java.lang.String

---

##### `keyPasswordUri`<sup>Required</sup> <a name="keyPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keyPasswordUri"></a>

```java
public java.lang.String getKeyPasswordUri();
```

- *Type:* java.lang.String

---

##### `keystorePasswordUri`<sup>Required</sup> <a name="keystorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystorePasswordUri"></a>

```java
public java.lang.String getKeystorePasswordUri();
```

- *Type:* java.lang.String

---

##### `keystoreUri`<sup>Required</sup> <a name="keystoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.keystoreUri"></a>

```java
public java.lang.String getKeystoreUri();
```

- *Type:* java.lang.String

---

##### `kmsKeyUri`<sup>Required</sup> <a name="kmsKeyUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.kmsKeyUri"></a>

```java
public java.lang.String getKmsKeyUri();
```

- *Type:* java.lang.String

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

---

##### `rootPrincipalPasswordUri`<sup>Required</sup> <a name="rootPrincipalPasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.rootPrincipalPasswordUri"></a>

```java
public java.lang.String getRootPrincipalPasswordUri();
```

- *Type:* java.lang.String

---

##### `tgtLifetimeHours`<sup>Required</sup> <a name="tgtLifetimeHours" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.tgtLifetimeHours"></a>

```java
public java.lang.Number getTgtLifetimeHours();
```

- *Type:* java.lang.Number

---

##### `truststorePasswordUri`<sup>Required</sup> <a name="truststorePasswordUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststorePasswordUri"></a>

```java
public java.lang.String getTruststorePasswordUri();
```

- *Type:* java.lang.String

---

##### `truststoreUri`<sup>Required</sup> <a name="truststoreUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.truststoreUri"></a>

```java
public java.lang.String getTruststoreUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigSecurityConfigKerberosConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a>

---


### DataprocClusterClusterConfigSecurityConfigOutputReference <a name="DataprocClusterClusterConfigSecurityConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigSecurityConfigOutputReference;

new DataprocClusterClusterConfigSecurityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.putKerberosConfig">putKerberosConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKerberosConfig` <a name="putKerberosConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.putKerberosConfig"></a>

```java
public void putKerberosConfig(DataprocClusterClusterConfigSecurityConfigKerberosConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.putKerberosConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference">DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.kerberosConfigInput">kerberosConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kerberosConfig`<sup>Required</sup> <a name="kerberosConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.kerberosConfig"></a>

```java
public DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference getKerberosConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference">DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference</a>

---

##### `kerberosConfigInput`<sup>Optional</sup> <a name="kerberosConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.kerberosConfigInput"></a>

```java
public DataprocClusterClusterConfigSecurityConfigKerberosConfig getKerberosConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigKerberosConfig">DataprocClusterClusterConfigSecurityConfigKerberosConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigSecurityConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSecurityConfig">DataprocClusterClusterConfigSecurityConfig</a>

---


### DataprocClusterClusterConfigSoftwareConfigOutputReference <a name="DataprocClusterClusterConfigSoftwareConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigSoftwareConfigOutputReference;

new DataprocClusterClusterConfigSoftwareConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetImageVersion">resetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetOptionalComponents">resetOptionalComponents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetOverrideProperties">resetOverrideProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageVersion` <a name="resetImageVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetImageVersion"></a>

```java
public void resetImageVersion()
```

##### `resetOptionalComponents` <a name="resetOptionalComponents" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetOptionalComponents"></a>

```java
public void resetOptionalComponents()
```

##### `resetOverrideProperties` <a name="resetOverrideProperties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.resetOverrideProperties"></a>

```java
public void resetOverrideProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.properties">properties</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.imageVersionInput">imageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.optionalComponentsInput">optionalComponentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.overridePropertiesInput">overridePropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.optionalComponents">optionalComponents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.overrideProperties">overrideProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.properties"></a>

```java
public StringMap getProperties();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.imageVersionInput"></a>

```java
public java.lang.String getImageVersionInput();
```

- *Type:* java.lang.String

---

##### `optionalComponentsInput`<sup>Optional</sup> <a name="optionalComponentsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.optionalComponentsInput"></a>

```java
public java.util.List<java.lang.String> getOptionalComponentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `overridePropertiesInput`<sup>Optional</sup> <a name="overridePropertiesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.overridePropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOverridePropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

---

##### `optionalComponents`<sup>Required</sup> <a name="optionalComponents" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.optionalComponents"></a>

```java
public java.util.List<java.lang.String> getOptionalComponents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `overrideProperties`<sup>Required</sup> <a name="overrideProperties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.overrideProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOverrideProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigSoftwareConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigSoftwareConfig">DataprocClusterClusterConfigSoftwareConfig</a>

---


### DataprocClusterClusterConfigWorkerConfigAcceleratorsList <a name="DataprocClusterClusterConfigWorkerConfigAcceleratorsList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList;

new DataprocClusterClusterConfigWorkerConfigAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.get"></a>

```java
public DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators">DataprocClusterClusterConfigWorkerConfigAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators">DataprocClusterClusterConfigWorkerConfigAccelerators</a>>

---


### DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference <a name="DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference;

new DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators">DataprocClusterClusterConfigWorkerConfigAccelerators</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators">DataprocClusterClusterConfigWorkerConfigAccelerators</a> OR com.hashicorp.cdktf.IResolvable

---


### DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference <a name="DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference;

new DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetBootDiskType">resetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetNumLocalSsds">resetNumLocalSsds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetBootDiskSizeGb"></a>

```java
public void resetBootDiskSizeGb()
```

##### `resetBootDiskType` <a name="resetBootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetBootDiskType"></a>

```java
public void resetBootDiskType()
```

##### `resetNumLocalSsds` <a name="resetNumLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.resetNumLocalSsds"></a>

```java
public void resetNumLocalSsds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskTypeInput">bootDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.numLocalSsdsInput">numLocalSsdsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskType">bootDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.numLocalSsds">numLocalSsds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGbInput"></a>

```java
public java.lang.Number getBootDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskTypeInput`<sup>Optional</sup> <a name="bootDiskTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskTypeInput"></a>

```java
public java.lang.String getBootDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `numLocalSsdsInput`<sup>Optional</sup> <a name="numLocalSsdsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.numLocalSsdsInput"></a>

```java
public java.lang.Number getNumLocalSsdsInput();
```

- *Type:* java.lang.Number

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskSizeGb"></a>

```java
public java.lang.Number getBootDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `bootDiskType`<sup>Required</sup> <a name="bootDiskType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.bootDiskType"></a>

```java
public java.lang.String getBootDiskType();
```

- *Type:* java.lang.String

---

##### `numLocalSsds`<sup>Required</sup> <a name="numLocalSsds" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.numLocalSsds"></a>

```java
public java.lang.Number getNumLocalSsds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigWorkerConfigDiskConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a>

---


### DataprocClusterClusterConfigWorkerConfigOutputReference <a name="DataprocClusterClusterConfigWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterClusterConfigWorkerConfigOutputReference;

new DataprocClusterClusterConfigWorkerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putAccelerators">putAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putDiskConfig">putDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetDiskConfig">resetDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetNumInstances">resetNumInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccelerators` <a name="putAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putAccelerators"></a>

```java
public void putAccelerators(IResolvable OR java.util.List<DataprocClusterClusterConfigWorkerConfigAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putAccelerators.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators">DataprocClusterClusterConfigWorkerConfigAccelerators</a>>

---

##### `putDiskConfig` <a name="putDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putDiskConfig"></a>

```java
public void putDiskConfig(DataprocClusterClusterConfigWorkerConfigDiskConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.putDiskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetAccelerators"></a>

```java
public void resetAccelerators()
```

##### `resetDiskConfig` <a name="resetDiskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetDiskConfig"></a>

```java
public void resetDiskConfig()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetMinCpuPlatform"></a>

```java
public void resetMinCpuPlatform()
```

##### `resetNumInstances` <a name="resetNumInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.resetNumInstances"></a>

```java
public void resetNumInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList">DataprocClusterClusterConfigWorkerConfigAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.diskConfig">diskConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference">DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.instanceNames">instanceNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.acceleratorsInput">acceleratorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators">DataprocClusterClusterConfigWorkerConfigAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.diskConfigInput">diskConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.numInstancesInput">numInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.numInstances">numInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.accelerators"></a>

```java
public DataprocClusterClusterConfigWorkerConfigAcceleratorsList getAccelerators();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAcceleratorsList">DataprocClusterClusterConfigWorkerConfigAcceleratorsList</a>

---

##### `diskConfig`<sup>Required</sup> <a name="diskConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.diskConfig"></a>

```java
public DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference getDiskConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference">DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference</a>

---

##### `instanceNames`<sup>Required</sup> <a name="instanceNames" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.instanceNames"></a>

```java
public java.util.List<java.lang.String> getInstanceNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.acceleratorsInput"></a>

```java
public java.lang.Object getAcceleratorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigAccelerators">DataprocClusterClusterConfigWorkerConfigAccelerators</a>>

---

##### `diskConfigInput`<sup>Optional</sup> <a name="diskConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.diskConfigInput"></a>

```java
public DataprocClusterClusterConfigWorkerConfigDiskConfig getDiskConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigDiskConfig">DataprocClusterClusterConfigWorkerConfigDiskConfig</a>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.minCpuPlatformInput"></a>

```java
public java.lang.String getMinCpuPlatformInput();
```

- *Type:* java.lang.String

---

##### `numInstancesInput`<sup>Optional</sup> <a name="numInstancesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.numInstancesInput"></a>

```java
public java.lang.Number getNumInstancesInput();
```

- *Type:* java.lang.Number

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `numInstances`<sup>Required</sup> <a name="numInstances" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.numInstances"></a>

```java
public java.lang.Number getNumInstances();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterClusterConfigWorkerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterClusterConfigWorkerConfig">DataprocClusterClusterConfigWorkerConfig</a>

---


### DataprocClusterTimeoutsOutputReference <a name="DataprocClusterTimeoutsOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterTimeoutsOutputReference;

new DataprocClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterTimeouts">DataprocClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference;

new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resetDataprocMetastoreService">resetDataprocMetastoreService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocMetastoreService` <a name="resetDataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.resetDataprocMetastoreService"></a>

```java
public void resetDataprocMetastoreService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.dataprocMetastoreServiceInput">dataprocMetastoreServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.dataprocMetastoreService">dataprocMetastoreService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataprocMetastoreServiceInput`<sup>Optional</sup> <a name="dataprocMetastoreServiceInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.dataprocMetastoreServiceInput"></a>

```java
public java.lang.String getDataprocMetastoreServiceInput();
```

- *Type:* java.lang.String

---

##### `dataprocMetastoreService`<sup>Required</sup> <a name="dataprocMetastoreService" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.dataprocMetastoreService"></a>

```java
public java.lang.String getDataprocMetastoreService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a>

---


### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference;

new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putMetastoreConfig">putMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resetMetastoreConfig">resetMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetastoreConfig` <a name="putMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putMetastoreConfig"></a>

```java
public void putMetastoreConfig(DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putMetastoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a>

---

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putSparkHistoryServerConfig"></a>

```java
public void putSparkHistoryServerConfig(DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a>

---

##### `resetMetastoreConfig` <a name="resetMetastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resetMetastoreConfig"></a>

```java
public void resetMetastoreConfig()
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.resetSparkHistoryServerConfig"></a>

```java
public void resetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.metastoreConfig">metastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.metastoreConfigInput">metastoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metastoreConfig`<sup>Required</sup> <a name="metastoreConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.metastoreConfig"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference getMetastoreConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference</a>

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.sparkHistoryServerConfig"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreConfigInput`<sup>Optional</sup> <a name="metastoreConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.metastoreConfigInput"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig getMetastoreConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig</a>

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig getSparkHistoryServerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a>

---


### DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference <a name="DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference;

new DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```java
public void resetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```java
public java.lang.String getDataprocClusterInput();
```

- *Type:* java.lang.String

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.get"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget</a>>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resetMaxNodeCount">resetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resetMinNodeCount">resetMinNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxNodeCount` <a name="resetMaxNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resetMaxNodeCount"></a>

```java
public void resetMaxNodeCount()
```

##### `resetMinNodeCount` <a name="resetMinNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.resetMinNodeCount"></a>

```java
public void resetMinNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetSpot">resetSpot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetLocalSsdCount"></a>

```java
public void resetLocalSsdCount()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetMinCpuPlatform"></a>

```java
public void resetMinCpuPlatform()
```

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetPreemptible"></a>

```java
public void resetPreemptible()
```

##### `resetSpot` <a name="resetSpot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.resetSpot"></a>

```java
public void resetSpot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.spotInput">spotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.spot">spot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.localSsdCountInput"></a>

```java
public java.lang.Number getLocalSsdCountInput();
```

- *Type:* java.lang.Number

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.minCpuPlatformInput"></a>

```java
public java.lang.String getMinCpuPlatformInput();
```

- *Type:* java.lang.String

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.preemptibleInput"></a>

```java
public java.lang.Object getPreemptibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotInput`<sup>Optional</sup> <a name="spotInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.spotInput"></a>

```java
public java.lang.Object getSpotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spot`<sup>Required</sup> <a name="spot" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.spot"></a>

```java
public java.lang.Object getSpot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resetAutoscaling">resetAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resetConfig">resetConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putAutoscaling"></a>

```java
public void putAutoscaling(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a>

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putConfig"></a>

```java
public void putConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a>

---

##### `resetAutoscaling` <a name="resetAutoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resetAutoscaling"></a>

```java
public void resetAutoscaling()
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.resetConfig"></a>

```java
public void resetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.autoscaling"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.config"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference</a>

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.autoscalingInput"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling getAutoscalingInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.configInput"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig</a>

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.putNodePoolConfig">putNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resetNodePoolConfig">resetNodePoolConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodePoolConfig` <a name="putNodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.putNodePoolConfig"></a>

```java
public void putNodePoolConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a>

---

##### `resetNodePoolConfig` <a name="resetNodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.resetNodePoolConfig"></a>

```java
public void resetNodePoolConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolConfigInput">nodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolInput">nodePoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePool">nodePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolConfig"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference getNodePoolConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference</a>

---

##### `nodePoolConfigInput`<sup>Optional</sup> <a name="nodePoolConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolConfigInput"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig getNodePoolConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig</a>

---

##### `nodePoolInput`<sup>Optional</sup> <a name="nodePoolInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePoolInput"></a>

```java
public java.lang.String getNodePoolInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.nodePool"></a>

```java
public java.lang.String getNodePool();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget</a> OR com.hashicorp.cdktf.IResolvable

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.putNodePoolTarget">putNodePoolTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resetGkeClusterTarget">resetGkeClusterTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resetNodePoolTarget">resetNodePoolTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodePoolTarget` <a name="putNodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.putNodePoolTarget"></a>

```java
public void putNodePoolTarget(IResolvable OR java.util.List<DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.putNodePoolTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget</a>>

---

##### `resetGkeClusterTarget` <a name="resetGkeClusterTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resetGkeClusterTarget"></a>

```java
public void resetGkeClusterTarget()
```

##### `resetNodePoolTarget` <a name="resetNodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.resetNodePoolTarget"></a>

```java
public void resetNodePoolTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.nodePoolTarget">nodePoolTarget</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.gkeClusterTargetInput">gkeClusterTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.nodePoolTargetInput">nodePoolTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.gkeClusterTarget">gkeClusterTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodePoolTarget`<sup>Required</sup> <a name="nodePoolTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.nodePoolTarget"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList getNodePoolTarget();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList</a>

---

##### `gkeClusterTargetInput`<sup>Optional</sup> <a name="gkeClusterTargetInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.gkeClusterTargetInput"></a>

```java
public java.lang.String getGkeClusterTargetInput();
```

- *Type:* java.lang.String

---

##### `nodePoolTargetInput`<sup>Optional</sup> <a name="nodePoolTargetInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.nodePoolTargetInput"></a>

```java
public java.lang.Object getNodePoolTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget</a>>

---

##### `gkeClusterTarget`<sup>Required</sup> <a name="gkeClusterTarget" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.gkeClusterTarget"></a>

```java
public java.lang.String getGkeClusterTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.componentVersionInput">componentVersionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.componentVersion">componentVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentVersionInput`<sup>Optional</sup> <a name="componentVersionInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.componentVersionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getComponentVersionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.componentVersion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getComponentVersion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a>

---


### DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference <a name="DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference;

new DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putGkeClusterConfig">putGkeClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putKubernetesSoftwareConfig">putKubernetesSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resetKubernetesNamespace">resetKubernetesNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGkeClusterConfig` <a name="putGkeClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putGkeClusterConfig"></a>

```java
public void putGkeClusterConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putGkeClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a>

---

##### `putKubernetesSoftwareConfig` <a name="putKubernetesSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putKubernetesSoftwareConfig"></a>

```java
public void putKubernetesSoftwareConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.putKubernetesSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a>

---

##### `resetKubernetesNamespace` <a name="resetKubernetesNamespace" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.resetKubernetesNamespace"></a>

```java
public void resetKubernetesNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.gkeClusterConfig">gkeClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesSoftwareConfig">kubernetesSoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.gkeClusterConfigInput">gkeClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesNamespaceInput">kubernetesNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesSoftwareConfigInput">kubernetesSoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gkeClusterConfig`<sup>Required</sup> <a name="gkeClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.gkeClusterConfig"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference getGkeClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference</a>

---

##### `kubernetesSoftwareConfig`<sup>Required</sup> <a name="kubernetesSoftwareConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesSoftwareConfig"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference getKubernetesSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference</a>

---

##### `gkeClusterConfigInput`<sup>Optional</sup> <a name="gkeClusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.gkeClusterConfigInput"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig getGkeClusterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig</a>

---

##### `kubernetesNamespaceInput`<sup>Optional</sup> <a name="kubernetesNamespaceInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesNamespaceInput"></a>

```java
public java.lang.String getKubernetesNamespaceInput();
```

- *Type:* java.lang.String

---

##### `kubernetesSoftwareConfigInput`<sup>Optional</sup> <a name="kubernetesSoftwareConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesSoftwareConfigInput"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig getKubernetesSoftwareConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig</a>

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.kubernetesNamespace"></a>

```java
public java.lang.String getKubernetesNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a>

---


### DataprocClusterVirtualClusterConfigOutputReference <a name="DataprocClusterVirtualClusterConfigOutputReference" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_cluster.DataprocClusterVirtualClusterConfigOutputReference;

new DataprocClusterVirtualClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putAuxiliaryServicesConfig">putAuxiliaryServicesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putKubernetesClusterConfig">putKubernetesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetAuxiliaryServicesConfig">resetAuxiliaryServicesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetKubernetesClusterConfig">resetKubernetesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetStagingBucket">resetStagingBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuxiliaryServicesConfig` <a name="putAuxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putAuxiliaryServicesConfig"></a>

```java
public void putAuxiliaryServicesConfig(DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putAuxiliaryServicesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a>

---

##### `putKubernetesClusterConfig` <a name="putKubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putKubernetesClusterConfig"></a>

```java
public void putKubernetesClusterConfig(DataprocClusterVirtualClusterConfigKubernetesClusterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.putKubernetesClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a>

---

##### `resetAuxiliaryServicesConfig` <a name="resetAuxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetAuxiliaryServicesConfig"></a>

```java
public void resetAuxiliaryServicesConfig()
```

##### `resetKubernetesClusterConfig` <a name="resetKubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetKubernetesClusterConfig"></a>

```java
public void resetKubernetesClusterConfig()
```

##### `resetStagingBucket` <a name="resetStagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.resetStagingBucket"></a>

```java
public void resetStagingBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.auxiliaryServicesConfig">auxiliaryServicesConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.kubernetesClusterConfig">kubernetesClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.auxiliaryServicesConfigInput">auxiliaryServicesConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.kubernetesClusterConfigInput">kubernetesClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.stagingBucketInput">stagingBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auxiliaryServicesConfig`<sup>Required</sup> <a name="auxiliaryServicesConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.auxiliaryServicesConfig"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference getAuxiliaryServicesConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference</a>

---

##### `kubernetesClusterConfig`<sup>Required</sup> <a name="kubernetesClusterConfig" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.kubernetesClusterConfig"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference getKubernetesClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference">DataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference</a>

---

##### `auxiliaryServicesConfigInput`<sup>Optional</sup> <a name="auxiliaryServicesConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.auxiliaryServicesConfigInput"></a>

```java
public DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig getAuxiliaryServicesConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig">DataprocClusterVirtualClusterConfigAuxiliaryServicesConfig</a>

---

##### `kubernetesClusterConfigInput`<sup>Optional</sup> <a name="kubernetesClusterConfigInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.kubernetesClusterConfigInput"></a>

```java
public DataprocClusterVirtualClusterConfigKubernetesClusterConfig getKubernetesClusterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigKubernetesClusterConfig">DataprocClusterVirtualClusterConfigKubernetesClusterConfig</a>

---

##### `stagingBucketInput`<sup>Optional</sup> <a name="stagingBucketInput" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.stagingBucketInput"></a>

```java
public java.lang.String getStagingBucketInput();
```

- *Type:* java.lang.String

---

##### `stagingBucket`<sup>Required</sup> <a name="stagingBucket" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfigOutputReference.property.internalValue"></a>

```java
public DataprocClusterVirtualClusterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocCluster.DataprocClusterVirtualClusterConfig">DataprocClusterVirtualClusterConfig</a>

---



