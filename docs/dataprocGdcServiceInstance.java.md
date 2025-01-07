# `dataprocGdcServiceInstance` Submodule <a name="`dataprocGdcServiceInstance` Submodule" id="@cdktf/provider-google.dataprocGdcServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocGdcServiceInstance <a name="DataprocGdcServiceInstance" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance google_dataproc_gdc_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstance;

DataprocGdcServiceInstance.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .serviceInstanceId(java.lang.String)
//  .displayName(java.lang.String)
//  .gdceCluster(DataprocGdcServiceInstanceGdceCluster)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .sparkServiceInstanceConfig(DataprocGdcServiceInstanceSparkServiceInstanceConfig)
//  .timeouts(DataprocGdcServiceInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.serviceInstanceId">serviceInstanceId</a></code> | <code>java.lang.String</code> | Id of the service instance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.gdceCluster">gdceCluster</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.sparkServiceInstanceConfig">sparkServiceInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#location DataprocGdcServiceInstance#location}

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.serviceInstanceId"></a>

- *Type:* java.lang.String

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#service_instance_id DataprocGdcServiceInstance#service_instance_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#display_name DataprocGdcServiceInstance#display_name}

---

##### `gdceCluster`<sup>Optional</sup> <a name="gdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.gdceCluster"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#labels DataprocGdcServiceInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#service_account DataprocGdcServiceInstance#service_account}

---

##### `sparkServiceInstanceConfig`<sup>Optional</sup> <a name="sparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.sparkServiceInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#spark_service_instance_config DataprocGdcServiceInstance#spark_service_instance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#timeouts DataprocGdcServiceInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putGdceCluster">putGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putSparkServiceInstanceConfig">putSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetGdceCluster">resetGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetSparkServiceInstanceConfig">resetSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGdceCluster` <a name="putGdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putGdceCluster"></a>

