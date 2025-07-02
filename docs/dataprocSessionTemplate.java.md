# `dataprocSessionTemplate` Submodule <a name="`dataprocSessionTemplate` Submodule" id="@cdktf/provider-google.dataprocSessionTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocSessionTemplate <a name="DataprocSessionTemplate" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template google_dataproc_session_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplate;

DataprocSessionTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .environmentConfig(DataprocSessionTemplateEnvironmentConfig)
//  .id(java.lang.String)
//  .jupyterSession(DataprocSessionTemplateJupyterSession)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .runtimeConfig(DataprocSessionTemplateRuntimeConfig)
//  .sparkConnectSession(DataprocSessionTemplateSparkConnectSession)
//  .timeouts(DataprocSessionTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#id DataprocSessionTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.jupyterSession">jupyterSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | jupyter_session block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this session template. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location in which the session template will be created in. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#project DataprocSessionTemplate#project}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.sparkConnectSession">sparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | spark_connect_session block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#name DataprocSessionTemplate#name}

---

##### `environmentConfig`<sup>Optional</sup> <a name="environmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.environmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#environment_config DataprocSessionTemplate#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#id DataprocSessionTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyterSession`<sup>Optional</sup> <a name="jupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.jupyterSession"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

jupyter_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#jupyter_session DataprocSessionTemplate#jupyter_session}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this session template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#labels DataprocSessionTemplate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location in which the session template will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#location DataprocSessionTemplate#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#project DataprocSessionTemplate#project}.

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.runtimeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#runtime_config DataprocSessionTemplate#runtime_config}

---

##### `sparkConnectSession`<sup>Optional</sup> <a name="sparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.sparkConnectSession"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

spark_connect_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#spark_connect_session DataprocSessionTemplate#spark_connect_session}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#timeouts DataprocSessionTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putEnvironmentConfig">putEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putJupyterSession">putJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putSparkConnectSession">putSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetEnvironmentConfig">resetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetJupyterSession">resetJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetRuntimeConfig">resetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetSparkConnectSession">resetSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnvironmentConfig` <a name="putEnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putEnvironmentConfig"></a>

