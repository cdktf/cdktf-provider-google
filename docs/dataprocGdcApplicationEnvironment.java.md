# `dataprocGdcApplicationEnvironment` Submodule <a name="`dataprocGdcApplicationEnvironment` Submodule" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocGdcApplicationEnvironment <a name="DataprocGdcApplicationEnvironment" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment google_dataproc_gdc_application_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironment;

DataprocGdcApplicationEnvironment.Builder.create(Construct scope, java.lang.String id)
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
    .serviceinstance(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .applicationEnvironmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .project(java.lang.String)
//  .sparkApplicationEnvironmentConfig(DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig)
//  .timeouts(DataprocGdcApplicationEnvironmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.serviceinstance">serviceinstance</a></code> | <code>java.lang.String</code> | The id of the service instance to which this application environment belongs. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The annotations to associate with this application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.applicationEnvironmentId">applicationEnvironmentId</a></code> | <code>java.lang.String</code> | The id of the application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#id DataprocGdcApplicationEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this application environment. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#project DataprocGdcApplicationEnvironment#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.sparkApplicationEnvironmentConfig">sparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | spark_application_environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#location DataprocGdcApplicationEnvironment#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.serviceinstance"></a>

- *Type:* java.lang.String

The id of the service instance to which this application environment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#serviceinstance DataprocGdcApplicationEnvironment#serviceinstance}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The annotations to associate with this application environment.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#annotations DataprocGdcApplicationEnvironment#annotations}

---

##### `applicationEnvironmentId`<sup>Optional</sup> <a name="applicationEnvironmentId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.applicationEnvironmentId"></a>

- *Type:* java.lang.String

The id of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#application_environment_id DataprocGdcApplicationEnvironment#application_environment_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#display_name DataprocGdcApplicationEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#id DataprocGdcApplicationEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this application environment. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#labels DataprocGdcApplicationEnvironment#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#namespace DataprocGdcApplicationEnvironment#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#project DataprocGdcApplicationEnvironment#project}.

---

##### `sparkApplicationEnvironmentConfig`<sup>Optional</sup> <a name="sparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.sparkApplicationEnvironmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

spark_application_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#spark_application_environment_config DataprocGdcApplicationEnvironment#spark_application_environment_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#timeouts DataprocGdcApplicationEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig">putSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetApplicationEnvironmentId">resetApplicationEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig">resetSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSparkApplicationEnvironmentConfig` <a name="putSparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig"></a>

```java
public void putSparkApplicationEnvironmentConfig(DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putTimeouts"></a>

```java
public void putTimeouts(DataprocGdcApplicationEnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetApplicationEnvironmentId` <a name="resetApplicationEnvironmentId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetApplicationEnvironmentId"></a>

```java
public void resetApplicationEnvironmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetProject"></a>

```java
public void resetProject()
```

##### `resetSparkApplicationEnvironmentConfig` <a name="resetSparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig"></a>

```java
public void resetSparkApplicationEnvironmentConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironment;

DataprocGdcApplicationEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironment;

DataprocGdcApplicationEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironment;

DataprocGdcApplicationEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironment;

DataprocGdcApplicationEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataprocGdcApplicationEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataprocGdcApplicationEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataprocGdcApplicationEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataprocGdcApplicationEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig">sparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference">DataprocGdcApplicationEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput">applicationEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstanceInput">serviceinstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput">sparkApplicationEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentId">applicationEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstance">serviceinstance</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sparkApplicationEnvironmentConfig`<sup>Required</sup> <a name="sparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig"></a>

```java
public DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference getSparkApplicationEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeouts"></a>

```java
public DataprocGdcApplicationEnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference">DataprocGdcApplicationEnvironmentTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationEnvironmentIdInput`<sup>Optional</sup> <a name="applicationEnvironmentIdInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput"></a>

```java
public java.lang.String getApplicationEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceinstanceInput`<sup>Optional</sup> <a name="serviceinstanceInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstanceInput"></a>

```java
public java.lang.String getServiceinstanceInput();
```

- *Type:* java.lang.String

---

##### `sparkApplicationEnvironmentConfigInput`<sup>Optional</sup> <a name="sparkApplicationEnvironmentConfigInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput"></a>

```java
public DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig getSparkApplicationEnvironmentConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationEnvironmentId`<sup>Required</sup> <a name="applicationEnvironmentId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentId"></a>

```java
public java.lang.String getApplicationEnvironmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstance"></a>

```java
public java.lang.String getServiceinstance();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocGdcApplicationEnvironmentConfig <a name="DataprocGdcApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironmentConfig;

DataprocGdcApplicationEnvironmentConfig.builder()
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
    .serviceinstance(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .applicationEnvironmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .project(java.lang.String)
//  .sparkApplicationEnvironmentConfig(DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig)
//  .timeouts(DataprocGdcApplicationEnvironmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.serviceinstance">serviceinstance</a></code> | <code>java.lang.String</code> | The id of the service instance to which this application environment belongs. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The annotations to associate with this application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId">applicationEnvironmentId</a></code> | <code>java.lang.String</code> | The id of the application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#id DataprocGdcApplicationEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this application environment. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#project DataprocGdcApplicationEnvironment#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig">sparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | spark_application_environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#location DataprocGdcApplicationEnvironment#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.serviceinstance"></a>

```java
public java.lang.String getServiceinstance();
```

- *Type:* java.lang.String

The id of the service instance to which this application environment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#serviceinstance DataprocGdcApplicationEnvironment#serviceinstance}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The annotations to associate with this application environment.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#annotations DataprocGdcApplicationEnvironment#annotations}

---

##### `applicationEnvironmentId`<sup>Optional</sup> <a name="applicationEnvironmentId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId"></a>

```java
public java.lang.String getApplicationEnvironmentId();
```

- *Type:* java.lang.String

The id of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#application_environment_id DataprocGdcApplicationEnvironment#application_environment_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#display_name DataprocGdcApplicationEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#id DataprocGdcApplicationEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this application environment. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#labels DataprocGdcApplicationEnvironment#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#namespace DataprocGdcApplicationEnvironment#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#project DataprocGdcApplicationEnvironment#project}.

---

##### `sparkApplicationEnvironmentConfig`<sup>Optional</sup> <a name="sparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig"></a>

```java
public DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig getSparkApplicationEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

spark_application_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#spark_application_environment_config DataprocGdcApplicationEnvironment#spark_application_environment_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.timeouts"></a>

```java
public DataprocGdcApplicationEnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#timeouts DataprocGdcApplicationEnvironment#timeouts}

---

### DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig <a name="DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig;

DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.builder()
//  .defaultProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties">defaultProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of default Spark properties to apply to workloads in this application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion">defaultVersion</a></code> | <code>java.lang.String</code> | The default Dataproc version to use for applications submitted to this application environment. |

---

##### `defaultProperties`<sup>Optional</sup> <a name="defaultProperties" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of default Spark properties to apply to workloads in this application environment.

These defaults may be overridden by per-application properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#default_properties DataprocGdcApplicationEnvironment#default_properties}

---

##### `defaultVersion`<sup>Optional</sup> <a name="defaultVersion" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion"></a>

```java
public java.lang.String getDefaultVersion();
```

- *Type:* java.lang.String

The default Dataproc version to use for applications submitted to this application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#default_version DataprocGdcApplicationEnvironment#default_version}

---

### DataprocGdcApplicationEnvironmentTimeouts <a name="DataprocGdcApplicationEnvironmentTimeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironmentTimeouts;

DataprocGdcApplicationEnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#create DataprocGdcApplicationEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#delete DataprocGdcApplicationEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#update DataprocGdcApplicationEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#create DataprocGdcApplicationEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#delete DataprocGdcApplicationEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/dataproc_gdc_application_environment#update DataprocGdcApplicationEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference <a name="DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference;

new DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties">resetDefaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion">resetDefaultVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultProperties` <a name="resetDefaultProperties" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties"></a>

```java
public void resetDefaultProperties()
```

##### `resetDefaultVersion` <a name="resetDefaultVersion" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion"></a>

```java
public void resetDefaultVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput">defaultPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput">defaultVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties">defaultProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPropertiesInput`<sup>Optional</sup> <a name="defaultPropertiesInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultVersionInput`<sup>Optional</sup> <a name="defaultVersionInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput"></a>

```java
public java.lang.String getDefaultVersionInput();
```

- *Type:* java.lang.String

---

##### `defaultProperties`<sup>Required</sup> <a name="defaultProperties" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion"></a>

```java
public java.lang.String getDefaultVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue"></a>

```java
public DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---


### DataprocGdcApplicationEnvironmentTimeoutsOutputReference <a name="DataprocGdcApplicationEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_gdc_application_environment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference;

new DataprocGdcApplicationEnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

---