```java
public void putGdceCluster(DataprocGdcServiceInstanceGdceCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putGdceCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

---

##### `putSparkServiceInstanceConfig` <a name="putSparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putSparkServiceInstanceConfig"></a>

```java
public void putSparkServiceInstanceConfig(DataprocGdcServiceInstanceSparkServiceInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putSparkServiceInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts"></a>

```java
public void putTimeouts(DataprocGdcServiceInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGdceCluster` <a name="resetGdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetGdceCluster"></a>

```java
public void resetGdceCluster()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetSparkServiceInstanceConfig` <a name="resetSparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetSparkServiceInstanceConfig"></a>

```java
public void resetSparkServiceInstanceConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstance;

DataprocGdcServiceInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstance;

DataprocGdcServiceInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstance;

DataprocGdcServiceInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstance;

DataprocGdcServiceInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataprocGdcServiceInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataprocGdcServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataprocGdcServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataprocGdcServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveServiceAccount">effectiveServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceCluster">gdceCluster</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference">DataprocGdcServiceInstanceGdceClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.requestedState">requestedState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfig">sparkServiceInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference">DataprocGdcServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceClusterInput">gdceClusterInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceIdInput">serviceInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput">sparkServiceInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceId">serviceInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveServiceAccount`<sup>Required</sup> <a name="effectiveServiceAccount" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveServiceAccount"></a>

```java
public java.lang.String getEffectiveServiceAccount();
```

- *Type:* java.lang.String

---

##### `gdceCluster`<sup>Required</sup> <a name="gdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceCluster"></a>

```java
public DataprocGdcServiceInstanceGdceClusterOutputReference getGdceCluster();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference">DataprocGdcServiceInstanceGdceClusterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `requestedState`<sup>Required</sup> <a name="requestedState" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.requestedState"></a>

```java
public java.lang.String getRequestedState();
```

- *Type:* java.lang.String

---

##### `sparkServiceInstanceConfig`<sup>Required</sup> <a name="sparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfig"></a>

```java
public DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference getSparkServiceInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeouts"></a>

```java
public DataprocGdcServiceInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference">DataprocGdcServiceInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `gdceClusterInput`<sup>Optional</sup> <a name="gdceClusterInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceClusterInput"></a>

```java
public DataprocGdcServiceInstanceGdceCluster getGdceClusterInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `serviceInstanceIdInput`<sup>Optional</sup> <a name="serviceInstanceIdInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceIdInput"></a>

```java
public java.lang.String getServiceInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `sparkServiceInstanceConfigInput`<sup>Optional</sup> <a name="sparkServiceInstanceConfigInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput"></a>

```java
public DataprocGdcServiceInstanceSparkServiceInstanceConfig getSparkServiceInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceId"></a>

```java
public java.lang.String getServiceInstanceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocGdcServiceInstanceConfig <a name="DataprocGdcServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstanceConfig;

DataprocGdcServiceInstanceConfig.builder()
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
    .location(java.lang.String)
    .serviceInstanceId(java.lang.String)
//  .displayName(java.lang.String)
//  .gdceCluster(DataprocGdcServiceInstanceGdceCluster)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .sparkServiceInstanceConfig(DataprocGdcServiceInstanceSparkServiceInstanceConfig)
//  .timeouts(DataprocGdcServiceInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceInstanceId">serviceInstanceId</a></code> | <code>java.lang.String</code> | Id of the service instance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.gdceCluster">gdceCluster</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig">sparkServiceInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#location DataprocGdcServiceInstance#location}

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceInstanceId"></a>

```java
public java.lang.String getServiceInstanceId();
```

- *Type:* java.lang.String

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#service_instance_id DataprocGdcServiceInstance#service_instance_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#display_name DataprocGdcServiceInstance#display_name}

---

##### `gdceCluster`<sup>Optional</sup> <a name="gdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.gdceCluster"></a>

```java
public DataprocGdcServiceInstanceGdceCluster getGdceCluster();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#labels DataprocGdcServiceInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#service_account DataprocGdcServiceInstance#service_account}

---

##### `sparkServiceInstanceConfig`<sup>Optional</sup> <a name="sparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig"></a>

```java
public DataprocGdcServiceInstanceSparkServiceInstanceConfig getSparkServiceInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#spark_service_instance_config DataprocGdcServiceInstance#spark_service_instance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.timeouts"></a>

```java
public DataprocGdcServiceInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#timeouts DataprocGdcServiceInstance#timeouts}

---

### DataprocGdcServiceInstanceGdceCluster <a name="DataprocGdcServiceInstanceGdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstanceGdceCluster;

DataprocGdcServiceInstanceGdceCluster.builder()
    .gdceCluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster.property.gdceCluster">gdceCluster</a></code> | <code>java.lang.String</code> | Gdce cluster resource id. |

---

##### `gdceCluster`<sup>Required</sup> <a name="gdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster.property.gdceCluster"></a>

```java
public java.lang.String getGdceCluster();
```

- *Type:* java.lang.String

Gdce cluster resource id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}

---

### DataprocGdcServiceInstanceSparkServiceInstanceConfig <a name="DataprocGdcServiceInstanceSparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstanceSparkServiceInstanceConfig;

DataprocGdcServiceInstanceSparkServiceInstanceConfig.builder()
    .build();
```


### DataprocGdcServiceInstanceTimeouts <a name="DataprocGdcServiceInstanceTimeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstanceTimeouts;

DataprocGdcServiceInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#create DataprocGdcServiceInstance#create}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#delete DataprocGdcServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#update DataprocGdcServiceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#create DataprocGdcServiceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#delete DataprocGdcServiceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dataproc_gdc_service_instance#update DataprocGdcServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocGdcServiceInstanceGdceClusterOutputReference <a name="DataprocGdcServiceInstanceGdceClusterOutputReference" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstanceGdceClusterOutputReference;

new DataprocGdcServiceInstanceGdceClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput">gdceClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster">gdceCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gdceClusterInput`<sup>Optional</sup> <a name="gdceClusterInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput"></a>

```java
public java.lang.String getGdceClusterInput();
```

- *Type:* java.lang.String

---

##### `gdceCluster`<sup>Required</sup> <a name="gdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster"></a>

```java
public java.lang.String getGdceCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue"></a>

```java
public DataprocGdcServiceInstanceGdceCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

---


### DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference <a name="DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference;

new DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue"></a>

```java
public DataprocGdcServiceInstanceSparkServiceInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---


### DataprocGdcServiceInstanceTimeoutsOutputReference <a name="DataprocGdcServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_service_instance.DataprocGdcServiceInstanceTimeoutsOutputReference;

new DataprocGdcServiceInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>

---