```java
public void putEnvironmentConfig(DataprocSessionTemplateEnvironmentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

---

##### `putJupyterSession` <a name="putJupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putJupyterSession"></a>

```java
public void putJupyterSession(DataprocSessionTemplateJupyterSession value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putJupyterSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putRuntimeConfig"></a>

```java
public void putRuntimeConfig(DataprocSessionTemplateRuntimeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

---

##### `putSparkConnectSession` <a name="putSparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putSparkConnectSession"></a>

```java
public void putSparkConnectSession(DataprocSessionTemplateSparkConnectSession value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putSparkConnectSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putTimeouts"></a>

```java
public void putTimeouts(DataprocSessionTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

---

##### `resetEnvironmentConfig` <a name="resetEnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetEnvironmentConfig"></a>

```java
public void resetEnvironmentConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetJupyterSession` <a name="resetJupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetJupyterSession"></a>

```java
public void resetJupyterSession()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRuntimeConfig` <a name="resetRuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetRuntimeConfig"></a>

```java
public void resetRuntimeConfig()
```

##### `resetSparkConnectSession` <a name="resetSparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetSparkConnectSession"></a>

```java
public void resetSparkConnectSession()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocSessionTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplate;

DataprocSessionTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplate;

DataprocSessionTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplate;

DataprocSessionTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplate;

DataprocSessionTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataprocSessionTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataprocSessionTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataprocSessionTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataprocSessionTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataprocSessionTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference">DataprocSessionTemplateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSession">jupyterSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference">DataprocSessionTemplateJupyterSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference">DataprocSessionTemplateRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSession">sparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference">DataprocSessionTemplateSparkConnectSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference">DataprocSessionTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfigInput">environmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSessionInput">jupyterSessionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSessionInput">sparkConnectSessionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `environmentConfig`<sup>Required</sup> <a name="environmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfig"></a>

```java
public DataprocSessionTemplateEnvironmentConfigOutputReference getEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference">DataprocSessionTemplateEnvironmentConfigOutputReference</a>

---

##### `jupyterSession`<sup>Required</sup> <a name="jupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSession"></a>

```java
public DataprocSessionTemplateJupyterSessionOutputReference getJupyterSession();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference">DataprocSessionTemplateJupyterSessionOutputReference</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfig"></a>

```java
public DataprocSessionTemplateRuntimeConfigOutputReference getRuntimeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference">DataprocSessionTemplateRuntimeConfigOutputReference</a>

---

##### `sparkConnectSession`<sup>Required</sup> <a name="sparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSession"></a>

```java
public DataprocSessionTemplateSparkConnectSessionOutputReference getSparkConnectSession();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference">DataprocSessionTemplateSparkConnectSessionOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeouts"></a>

```java
public DataprocSessionTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference">DataprocSessionTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `environmentConfigInput`<sup>Optional</sup> <a name="environmentConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfigInput"></a>

```java
public DataprocSessionTemplateEnvironmentConfig getEnvironmentConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jupyterSessionInput`<sup>Optional</sup> <a name="jupyterSessionInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSessionInput"></a>

```java
public DataprocSessionTemplateJupyterSession getJupyterSessionInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfigInput"></a>

```java
public DataprocSessionTemplateRuntimeConfig getRuntimeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

---

##### `sparkConnectSessionInput`<sup>Optional</sup> <a name="sparkConnectSessionInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSessionInput"></a>

```java
public DataprocSessionTemplateSparkConnectSession getSparkConnectSessionInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocSessionTemplateConfig <a name="DataprocSessionTemplateConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateConfig;

DataprocSessionTemplateConfig.builder()
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
    .name(java.lang.String)
//  .environmentConfig(DataprocSessionTemplateEnvironmentConfig)
//  .id(java.lang.String)
//  .jupyterSession(DataprocSessionTemplateJupyterSession)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .runtimeConfig(DataprocSessionTemplateRuntimeConfig)
//  .sparkConnectSession(DataprocSessionTemplateSparkConnectSession)
//  .timeouts(DataprocSessionTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.environmentConfig">environmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#id DataprocSessionTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.jupyterSession">jupyterSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | jupyter_session block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels to associate with this session template. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location in which the session template will be created in. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#project DataprocSessionTemplate#project}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.sparkConnectSession">sparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | spark_connect_session block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#name DataprocSessionTemplate#name}

---

##### `environmentConfig`<sup>Optional</sup> <a name="environmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.environmentConfig"></a>

```java
public DataprocSessionTemplateEnvironmentConfig getEnvironmentConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#environment_config DataprocSessionTemplate#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#id DataprocSessionTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyterSession`<sup>Optional</sup> <a name="jupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.jupyterSession"></a>

```java
public DataprocSessionTemplateJupyterSession getJupyterSession();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

jupyter_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#jupyter_session DataprocSessionTemplate#jupyter_session}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels to associate with this session template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#labels DataprocSessionTemplate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location in which the session template will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#location DataprocSessionTemplate#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#project DataprocSessionTemplate#project}.

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.runtimeConfig"></a>

```java
public DataprocSessionTemplateRuntimeConfig getRuntimeConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#runtime_config DataprocSessionTemplate#runtime_config}

---

##### `sparkConnectSession`<sup>Optional</sup> <a name="sparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.sparkConnectSession"></a>

```java
public DataprocSessionTemplateSparkConnectSession getSparkConnectSession();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

spark_connect_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#spark_connect_session DataprocSessionTemplate#spark_connect_session}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.timeouts"></a>

```java
public DataprocSessionTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#timeouts DataprocSessionTemplate#timeouts}

---

### DataprocSessionTemplateEnvironmentConfig <a name="DataprocSessionTemplateEnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateEnvironmentConfig;

DataprocSessionTemplateEnvironmentConfig.builder()
//  .executionConfig(DataprocSessionTemplateEnvironmentConfigExecutionConfig)
//  .peripheralsConfig(DataprocSessionTemplateEnvironmentConfigPeripheralsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.executionConfig">executionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig">peripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `executionConfig`<sup>Optional</sup> <a name="executionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.executionConfig"></a>

```java
public DataprocSessionTemplateEnvironmentConfigExecutionConfig getExecutionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#execution_config DataprocSessionTemplate#execution_config}

---

##### `peripheralsConfig`<sup>Optional</sup> <a name="peripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig"></a>

```java
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfig getPeripheralsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#peripherals_config DataprocSessionTemplate#peripherals_config}

---

### DataprocSessionTemplateEnvironmentConfigExecutionConfig <a name="DataprocSessionTemplateEnvironmentConfigExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateEnvironmentConfigExecutionConfig;

DataprocSessionTemplateEnvironmentConfigExecutionConfig.builder()
//  .kmsKey(java.lang.String)
//  .networkTags(java.util.List<java.lang.String>)
//  .serviceAccount(java.lang.String)
//  .stagingBucket(java.lang.String)
//  .subnetworkUri(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri">subnetworkUri</a></code> | <code>java.lang.String</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The duration after which the workload will be terminated. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#kms_key DataprocSessionTemplate#kms_key}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#network_tags DataprocSessionTemplate#network_tags}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#service_account DataprocSessionTemplate#service_account}

---

##### `stagingBucket`<sup>Optional</sup> <a name="stagingBucket" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#staging_bucket DataprocSessionTemplate#staging_bucket}

---

##### `subnetworkUri`<sup>Optional</sup> <a name="subnetworkUri" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```java
public java.lang.String getSubnetworkUri();
```

- *Type:* java.lang.String

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#subnetwork_uri DataprocSessionTemplate#subnetwork_uri}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a session workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#ttl DataprocSessionTemplate#ttl}

---

### DataprocSessionTemplateEnvironmentConfigPeripheralsConfig <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig;

DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.builder()
//  .metastoreService(java.lang.String)
//  .sparkHistoryServerConfig(DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreService`<sup>Optional</sup> <a name="metastoreService" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#metastore_service DataprocSessionTemplate#metastore_service}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```java
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#spark_history_server_config DataprocSessionTemplate#spark_history_server_config}

---

### DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;

DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.builder()
//  .dataprocCluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#dataproc_cluster DataprocSessionTemplate#dataproc_cluster}

---

### DataprocSessionTemplateJupyterSession <a name="DataprocSessionTemplateJupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateJupyterSession;

DataprocSessionTemplateJupyterSession.builder()
//  .displayName(java.lang.String)
//  .kernel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name, shown in the Jupyter kernelspec card. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.kernel">kernel</a></code> | <code>java.lang.String</code> | Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"]. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name, shown in the Jupyter kernelspec card.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#display_name DataprocSessionTemplate#display_name}

---

##### `kernel`<sup>Optional</sup> <a name="kernel" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.kernel"></a>

```java
public java.lang.String getKernel();
```

- *Type:* java.lang.String

Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#kernel DataprocSessionTemplate#kernel}

---

### DataprocSessionTemplateRuntimeConfig <a name="DataprocSessionTemplateRuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateRuntimeConfig;

DataprocSessionTemplateRuntimeConfig.builder()
//  .containerImage(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.version">version</a></code> | <code>java.lang.String</code> | Version of the session runtime. |

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#container_image DataprocSessionTemplate#container_image}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#properties DataprocSessionTemplate#properties}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version of the session runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#version DataprocSessionTemplate#version}

---

### DataprocSessionTemplateSparkConnectSession <a name="DataprocSessionTemplateSparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateSparkConnectSession;

DataprocSessionTemplateSparkConnectSession.builder()
    .build();
```


### DataprocSessionTemplateTimeouts <a name="DataprocSessionTemplateTimeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateTimeouts;

DataprocSessionTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#create DataprocSessionTemplate#create}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#delete DataprocSessionTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#update DataprocSessionTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#create DataprocSessionTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#delete DataprocSessionTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/dataproc_session_template#update DataprocSessionTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference;

new DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">resetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">resetSubnetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```java
public void resetNetworkTags()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetStagingBucket` <a name="resetStagingBucket" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```java
public void resetStagingBucket()
```

##### `resetSubnetworkUri` <a name="resetSubnetworkUri" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```java
public void resetSubnetworkUri()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">networkTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">stagingBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">subnetworkUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">stagingBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">subnetworkUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `stagingBucketInput`<sup>Optional</sup> <a name="stagingBucketInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```java
public java.lang.String getStagingBucketInput();
```

- *Type:* java.lang.String

---

##### `subnetworkUriInput`<sup>Optional</sup> <a name="subnetworkUriInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```java
public java.lang.String getSubnetworkUriInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `stagingBucket`<sup>Required</sup> <a name="stagingBucket" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```java
public java.lang.String getStagingBucket();
```

- *Type:* java.lang.String

---

##### `subnetworkUri`<sup>Required</sup> <a name="subnetworkUri" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```java
public java.lang.String getSubnetworkUri();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```java
public DataprocSessionTemplateEnvironmentConfigExecutionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---


### DataprocSessionTemplateEnvironmentConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateEnvironmentConfigOutputReference;

new DataprocSessionTemplateEnvironmentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig">putExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig">putPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig">resetExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig">resetPeripheralsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExecutionConfig` <a name="putExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig"></a>

```java
public void putExecutionConfig(DataprocSessionTemplateEnvironmentConfigExecutionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `putPeripheralsConfig` <a name="putPeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```java
public void putPeripheralsConfig(DataprocSessionTemplateEnvironmentConfigPeripheralsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `resetExecutionConfig` <a name="resetExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```java
public void resetExecutionConfig()
```

##### `resetPeripheralsConfig` <a name="resetPeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```java
public void resetPeripheralsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig">executionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig">peripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput">executionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput">peripheralsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionConfig`<sup>Required</sup> <a name="executionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig"></a>

```java
public DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference getExecutionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `peripheralsConfig`<sup>Required</sup> <a name="peripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```java
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference getPeripheralsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `executionConfigInput`<sup>Optional</sup> <a name="executionConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```java
public DataprocSessionTemplateEnvironmentConfigExecutionConfig getExecutionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `peripheralsConfigInput`<sup>Optional</sup> <a name="peripheralsConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```java
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfig getPeripheralsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue"></a>

```java
public DataprocSessionTemplateEnvironmentConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

---


### DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference;

new DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">resetMetastoreService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```java
public void putSparkHistoryServerConfig(DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `resetMetastoreService` <a name="resetMetastoreService" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```java
public void resetMetastoreService()
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```java
public void resetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">metastoreServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">metastoreService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```java
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference getSparkHistoryServerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreServiceInput`<sup>Optional</sup> <a name="metastoreServiceInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```java
public java.lang.String getMetastoreServiceInput();
```

- *Type:* java.lang.String

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```java
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig getSparkHistoryServerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `metastoreService`<sup>Required</sup> <a name="metastoreService" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```java
public java.lang.String getMetastoreService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```java
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---


### DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference;

new DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```java
public void resetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```java
public java.lang.String getDataprocClusterInput();
```

- *Type:* java.lang.String

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```java
public java.lang.String getDataprocCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```java
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### DataprocSessionTemplateJupyterSessionOutputReference <a name="DataprocSessionTemplateJupyterSessionOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateJupyterSessionOutputReference;

new DataprocSessionTemplateJupyterSessionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetKernel">resetKernel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetKernel` <a name="resetKernel" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetKernel"></a>

```java
public void resetKernel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput">kernelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernel">kernel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `kernelInput`<sup>Optional</sup> <a name="kernelInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput"></a>

```java
public java.lang.String getKernelInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `kernel`<sup>Required</sup> <a name="kernel" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernel"></a>

```java
public java.lang.String getKernel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.internalValue"></a>

```java
public DataprocSessionTemplateJupyterSession getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

---


### DataprocSessionTemplateRuntimeConfigOutputReference <a name="DataprocSessionTemplateRuntimeConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateRuntimeConfigOutputReference;

new DataprocSessionTemplateRuntimeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage"></a>

```java
public void resetContainerImage()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties">effectiveProperties</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput">containerImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveProperties`<sup>Required</sup> <a name="effectiveProperties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties"></a>

```java
public StringMap getEffectiveProperties();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput"></a>

```java
public java.lang.String getContainerImageInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue"></a>

```java
public DataprocSessionTemplateRuntimeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

---


### DataprocSessionTemplateSparkConnectSessionOutputReference <a name="DataprocSessionTemplateSparkConnectSessionOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateSparkConnectSessionOutputReference;

new DataprocSessionTemplateSparkConnectSessionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue"></a>

```java
public DataprocSessionTemplateSparkConnectSession getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

---


### DataprocSessionTemplateTimeoutsOutputReference <a name="DataprocSessionTemplateTimeoutsOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_session_template.DataprocSessionTemplateTimeoutsOutputReference;

new DataprocSessionTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

---



