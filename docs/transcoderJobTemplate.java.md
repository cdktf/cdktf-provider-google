# `transcoderJobTemplate` Submodule <a name="`transcoderJobTemplate` Submodule" id="@cdktf/provider-google.transcoderJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscoderJobTemplate <a name="TranscoderJobTemplate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template google_transcoder_job_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplate;

TranscoderJobTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .jobTemplateId(java.lang.String)
    .location(java.lang.String)
//  .config(TranscoderJobTemplateConfigA)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(TranscoderJobTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.jobTemplateId">jobTemplateId</a></code> | <code>java.lang.String</code> | ID to use for the Transcoding job template. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the transcoding job template resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this job template. You can use these to organize and group your job templates. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.jobTemplateId"></a>

- *Type:* java.lang.String

ID to use for the Transcoding job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#job_template_id TranscoderJobTemplate#job_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the transcoding job template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#location TranscoderJobTemplate#location}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#config TranscoderJobTemplate#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this job template. You can use these to organize and group your job templates.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#labels TranscoderJobTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#timeouts TranscoderJobTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig"></a>

```java
public void putConfig(TranscoderJobTemplateConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts"></a>

```java
public void putTimeouts(TranscoderJobTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TranscoderJobTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplate;

TranscoderJobTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplate;

TranscoderJobTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplate;

TranscoderJobTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplate;

TranscoderJobTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TranscoderJobTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TranscoderJobTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TranscoderJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TranscoderJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TranscoderJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference">TranscoderJobTemplateConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference">TranscoderJobTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateIdInput">jobTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateId">jobTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.config"></a>

```java
public TranscoderJobTemplateConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference">TranscoderJobTemplateConfigAOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeouts"></a>

```java
public TranscoderJobTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference">TranscoderJobTemplateTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.configInput"></a>

```java
public TranscoderJobTemplateConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobTemplateIdInput`<sup>Optional</sup> <a name="jobTemplateIdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateIdInput"></a>

```java
public java.lang.String getJobTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateId"></a>

```java
public java.lang.String getJobTemplateId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TranscoderJobTemplateConfig <a name="TranscoderJobTemplateConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfig;

TranscoderJobTemplateConfig.builder()
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
    .jobTemplateId(java.lang.String)
    .location(java.lang.String)
//  .config(TranscoderJobTemplateConfigA)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(TranscoderJobTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.jobTemplateId">jobTemplateId</a></code> | <code>java.lang.String</code> | ID to use for the Transcoding job template. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the transcoding job template resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this job template. You can use these to organize and group your job templates. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.jobTemplateId"></a>

```java
public java.lang.String getJobTemplateId();
```

- *Type:* java.lang.String

ID to use for the Transcoding job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#job_template_id TranscoderJobTemplate#job_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the transcoding job template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#location TranscoderJobTemplate#location}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.config"></a>

```java
public TranscoderJobTemplateConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#config TranscoderJobTemplate#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this job template. You can use these to organize and group your job templates.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#labels TranscoderJobTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.timeouts"></a>

```java
public TranscoderJobTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#timeouts TranscoderJobTemplate#timeouts}

---

### TranscoderJobTemplateConfigA <a name="TranscoderJobTemplateConfigA" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigA;

TranscoderJobTemplateConfigA.builder()
//  .adBreaks(IResolvable)
//  .adBreaks(java.util.List<TranscoderJobTemplateConfigAdBreaks>)
//  .editList(IResolvable)
//  .editList(java.util.List<TranscoderJobTemplateConfigEditListStruct>)
//  .elementaryStreams(IResolvable)
//  .elementaryStreams(java.util.List<TranscoderJobTemplateConfigElementaryStreams>)
//  .encryptions(IResolvable)
//  .encryptions(java.util.List<TranscoderJobTemplateConfigEncryptions>)
//  .inputs(IResolvable)
//  .inputs(java.util.List<TranscoderJobTemplateConfigInputs>)
//  .manifests(IResolvable)
//  .manifests(java.util.List<TranscoderJobTemplateConfigManifests>)
//  .muxStreams(IResolvable)
//  .muxStreams(java.util.List<TranscoderJobTemplateConfigMuxStreams>)
//  .output(TranscoderJobTemplateConfigOutput)
//  .overlays(IResolvable)
//  .overlays(java.util.List<TranscoderJobTemplateConfigOverlays>)
//  .pubsubDestination(TranscoderJobTemplateConfigPubsubDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.adBreaks">adBreaks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>></code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.editList">editList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>></code> | edit_list block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.elementaryStreams">elementaryStreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>></code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.encryptions">encryptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>></code> | encryptions block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.inputs">inputs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>></code> | inputs block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.manifests">manifests</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>></code> | manifests block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.muxStreams">muxStreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>></code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.output">output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.overlays">overlays</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>></code> | overlays block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `adBreaks`<sup>Optional</sup> <a name="adBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.adBreaks"></a>

```java
public java.lang.Object getAdBreaks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>>

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#ad_breaks TranscoderJobTemplate#ad_breaks}

---

##### `editList`<sup>Optional</sup> <a name="editList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.editList"></a>

```java
public java.lang.Object getEditList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>>

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#edit_list TranscoderJobTemplate#edit_list}

---

##### `elementaryStreams`<sup>Optional</sup> <a name="elementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.elementaryStreams"></a>

```java
public java.lang.Object getElementaryStreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>>

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#elementary_streams TranscoderJobTemplate#elementary_streams}

---

##### `encryptions`<sup>Optional</sup> <a name="encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.encryptions"></a>

```java
public java.lang.Object getEncryptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>>

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#encryptions TranscoderJobTemplate#encryptions}

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.inputs"></a>

```java
public java.lang.Object getInputs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>>

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#inputs TranscoderJobTemplate#inputs}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.manifests"></a>

```java
public java.lang.Object getManifests();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>>

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#manifests TranscoderJobTemplate#manifests}

---

##### `muxStreams`<sup>Optional</sup> <a name="muxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.muxStreams"></a>

```java
public java.lang.Object getMuxStreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>>

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#mux_streams TranscoderJobTemplate#mux_streams}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.output"></a>

```java
public TranscoderJobTemplateConfigOutput getOutput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#output TranscoderJobTemplate#output}

---

##### `overlays`<sup>Optional</sup> <a name="overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.overlays"></a>

```java
public java.lang.Object getOverlays();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>>

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#overlays TranscoderJobTemplate#overlays}

---

##### `pubsubDestination`<sup>Optional</sup> <a name="pubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.pubsubDestination"></a>

```java
public TranscoderJobTemplateConfigPubsubDestination getPubsubDestination();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#pubsub_destination TranscoderJobTemplate#pubsub_destination}

---

### TranscoderJobTemplateConfigAdBreaks <a name="TranscoderJobTemplateConfigAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigAdBreaks;

TranscoderJobTemplateConfigAdBreaks.builder()
//  .startTimeOffset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `startTimeOffset`<sup>Optional</sup> <a name="startTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

### TranscoderJobTemplateConfigEditListStruct <a name="TranscoderJobTemplateConfigEditListStruct" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEditListStruct;

TranscoderJobTemplateConfigEditListStruct.builder()
//  .inputs(java.util.List<java.lang.String>)
//  .key(java.lang.String)
//  .startTimeOffset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.key">key</a></code> | <code>java.lang.String</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'. |

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#inputs TranscoderJobTemplate#inputs}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `startTimeOffset`<sup>Optional</sup> <a name="startTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

### TranscoderJobTemplateConfigElementaryStreams <a name="TranscoderJobTemplateConfigElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreams;

TranscoderJobTemplateConfigElementaryStreams.builder()
//  .audioStream(TranscoderJobTemplateConfigElementaryStreamsAudioStream)
//  .key(java.lang.String)
//  .videoStream(TranscoderJobTemplateConfigElementaryStreamsVideoStream)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.audioStream">audioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.key">key</a></code> | <code>java.lang.String</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.videoStream">videoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `audioStream`<sup>Optional</sup> <a name="audioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.audioStream"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsAudioStream getAudioStream();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#audio_stream TranscoderJobTemplate#audio_stream}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `videoStream`<sup>Optional</sup> <a name="videoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.videoStream"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStream getVideoStream();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#video_stream TranscoderJobTemplate#video_stream}

---

### TranscoderJobTemplateConfigElementaryStreamsAudioStream <a name="TranscoderJobTemplateConfigElementaryStreamsAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsAudioStream;

TranscoderJobTemplateConfigElementaryStreamsAudioStream.builder()
    .bitrateBps(java.lang.Number)
//  .channelCount(java.lang.Number)
//  .channelLayout(java.util.List<java.lang.String>)
//  .codec(java.lang.String)
//  .sampleRateHertz(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps">bitrateBps</a></code> | <code>java.lang.Number</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount">channelCount</a></code> | <code>java.lang.Number</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout">channelLayout</a></code> | <code>java.util.List<java.lang.String></code> | A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec">codec</a></code> | <code>java.lang.String</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz">sampleRateHertz</a></code> | <code>java.lang.Number</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `bitrateBps`<sup>Required</sup> <a name="bitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```java
public java.lang.Number getBitrateBps();
```

- *Type:* java.lang.Number

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

##### `channelCount`<sup>Optional</sup> <a name="channelCount" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount"></a>

```java
public java.lang.Number getChannelCount();
```

- *Type:* java.lang.Number

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#channel_count TranscoderJobTemplate#channel_count}

---

##### `channelLayout`<sup>Optional</sup> <a name="channelLayout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```java
public java.util.List<java.lang.String> getChannelLayout();
```

- *Type:* java.util.List<java.lang.String>

A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#channel_layout TranscoderJobTemplate#channel_layout}

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec"></a>

```java
public java.lang.String getCodec();
```

- *Type:* java.lang.String

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#codec TranscoderJobTemplate#codec}

---

##### `sampleRateHertz`<sup>Optional</sup> <a name="sampleRateHertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```java
public java.lang.Number getSampleRateHertz();
```

- *Type:* java.lang.Number

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#sample_rate_hertz TranscoderJobTemplate#sample_rate_hertz}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStream <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsVideoStream;

TranscoderJobTemplateConfigElementaryStreamsVideoStream.builder()
//  .h264(TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `h264`<sup>Optional</sup> <a name="h264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 getH264();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#h264 TranscoderJobTemplate#h264}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264;

TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.builder()
    .bitrateBps(java.lang.Number)
    .frameRate(java.lang.Number)
//  .crfLevel(java.lang.Number)
//  .entropyCoder(java.lang.String)
//  .gopDuration(java.lang.String)
//  .heightPixels(java.lang.Number)
//  .hlg(TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg)
//  .pixelFormat(java.lang.String)
//  .preset(java.lang.String)
//  .profile(java.lang.String)
//  .rateControlMode(java.lang.String)
//  .sdr(TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr)
//  .vbvFullnessBits(java.lang.Number)
//  .vbvSizeBits(java.lang.Number)
//  .widthPixels(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps">bitrateBps</a></code> | <code>java.lang.Number</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate">frameRate</a></code> | <code>java.lang.Number</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel">crfLevel</a></code> | <code>java.lang.Number</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder">entropyCoder</a></code> | <code>java.lang.String</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration">gopDuration</a></code> | <code>java.lang.String</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels">heightPixels</a></code> | <code>java.lang.Number</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat">pixelFormat</a></code> | <code>java.lang.String</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset">preset</a></code> | <code>java.lang.String</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile">profile</a></code> | <code>java.lang.String</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode">rateControlMode</a></code> | <code>java.lang.String</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">vbvFullnessBits</a></code> | <code>java.lang.Number</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">vbvSizeBits</a></code> | <code>java.lang.Number</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels">widthPixels</a></code> | <code>java.lang.Number</code> | The width of the video in pixels. |

---

##### `bitrateBps`<sup>Required</sup> <a name="bitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```java
public java.lang.Number getBitrateBps();
```

- *Type:* java.lang.Number

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

##### `frameRate`<sup>Required</sup> <a name="frameRate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```java
public java.lang.Number getFrameRate();
```

- *Type:* java.lang.Number

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#frame_rate TranscoderJobTemplate#frame_rate}

---

##### `crfLevel`<sup>Optional</sup> <a name="crfLevel" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```java
public java.lang.Number getCrfLevel();
```

- *Type:* java.lang.Number

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#crf_level TranscoderJobTemplate#crf_level}

---

##### `entropyCoder`<sup>Optional</sup> <a name="entropyCoder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```java
public java.lang.String getEntropyCoder();
```

- *Type:* java.lang.String

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#entropy_coder TranscoderJobTemplate#entropy_coder}

---

##### `gopDuration`<sup>Optional</sup> <a name="gopDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```java
public java.lang.String getGopDuration();
```

- *Type:* java.lang.String

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#gop_duration TranscoderJobTemplate#gop_duration}

---

##### `heightPixels`<sup>Optional</sup> <a name="heightPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```java
public java.lang.Number getHeightPixels();
```

- *Type:* java.lang.Number

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#height_pixels TranscoderJobTemplate#height_pixels}

---

##### `hlg`<sup>Optional</sup> <a name="hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg getHlg();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#hlg TranscoderJobTemplate#hlg}

---

##### `pixelFormat`<sup>Optional</sup> <a name="pixelFormat" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```java
public java.lang.String getPixelFormat();
```

- *Type:* java.lang.String

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#pixel_format TranscoderJobTemplate#pixel_format}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```java
public java.lang.String getPreset();
```

- *Type:* java.lang.String

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#preset TranscoderJobTemplate#preset}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#profile TranscoderJobTemplate#profile}

---

##### `rateControlMode`<sup>Optional</sup> <a name="rateControlMode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```java
public java.lang.String getRateControlMode();
```

- *Type:* java.lang.String

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#rate_control_mode TranscoderJobTemplate#rate_control_mode}

---

##### `sdr`<sup>Optional</sup> <a name="sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr getSdr();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#sdr TranscoderJobTemplate#sdr}

---

##### `vbvFullnessBits`<sup>Optional</sup> <a name="vbvFullnessBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```java
public java.lang.Number getVbvFullnessBits();
```

- *Type:* java.lang.Number

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#vbv_fullness_bits TranscoderJobTemplate#vbv_fullness_bits}

---

##### `vbvSizeBits`<sup>Optional</sup> <a name="vbvSizeBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```java
public java.lang.Number getVbvSizeBits();
```

- *Type:* java.lang.Number

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#vbv_size_bits TranscoderJobTemplate#vbv_size_bits}

---

##### `widthPixels`<sup>Optional</sup> <a name="widthPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```java
public java.lang.Number getWidthPixels();
```

- *Type:* java.lang.Number

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#width_pixels TranscoderJobTemplate#width_pixels}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg;

TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg.builder()
    .build();
```


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr;

TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr.builder()
    .build();
```


### TranscoderJobTemplateConfigEncryptions <a name="TranscoderJobTemplateConfigEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptions;

TranscoderJobTemplateConfigEncryptions.builder()
    .id(java.lang.String)
//  .aes128(TranscoderJobTemplateConfigEncryptionsAes128)
//  .drmSystems(TranscoderJobTemplateConfigEncryptionsDrmSystems)
//  .mpegCenc(TranscoderJobTemplateConfigEncryptionsMpegCenc)
//  .sampleAes(TranscoderJobTemplateConfigEncryptionsSampleAes)
//  .secretManagerKeySource(TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.id">id</a></code> | <code>java.lang.String</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.drmSystems">drmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.mpegCenc">mpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.sampleAes">sampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource">secretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `aes128`<sup>Optional</sup> <a name="aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.aes128"></a>

```java
public TranscoderJobTemplateConfigEncryptionsAes128 getAes128();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#aes128 TranscoderJobTemplate#aes128}

---

##### `drmSystems`<sup>Optional</sup> <a name="drmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.drmSystems"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystems getDrmSystems();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#drm_systems TranscoderJobTemplate#drm_systems}

---

##### `mpegCenc`<sup>Optional</sup> <a name="mpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.mpegCenc"></a>

```java
public TranscoderJobTemplateConfigEncryptionsMpegCenc getMpegCenc();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#mpeg_cenc TranscoderJobTemplate#mpeg_cenc}

---

##### `sampleAes`<sup>Optional</sup> <a name="sampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.sampleAes"></a>

```java
public TranscoderJobTemplateConfigEncryptionsSampleAes getSampleAes();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#sample_aes TranscoderJobTemplate#sample_aes}

---

##### `secretManagerKeySource`<sup>Optional</sup> <a name="secretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource"></a>

```java
public TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource getSecretManagerKeySource();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#secret_manager_key_source TranscoderJobTemplate#secret_manager_key_source}

---

### TranscoderJobTemplateConfigEncryptionsAes128 <a name="TranscoderJobTemplateConfigEncryptionsAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsAes128;

TranscoderJobTemplateConfigEncryptionsAes128.builder()
    .build();
```


### TranscoderJobTemplateConfigEncryptionsDrmSystems <a name="TranscoderJobTemplateConfigEncryptionsDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystems;

TranscoderJobTemplateConfigEncryptionsDrmSystems.builder()
//  .clearkey(TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey)
//  .fairplay(TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay)
//  .playready(TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready)
//  .widevine(TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `clearkey`<sup>Optional</sup> <a name="clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey getClearkey();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#clearkey TranscoderJobTemplate#clearkey}

---

##### `fairplay`<sup>Optional</sup> <a name="fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay getFairplay();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#fairplay TranscoderJobTemplate#fairplay}

---

##### `playready`<sup>Optional</sup> <a name="playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready getPlayready();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#playready TranscoderJobTemplate#playready}

---

##### `widevine`<sup>Optional</sup> <a name="widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine getWidevine();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#widevine TranscoderJobTemplate#widevine}

---

### TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey;

TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey.builder()
    .build();
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay;

TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay.builder()
    .build();
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready;

TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready.builder()
    .build();
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine;

TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine.builder()
    .build();
```


### TranscoderJobTemplateConfigEncryptionsMpegCenc <a name="TranscoderJobTemplateConfigEncryptionsMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsMpegCenc;

TranscoderJobTemplateConfigEncryptionsMpegCenc.builder()
    .scheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Specify the encryption scheme. |

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#scheme TranscoderJobTemplate#scheme}

---

### TranscoderJobTemplateConfigEncryptionsSampleAes <a name="TranscoderJobTemplateConfigEncryptionsSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsSampleAes;

TranscoderJobTemplateConfigEncryptionsSampleAes.builder()
    .build();
```


### TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource <a name="TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource;

TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.builder()
    .secretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#secret_version TranscoderJobTemplate#secret_version}

---

### TranscoderJobTemplateConfigInputs <a name="TranscoderJobTemplateConfigInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigInputs;

TranscoderJobTemplateConfigInputs.builder()
//  .key(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.key">key</a></code> | <code>java.lang.String</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.uri">uri</a></code> | <code>java.lang.String</code> | URI of the media. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigManifests <a name="TranscoderJobTemplateConfigManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigManifests;

TranscoderJobTemplateConfigManifests.builder()
//  .fileName(java.lang.String)
//  .muxStreams(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.muxStreams">muxStreams</a></code> | <code>java.util.List<java.lang.String></code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.type">type</a></code> | <code>java.lang.String</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#file_name TranscoderJobTemplate#file_name}

---

##### `muxStreams`<sup>Optional</sup> <a name="muxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.muxStreams"></a>

```java
public java.util.List<java.lang.String> getMuxStreams();
```

- *Type:* java.util.List<java.lang.String>

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#mux_streams TranscoderJobTemplate#mux_streams}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#type TranscoderJobTemplate#type}

---

### TranscoderJobTemplateConfigMuxStreams <a name="TranscoderJobTemplateConfigMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigMuxStreams;

TranscoderJobTemplateConfigMuxStreams.builder()
//  .container(java.lang.String)
//  .elementaryStreams(java.util.List<java.lang.String>)
//  .encryptionId(java.lang.String)
//  .fileName(java.lang.String)
//  .key(java.lang.String)
//  .segmentSettings(TranscoderJobTemplateConfigMuxStreamsSegmentSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.container">container</a></code> | <code>java.lang.String</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.elementaryStreams">elementaryStreams</a></code> | <code>java.util.List<java.lang.String></code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.encryptionId">encryptionId</a></code> | <code>java.lang.String</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.key">key</a></code> | <code>java.lang.String</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.segmentSettings">segmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#container TranscoderJobTemplate#container}

---

##### `elementaryStreams`<sup>Optional</sup> <a name="elementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.elementaryStreams"></a>

```java
public java.util.List<java.lang.String> getElementaryStreams();
```

- *Type:* java.util.List<java.lang.String>

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#elementary_streams TranscoderJobTemplate#elementary_streams}

---

##### `encryptionId`<sup>Optional</sup> <a name="encryptionId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.encryptionId"></a>

```java
public java.lang.String getEncryptionId();
```

- *Type:* java.lang.String

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#encryption_id TranscoderJobTemplate#encryption_id}

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#file_name TranscoderJobTemplate#file_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `segmentSettings`<sup>Optional</sup> <a name="segmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.segmentSettings"></a>

```java
public TranscoderJobTemplateConfigMuxStreamsSegmentSettings getSegmentSettings();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#segment_settings TranscoderJobTemplate#segment_settings}

---

### TranscoderJobTemplateConfigMuxStreamsSegmentSettings <a name="TranscoderJobTemplateConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigMuxStreamsSegmentSettings;

TranscoderJobTemplateConfigMuxStreamsSegmentSettings.builder()
//  .segmentDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration">segmentDuration</a></code> | <code>java.lang.String</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `segmentDuration`<sup>Optional</sup> <a name="segmentDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```java
public java.lang.String getSegmentDuration();
```

- *Type:* java.lang.String

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#segment_duration TranscoderJobTemplate#segment_duration}

---

### TranscoderJobTemplateConfigOutput <a name="TranscoderJobTemplateConfigOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOutput;

TranscoderJobTemplateConfigOutput.builder()
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.property.uri">uri</a></code> | <code>java.lang.String</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigOverlays <a name="TranscoderJobTemplateConfigOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlays;

TranscoderJobTemplateConfigOverlays.builder()
//  .animations(IResolvable)
//  .animations(java.util.List<TranscoderJobTemplateConfigOverlaysAnimations>)
//  .image(TranscoderJobTemplateConfigOverlaysImage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.animations">animations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>></code> | animations block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.image">image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | image block. |

---

##### `animations`<sup>Optional</sup> <a name="animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.animations"></a>

```java
public java.lang.Object getAnimations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>>

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#animations TranscoderJobTemplate#animations}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.image"></a>

```java
public TranscoderJobTemplateConfigOverlaysImage getImage();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#image TranscoderJobTemplate#image}

---

### TranscoderJobTemplateConfigOverlaysAnimations <a name="TranscoderJobTemplateConfigOverlaysAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysAnimations;

TranscoderJobTemplateConfigOverlaysAnimations.builder()
//  .animationFade(TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.property.animationFade">animationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `animationFade`<sup>Optional</sup> <a name="animationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.property.animationFade"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade getAnimationFade();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#animation_fade TranscoderJobTemplate#animation_fade}

---

### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade;

TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.builder()
    .fadeType(java.lang.String)
//  .endTimeOffset(java.lang.String)
//  .startTimeOffset(java.lang.String)
//  .xy(TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType">fadeType</a></code> | <code>java.lang.String</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">endTimeOffset</a></code> | <code>java.lang.String</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `fadeType`<sup>Required</sup> <a name="fadeType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```java
public java.lang.String getFadeType();
```

- *Type:* java.lang.String

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#fade_type TranscoderJobTemplate#fade_type}

---

##### `endTimeOffset`<sup>Optional</sup> <a name="endTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```java
public java.lang.String getEndTimeOffset();
```

- *Type:* java.lang.String

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#end_time_offset TranscoderJobTemplate#end_time_offset}

---

##### `startTimeOffset`<sup>Optional</sup> <a name="startTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

##### `xy`<sup>Optional</sup> <a name="xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy getXy();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#xy TranscoderJobTemplate#xy}

---

### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy;

TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.builder()
//  .x(java.lang.Number)
//  .y(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x">x</a></code> | <code>java.lang.Number</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y">y</a></code> | <code>java.lang.Number</code> | Normalized y coordinate. |

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```java
public java.lang.Number getX();
```

- *Type:* java.lang.Number

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#x TranscoderJobTemplate#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```java
public java.lang.Number getY();
```

- *Type:* java.lang.Number

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#y TranscoderJobTemplate#y}

---

### TranscoderJobTemplateConfigOverlaysImage <a name="TranscoderJobTemplateConfigOverlaysImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysImage;

TranscoderJobTemplateConfigOverlaysImage.builder()
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.property.uri">uri</a></code> | <code>java.lang.String</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigPubsubDestination <a name="TranscoderJobTemplateConfigPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigPubsubDestination;

TranscoderJobTemplateConfigPubsubDestination.builder()
//  .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.property.topic">topic</a></code> | <code>java.lang.String</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#topic TranscoderJobTemplate#topic}

---

### TranscoderJobTemplateTimeouts <a name="TranscoderJobTemplateTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateTimeouts;

TranscoderJobTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#create TranscoderJobTemplate#create}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#delete TranscoderJobTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#update TranscoderJobTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#create TranscoderJobTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#delete TranscoderJobTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job_template#update TranscoderJobTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscoderJobTemplateConfigAdBreaksList <a name="TranscoderJobTemplateConfigAdBreaksList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigAdBreaksList;

new TranscoderJobTemplateConfigAdBreaksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get"></a>

```java
public TranscoderJobTemplateConfigAdBreaksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>>

---


### TranscoderJobTemplateConfigAdBreaksOutputReference <a name="TranscoderJobTemplateConfigAdBreaksOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigAdBreaksOutputReference;

new TranscoderJobTemplateConfigAdBreaksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset">resetStartTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartTimeOffset` <a name="resetStartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```java
public void resetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```java
public java.lang.String getStartTimeOffsetInput();
```

- *Type:* java.lang.String

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>

---


### TranscoderJobTemplateConfigAOutputReference <a name="TranscoderJobTemplateConfigAOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigAOutputReference;

new TranscoderJobTemplateConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks">putAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList">putEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams">putElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions">putEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs">putInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests">putManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams">putMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays">putOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination">putPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetAdBreaks">resetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEditList">resetEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetElementaryStreams">resetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEncryptions">resetEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetInputs">resetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetManifests">resetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetMuxStreams">resetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOverlays">resetOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetPubsubDestination">resetPubsubDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdBreaks` <a name="putAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks"></a>

```java
public void putAdBreaks(IResolvable OR java.util.List<TranscoderJobTemplateConfigAdBreaks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>>

---

##### `putEditList` <a name="putEditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList"></a>

```java
public void putEditList(IResolvable OR java.util.List<TranscoderJobTemplateConfigEditListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>>

---

##### `putElementaryStreams` <a name="putElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams"></a>

```java
public void putElementaryStreams(IResolvable OR java.util.List<TranscoderJobTemplateConfigElementaryStreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>>

---

##### `putEncryptions` <a name="putEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions"></a>

```java
public void putEncryptions(IResolvable OR java.util.List<TranscoderJobTemplateConfigEncryptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>>

---

##### `putInputs` <a name="putInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs"></a>

```java
public void putInputs(IResolvable OR java.util.List<TranscoderJobTemplateConfigInputs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>>

---

##### `putManifests` <a name="putManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests"></a>

```java
public void putManifests(IResolvable OR java.util.List<TranscoderJobTemplateConfigManifests> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>>

---

##### `putMuxStreams` <a name="putMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams"></a>

```java
public void putMuxStreams(IResolvable OR java.util.List<TranscoderJobTemplateConfigMuxStreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>>

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput"></a>

```java
public void putOutput(TranscoderJobTemplateConfigOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---

##### `putOverlays` <a name="putOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays"></a>

```java
public void putOverlays(IResolvable OR java.util.List<TranscoderJobTemplateConfigOverlays> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>>

---

##### `putPubsubDestination` <a name="putPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination"></a>

```java
public void putPubsubDestination(TranscoderJobTemplateConfigPubsubDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---

##### `resetAdBreaks` <a name="resetAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetAdBreaks"></a>

```java
public void resetAdBreaks()
```

##### `resetEditList` <a name="resetEditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEditList"></a>

```java
public void resetEditList()
```

##### `resetElementaryStreams` <a name="resetElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetElementaryStreams"></a>

```java
public void resetElementaryStreams()
```

##### `resetEncryptions` <a name="resetEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEncryptions"></a>

```java
public void resetEncryptions()
```

##### `resetInputs` <a name="resetInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetInputs"></a>

```java
public void resetInputs()
```

##### `resetManifests` <a name="resetManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetManifests"></a>

```java
public void resetManifests()
```

##### `resetMuxStreams` <a name="resetMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetMuxStreams"></a>

```java
public void resetMuxStreams()
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetOverlays` <a name="resetOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOverlays"></a>

```java
public void resetOverlays()
```

##### `resetPubsubDestination` <a name="resetPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetPubsubDestination"></a>

```java
public void resetPubsubDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaks">adBreaks</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList">TranscoderJobTemplateConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editList">editList</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList">TranscoderJobTemplateConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreams">elementaryStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList">TranscoderJobTemplateConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptions">encryptions</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList">TranscoderJobTemplateConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputs">inputs</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList">TranscoderJobTemplateConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifests">manifests</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList">TranscoderJobTemplateConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreams">muxStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList">TranscoderJobTemplateConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference">TranscoderJobTemplateConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlays">overlays</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList">TranscoderJobTemplateConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference">TranscoderJobTemplateConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaksInput">adBreaksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editListInput">editListInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput">elementaryStreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptionsInput">encryptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputsInput">inputsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifestsInput">manifestsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput">muxStreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.outputInput">outputInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlaysInput">overlaysInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput">pubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adBreaks`<sup>Required</sup> <a name="adBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaks"></a>

```java
public TranscoderJobTemplateConfigAdBreaksList getAdBreaks();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList">TranscoderJobTemplateConfigAdBreaksList</a>

---

##### `editList`<sup>Required</sup> <a name="editList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editList"></a>

```java
public TranscoderJobTemplateConfigEditListStructList getEditList();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList">TranscoderJobTemplateConfigEditListStructList</a>

---

##### `elementaryStreams`<sup>Required</sup> <a name="elementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreams"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsList getElementaryStreams();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList">TranscoderJobTemplateConfigElementaryStreamsList</a>

---

##### `encryptions`<sup>Required</sup> <a name="encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptions"></a>

```java
public TranscoderJobTemplateConfigEncryptionsList getEncryptions();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList">TranscoderJobTemplateConfigEncryptionsList</a>

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputs"></a>

```java
public TranscoderJobTemplateConfigInputsList getInputs();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList">TranscoderJobTemplateConfigInputsList</a>

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifests"></a>

```java
public TranscoderJobTemplateConfigManifestsList getManifests();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList">TranscoderJobTemplateConfigManifestsList</a>

---

##### `muxStreams`<sup>Required</sup> <a name="muxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreams"></a>

```java
public TranscoderJobTemplateConfigMuxStreamsList getMuxStreams();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList">TranscoderJobTemplateConfigMuxStreamsList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.output"></a>

```java
public TranscoderJobTemplateConfigOutputOutputReference getOutput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference">TranscoderJobTemplateConfigOutputOutputReference</a>

---

##### `overlays`<sup>Required</sup> <a name="overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlays"></a>

```java
public TranscoderJobTemplateConfigOverlaysList getOverlays();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList">TranscoderJobTemplateConfigOverlaysList</a>

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestination"></a>

```java
public TranscoderJobTemplateConfigPubsubDestinationOutputReference getPubsubDestination();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference">TranscoderJobTemplateConfigPubsubDestinationOutputReference</a>

---

##### `adBreaksInput`<sup>Optional</sup> <a name="adBreaksInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaksInput"></a>

```java
public java.lang.Object getAdBreaksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>>

---

##### `editListInput`<sup>Optional</sup> <a name="editListInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editListInput"></a>

```java
public java.lang.Object getEditListInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>>

---

##### `elementaryStreamsInput`<sup>Optional</sup> <a name="elementaryStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput"></a>

```java
public java.lang.Object getElementaryStreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>>

---

##### `encryptionsInput`<sup>Optional</sup> <a name="encryptionsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptionsInput"></a>

```java
public java.lang.Object getEncryptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>>

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputsInput"></a>

```java
public java.lang.Object getInputsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>>

---

##### `manifestsInput`<sup>Optional</sup> <a name="manifestsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifestsInput"></a>

```java
public java.lang.Object getManifestsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>>

---

##### `muxStreamsInput`<sup>Optional</sup> <a name="muxStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput"></a>

```java
public java.lang.Object getMuxStreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>>

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.outputInput"></a>

```java
public TranscoderJobTemplateConfigOutput getOutputInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---

##### `overlaysInput`<sup>Optional</sup> <a name="overlaysInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlaysInput"></a>

```java
public java.lang.Object getOverlaysInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>>

---

##### `pubsubDestinationInput`<sup>Optional</sup> <a name="pubsubDestinationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput"></a>

```java
public TranscoderJobTemplateConfigPubsubDestination getPubsubDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---


### TranscoderJobTemplateConfigEditListStructList <a name="TranscoderJobTemplateConfigEditListStructList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEditListStructList;

new TranscoderJobTemplateConfigEditListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get"></a>

```java
public TranscoderJobTemplateConfigEditListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>>

---


### TranscoderJobTemplateConfigEditListStructOutputReference <a name="TranscoderJobTemplateConfigEditListStructOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEditListStructOutputReference;

new TranscoderJobTemplateConfigEditListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetInputs">resetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset">resetStartTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputs` <a name="resetInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetInputs"></a>

```java
public void resetInputs()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetStartTimeOffset` <a name="resetStartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```java
public void resetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput">inputsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput"></a>

```java
public java.util.List<java.lang.String> getInputsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```java
public java.lang.String getStartTimeOffsetInput();
```

- *Type:* java.lang.String

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>

---


### TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference;

new TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">resetChannelCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">resetChannelLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec">resetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">resetSampleRateHertz</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelCount` <a name="resetChannelCount" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```java
public void resetChannelCount()
```

##### `resetChannelLayout` <a name="resetChannelLayout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```java
public void resetChannelLayout()
```

##### `resetCodec` <a name="resetCodec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```java
public void resetCodec()
```

##### `resetSampleRateHertz` <a name="resetSampleRateHertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```java
public void resetSampleRateHertz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">bitrateBpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">channelCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">channelLayoutInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">codecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">sampleRateHertzInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">bitrateBps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">channelCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">channelLayout</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec">codec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">sampleRateHertz</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bitrateBpsInput`<sup>Optional</sup> <a name="bitrateBpsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```java
public java.lang.Number getBitrateBpsInput();
```

- *Type:* java.lang.Number

---

##### `channelCountInput`<sup>Optional</sup> <a name="channelCountInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```java
public java.lang.Number getChannelCountInput();
```

- *Type:* java.lang.Number

---

##### `channelLayoutInput`<sup>Optional</sup> <a name="channelLayoutInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```java
public java.util.List<java.lang.String> getChannelLayoutInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `codecInput`<sup>Optional</sup> <a name="codecInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```java
public java.lang.String getCodecInput();
```

- *Type:* java.lang.String

---

##### `sampleRateHertzInput`<sup>Optional</sup> <a name="sampleRateHertzInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```java
public java.lang.Number getSampleRateHertzInput();
```

- *Type:* java.lang.Number

---

##### `bitrateBps`<sup>Required</sup> <a name="bitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```java
public java.lang.Number getBitrateBps();
```

- *Type:* java.lang.Number

---

##### `channelCount`<sup>Required</sup> <a name="channelCount" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```java
public java.lang.Number getChannelCount();
```

- *Type:* java.lang.Number

---

##### `channelLayout`<sup>Required</sup> <a name="channelLayout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```java
public java.util.List<java.lang.String> getChannelLayout();
```

- *Type:* java.util.List<java.lang.String>

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```java
public java.lang.String getCodec();
```

- *Type:* java.lang.String

---

##### `sampleRateHertz`<sup>Required</sup> <a name="sampleRateHertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```java
public java.lang.Number getSampleRateHertz();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsAudioStream getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---


### TranscoderJobTemplateConfigElementaryStreamsList <a name="TranscoderJobTemplateConfigElementaryStreamsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsList;

new TranscoderJobTemplateConfigElementaryStreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>>

---


### TranscoderJobTemplateConfigElementaryStreamsOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsOutputReference;

new TranscoderJobTemplateConfigElementaryStreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream">putAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream">putVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream">resetAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream">resetVideoStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioStream` <a name="putAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream"></a>

```java
public void putAudioStream(TranscoderJobTemplateConfigElementaryStreamsAudioStream value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `putVideoStream` <a name="putVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream"></a>

```java
public void putVideoStream(TranscoderJobTemplateConfigElementaryStreamsVideoStream value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `resetAudioStream` <a name="resetAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```java
public void resetAudioStream()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetVideoStream` <a name="resetVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```java
public void resetVideoStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream">audioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream">videoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput">audioStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput">videoStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioStream`<sup>Required</sup> <a name="audioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference getAudioStream();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `videoStream`<sup>Required</sup> <a name="videoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference getVideoStream();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `audioStreamInput`<sup>Optional</sup> <a name="audioStreamInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsAudioStream getAudioStreamInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `videoStreamInput`<sup>Optional</sup> <a name="videoStreamInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStream getVideoStreamInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">putHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">putSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">resetCrfLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">resetEntropyCoder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">resetGopDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">resetHeightPixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">resetHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">resetPixelFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">resetPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">resetRateControlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">resetSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">resetVbvFullnessBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">resetVbvSizeBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">resetWidthPixels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHlg` <a name="putHlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```java
public void putHlg(TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `putSdr` <a name="putSdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```java
public void putSdr(TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `resetCrfLevel` <a name="resetCrfLevel" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```java
public void resetCrfLevel()
```

##### `resetEntropyCoder` <a name="resetEntropyCoder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```java
public void resetEntropyCoder()
```

##### `resetGopDuration` <a name="resetGopDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```java
public void resetGopDuration()
```

##### `resetHeightPixels` <a name="resetHeightPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```java
public void resetHeightPixels()
```

##### `resetHlg` <a name="resetHlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```java
public void resetHlg()
```

##### `resetPixelFormat` <a name="resetPixelFormat" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```java
public void resetPixelFormat()
```

##### `resetPreset` <a name="resetPreset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```java
public void resetPreset()
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetRateControlMode` <a name="resetRateControlMode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```java
public void resetRateControlMode()
```

##### `resetSdr` <a name="resetSdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```java
public void resetSdr()
```

##### `resetVbvFullnessBits` <a name="resetVbvFullnessBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```java
public void resetVbvFullnessBits()
```

##### `resetVbvSizeBits` <a name="resetVbvSizeBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```java
public void resetVbvSizeBits()
```

##### `resetWidthPixels` <a name="resetWidthPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```java
public void resetWidthPixels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">bitrateBpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">crfLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">entropyCoderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">frameRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">gopDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">heightPixelsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">hlgInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">pixelFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">presetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">rateControlModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">sdrInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">vbvFullnessBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">vbvSizeBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">widthPixelsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">bitrateBps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">crfLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">entropyCoder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">frameRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">gopDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">heightPixels</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">pixelFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">preset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">rateControlMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">vbvFullnessBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">vbvSizeBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">widthPixels</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hlg`<sup>Required</sup> <a name="hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference getHlg();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `sdr`<sup>Required</sup> <a name="sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference getSdr();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `bitrateBpsInput`<sup>Optional</sup> <a name="bitrateBpsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```java
public java.lang.Number getBitrateBpsInput();
```

- *Type:* java.lang.Number

---

##### `crfLevelInput`<sup>Optional</sup> <a name="crfLevelInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```java
public java.lang.Number getCrfLevelInput();
```

- *Type:* java.lang.Number

---

##### `entropyCoderInput`<sup>Optional</sup> <a name="entropyCoderInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```java
public java.lang.String getEntropyCoderInput();
```

- *Type:* java.lang.String

---

##### `frameRateInput`<sup>Optional</sup> <a name="frameRateInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```java
public java.lang.Number getFrameRateInput();
```

- *Type:* java.lang.Number

---

##### `gopDurationInput`<sup>Optional</sup> <a name="gopDurationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```java
public java.lang.String getGopDurationInput();
```

- *Type:* java.lang.String

---

##### `heightPixelsInput`<sup>Optional</sup> <a name="heightPixelsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```java
public java.lang.Number getHeightPixelsInput();
```

- *Type:* java.lang.Number

---

##### `hlgInput`<sup>Optional</sup> <a name="hlgInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg getHlgInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `pixelFormatInput`<sup>Optional</sup> <a name="pixelFormatInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```java
public java.lang.String getPixelFormatInput();
```

- *Type:* java.lang.String

---

##### `presetInput`<sup>Optional</sup> <a name="presetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```java
public java.lang.String getPresetInput();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `rateControlModeInput`<sup>Optional</sup> <a name="rateControlModeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```java
public java.lang.String getRateControlModeInput();
```

- *Type:* java.lang.String

---

##### `sdrInput`<sup>Optional</sup> <a name="sdrInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr getSdrInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `vbvFullnessBitsInput`<sup>Optional</sup> <a name="vbvFullnessBitsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```java
public java.lang.Number getVbvFullnessBitsInput();
```

- *Type:* java.lang.Number

---

##### `vbvSizeBitsInput`<sup>Optional</sup> <a name="vbvSizeBitsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```java
public java.lang.Number getVbvSizeBitsInput();
```

- *Type:* java.lang.Number

---

##### `widthPixelsInput`<sup>Optional</sup> <a name="widthPixelsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```java
public java.lang.Number getWidthPixelsInput();
```

- *Type:* java.lang.Number

---

##### `bitrateBps`<sup>Required</sup> <a name="bitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```java
public java.lang.Number getBitrateBps();
```

- *Type:* java.lang.Number

---

##### `crfLevel`<sup>Required</sup> <a name="crfLevel" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```java
public java.lang.Number getCrfLevel();
```

- *Type:* java.lang.Number

---

##### `entropyCoder`<sup>Required</sup> <a name="entropyCoder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```java
public java.lang.String getEntropyCoder();
```

- *Type:* java.lang.String

---

##### `frameRate`<sup>Required</sup> <a name="frameRate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```java
public java.lang.Number getFrameRate();
```

- *Type:* java.lang.Number

---

##### `gopDuration`<sup>Required</sup> <a name="gopDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```java
public java.lang.String getGopDuration();
```

- *Type:* java.lang.String

---

##### `heightPixels`<sup>Required</sup> <a name="heightPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```java
public java.lang.Number getHeightPixels();
```

- *Type:* java.lang.Number

---

##### `pixelFormat`<sup>Required</sup> <a name="pixelFormat" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```java
public java.lang.String getPixelFormat();
```

- *Type:* java.lang.String

---

##### `preset`<sup>Required</sup> <a name="preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```java
public java.lang.String getPreset();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `rateControlMode`<sup>Required</sup> <a name="rateControlMode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```java
public java.lang.String getRateControlMode();
```

- *Type:* java.lang.String

---

##### `vbvFullnessBits`<sup>Required</sup> <a name="vbvFullnessBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```java
public java.lang.Number getVbvFullnessBits();
```

- *Type:* java.lang.Number

---

##### `vbvSizeBits`<sup>Required</sup> <a name="vbvSizeBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```java
public java.lang.Number getVbvSizeBits();
```

- *Type:* java.lang.Number

---

##### `widthPixels`<sup>Required</sup> <a name="widthPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```java
public java.lang.Number getWidthPixels();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264">putH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264">resetH264</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putH264` <a name="putH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```java
public void putH264(TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `resetH264` <a name="resetH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```java
public void resetH264()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">h264Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `h264`<sup>Required</sup> <a name="h264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference getH264();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `h264Input`<sup>Optional</sup> <a name="h264Input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 getH264Input();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigElementaryStreamsVideoStream getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---


### TranscoderJobTemplateConfigEncryptionsAes128OutputReference <a name="TranscoderJobTemplateConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsAes128OutputReference;

new TranscoderJobTemplateConfigEncryptionsAes128OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigEncryptionsAes128 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey">putClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay">putFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready">putPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine">putWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey">resetClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay">resetFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready">resetPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine">resetWidevine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClearkey` <a name="putClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```java
public void putClearkey(TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `putFairplay` <a name="putFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```java
public void putFairplay(TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `putPlayready` <a name="putPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```java
public void putPlayready(TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `putWidevine` <a name="putWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```java
public void putWidevine(TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `resetClearkey` <a name="resetClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```java
public void resetClearkey()
```

##### `resetFairplay` <a name="resetFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```java
public void resetFairplay()
```

##### `resetPlayready` <a name="resetPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```java
public void resetPlayready()
```

##### `resetWidevine` <a name="resetWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```java
public void resetWidevine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">clearkeyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">fairplayInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">playreadyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">widevineInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clearkey`<sup>Required</sup> <a name="clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference getClearkey();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `fairplay`<sup>Required</sup> <a name="fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference getFairplay();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `playready`<sup>Required</sup> <a name="playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference getPlayready();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `widevine`<sup>Required</sup> <a name="widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference getWidevine();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `clearkeyInput`<sup>Optional</sup> <a name="clearkeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey getClearkeyInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `fairplayInput`<sup>Optional</sup> <a name="fairplayInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay getFairplayInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `playreadyInput`<sup>Optional</sup> <a name="playreadyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready getPlayreadyInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `widevineInput`<sup>Optional</sup> <a name="widevineInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine getWidevineInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystems getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---


### TranscoderJobTemplateConfigEncryptionsList <a name="TranscoderJobTemplateConfigEncryptionsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsList;

new TranscoderJobTemplateConfigEncryptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get"></a>

```java
public TranscoderJobTemplateConfigEncryptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>>

---


### TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference <a name="TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference;

new TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigEncryptionsMpegCenc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---


### TranscoderJobTemplateConfigEncryptionsOutputReference <a name="TranscoderJobTemplateConfigEncryptionsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsOutputReference;

new TranscoderJobTemplateConfigEncryptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128">putAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems">putDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc">putMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes">putSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource">putSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128">resetAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems">resetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc">resetMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes">resetSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource">resetSecretManagerKeySource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAes128` <a name="putAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128"></a>

```java
public void putAes128(TranscoderJobTemplateConfigEncryptionsAes128 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `putDrmSystems` <a name="putDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems"></a>

```java
public void putDrmSystems(TranscoderJobTemplateConfigEncryptionsDrmSystems value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `putMpegCenc` <a name="putMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc"></a>

```java
public void putMpegCenc(TranscoderJobTemplateConfigEncryptionsMpegCenc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `putSampleAes` <a name="putSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes"></a>

```java
public void putSampleAes(TranscoderJobTemplateConfigEncryptionsSampleAes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `putSecretManagerKeySource` <a name="putSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```java
public void putSecretManagerKeySource(TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `resetAes128` <a name="resetAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128"></a>

```java
public void resetAes128()
```

##### `resetDrmSystems` <a name="resetDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems"></a>

```java
public void resetDrmSystems()
```

##### `resetMpegCenc` <a name="resetMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc"></a>

```java
public void resetMpegCenc()
```

##### `resetSampleAes` <a name="resetSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes"></a>

```java
public void resetSampleAes()
```

##### `resetSecretManagerKeySource` <a name="resetSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```java
public void resetSecretManagerKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference">TranscoderJobTemplateConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems">drmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc">mpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes">sampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource">secretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input">aes128Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput">drmSystemsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput">mpegCencInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput">sampleAesInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">secretManagerKeySourceInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aes128`<sup>Required</sup> <a name="aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128"></a>

```java
public TranscoderJobTemplateConfigEncryptionsAes128OutputReference getAes128();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference">TranscoderJobTemplateConfigEncryptionsAes128OutputReference</a>

---

##### `drmSystems`<sup>Required</sup> <a name="drmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference getDrmSystems();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `mpegCenc`<sup>Required</sup> <a name="mpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc"></a>

```java
public TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference getMpegCenc();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a>

---

##### `sampleAes`<sup>Required</sup> <a name="sampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes"></a>

```java
public TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference getSampleAes();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a>

---

##### `secretManagerKeySource`<sup>Required</sup> <a name="secretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```java
public TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference getSecretManagerKeySource();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `aes128Input`<sup>Optional</sup> <a name="aes128Input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input"></a>

```java
public TranscoderJobTemplateConfigEncryptionsAes128 getAes128Input();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `drmSystemsInput`<sup>Optional</sup> <a name="drmSystemsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```java
public TranscoderJobTemplateConfigEncryptionsDrmSystems getDrmSystemsInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mpegCencInput`<sup>Optional</sup> <a name="mpegCencInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```java
public TranscoderJobTemplateConfigEncryptionsMpegCenc getMpegCencInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `sampleAesInput`<sup>Optional</sup> <a name="sampleAesInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```java
public TranscoderJobTemplateConfigEncryptionsSampleAes getSampleAesInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `secretManagerKeySourceInput`<sup>Optional</sup> <a name="secretManagerKeySourceInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```java
public TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource getSecretManagerKeySourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>

---


### TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference <a name="TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference;

new TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigEncryptionsSampleAes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---


### TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference <a name="TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference;

new TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```java
public java.lang.String getSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---


### TranscoderJobTemplateConfigInputsList <a name="TranscoderJobTemplateConfigInputsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigInputsList;

new TranscoderJobTemplateConfigInputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get"></a>

```java
public TranscoderJobTemplateConfigInputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>>

---


### TranscoderJobTemplateConfigInputsOutputReference <a name="TranscoderJobTemplateConfigInputsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigInputsOutputReference;

new TranscoderJobTemplateConfigInputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>

---


### TranscoderJobTemplateConfigManifestsList <a name="TranscoderJobTemplateConfigManifestsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigManifestsList;

new TranscoderJobTemplateConfigManifestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get"></a>

```java
public TranscoderJobTemplateConfigManifestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>>

---


### TranscoderJobTemplateConfigManifestsOutputReference <a name="TranscoderJobTemplateConfigManifestsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigManifestsOutputReference;

new TranscoderJobTemplateConfigManifestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams">resetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileName` <a name="resetFileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetFileName"></a>

```java
public void resetFileName()
```

##### `resetMuxStreams` <a name="resetMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams"></a>

```java
public void resetMuxStreams()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput">muxStreamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams">muxStreams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `muxStreamsInput`<sup>Optional</sup> <a name="muxStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput"></a>

```java
public java.util.List<java.lang.String> getMuxStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `muxStreams`<sup>Required</sup> <a name="muxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams"></a>

```java
public java.util.List<java.lang.String> getMuxStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>

---


### TranscoderJobTemplateConfigMuxStreamsList <a name="TranscoderJobTemplateConfigMuxStreamsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigMuxStreamsList;

new TranscoderJobTemplateConfigMuxStreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get"></a>

```java
public TranscoderJobTemplateConfigMuxStreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>>

---


### TranscoderJobTemplateConfigMuxStreamsOutputReference <a name="TranscoderJobTemplateConfigMuxStreamsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigMuxStreamsOutputReference;

new TranscoderJobTemplateConfigMuxStreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings">putSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams">resetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId">resetEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings">resetSegmentSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSegmentSettings` <a name="putSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```java
public void putSegmentSettings(TranscoderJobTemplateConfigMuxStreamsSegmentSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer"></a>

```java
public void resetContainer()
```

##### `resetElementaryStreams` <a name="resetElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```java
public void resetElementaryStreams()
```

##### `resetEncryptionId` <a name="resetEncryptionId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```java
public void resetEncryptionId()
```

##### `resetFileName` <a name="resetFileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName"></a>

```java
public void resetFileName()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetSegmentSettings` <a name="resetSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```java
public void resetSegmentSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings">segmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput">elementaryStreamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput">encryptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput">segmentSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams">elementaryStreams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId">encryptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentSettings`<sup>Required</sup> <a name="segmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```java
public TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference getSegmentSettings();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `elementaryStreamsInput`<sup>Optional</sup> <a name="elementaryStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```java
public java.util.List<java.lang.String> getElementaryStreamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryptionIdInput`<sup>Optional</sup> <a name="encryptionIdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```java
public java.lang.String getEncryptionIdInput();
```

- *Type:* java.lang.String

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `segmentSettingsInput`<sup>Optional</sup> <a name="segmentSettingsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```java
public TranscoderJobTemplateConfigMuxStreamsSegmentSettings getSegmentSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `elementaryStreams`<sup>Required</sup> <a name="elementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```java
public java.util.List<java.lang.String> getElementaryStreams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryptionId`<sup>Required</sup> <a name="encryptionId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId"></a>

```java
public java.lang.String getEncryptionId();
```

- *Type:* java.lang.String

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>

---


### TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference <a name="TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference;

new TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">resetSegmentDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSegmentDuration` <a name="resetSegmentDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```java
public void resetSegmentDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">segmentDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">segmentDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentDurationInput`<sup>Optional</sup> <a name="segmentDurationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```java
public java.lang.String getSegmentDurationInput();
```

- *Type:* java.lang.String

---

##### `segmentDuration`<sup>Required</sup> <a name="segmentDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```java
public java.lang.String getSegmentDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigMuxStreamsSegmentSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---


### TranscoderJobTemplateConfigOutputOutputReference <a name="TranscoderJobTemplateConfigOutputOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOutputOutputReference;

new TranscoderJobTemplateConfigOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference;

new TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">putXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">resetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">resetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">resetXy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putXy` <a name="putXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```java
public void putXy(TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `resetEndTimeOffset` <a name="resetEndTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```java
public void resetEndTimeOffset()
```

##### `resetStartTimeOffset` <a name="resetStartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```java
public void resetStartTimeOffset()
```

##### `resetXy` <a name="resetXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```java
public void resetXy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">endTimeOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">fadeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">xyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">fadeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xy`<sup>Required</sup> <a name="xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference getXy();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `endTimeOffsetInput`<sup>Optional</sup> <a name="endTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```java
public java.lang.String getEndTimeOffsetInput();
```

- *Type:* java.lang.String

---

##### `fadeTypeInput`<sup>Optional</sup> <a name="fadeTypeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```java
public java.lang.String getFadeTypeInput();
```

- *Type:* java.lang.String

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```java
public java.lang.String getStartTimeOffsetInput();
```

- *Type:* java.lang.String

---

##### `xyInput`<sup>Optional</sup> <a name="xyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy getXyInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```java
public java.lang.String getEndTimeOffset();
```

- *Type:* java.lang.String

---

##### `fadeType`<sup>Required</sup> <a name="fadeType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```java
public java.lang.String getFadeType();
```

- *Type:* java.lang.String

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference;

new TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">resetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">resetY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetX` <a name="resetX" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```java
public void resetX()
```

##### `resetY` <a name="resetY" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```java
public void resetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">xInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">yInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">x</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">y</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xInput`<sup>Optional</sup> <a name="xInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```java
public java.lang.Number getXInput();
```

- *Type:* java.lang.Number

---

##### `yInput`<sup>Optional</sup> <a name="yInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```java
public java.lang.Number getYInput();
```

- *Type:* java.lang.Number

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```java
public java.lang.Number getX();
```

- *Type:* java.lang.Number

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```java
public java.lang.Number getY();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsList <a name="TranscoderJobTemplateConfigOverlaysAnimationsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysAnimationsList;

new TranscoderJobTemplateConfigOverlaysAnimationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>>

---


### TranscoderJobTemplateConfigOverlaysAnimationsOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference;

new TranscoderJobTemplateConfigOverlaysAnimationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade">putAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade">resetAnimationFade</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnimationFade` <a name="putAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```java
public void putAnimationFade(TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `resetAnimationFade` <a name="resetAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```java
public void resetAnimationFade()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade">animationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput">animationFadeInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `animationFade`<sup>Required</sup> <a name="animationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference getAnimationFade();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `animationFadeInput`<sup>Optional</sup> <a name="animationFadeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade getAnimationFadeInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>

---


### TranscoderJobTemplateConfigOverlaysImageOutputReference <a name="TranscoderJobTemplateConfigOverlaysImageOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysImageOutputReference;

new TranscoderJobTemplateConfigOverlaysImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigOverlaysImage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---


### TranscoderJobTemplateConfigOverlaysList <a name="TranscoderJobTemplateConfigOverlaysList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysList;

new TranscoderJobTemplateConfigOverlaysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get"></a>

```java
public TranscoderJobTemplateConfigOverlaysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>>

---


### TranscoderJobTemplateConfigOverlaysOutputReference <a name="TranscoderJobTemplateConfigOverlaysOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigOverlaysOutputReference;

new TranscoderJobTemplateConfigOverlaysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations">putAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations">resetAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetImage">resetImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnimations` <a name="putAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations"></a>

```java
public void putAnimations(IResolvable OR java.util.List<TranscoderJobTemplateConfigOverlaysAnimations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>>

---

##### `putImage` <a name="putImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage"></a>

```java
public void putImage(TranscoderJobTemplateConfigOverlaysImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---

##### `resetAnimations` <a name="resetAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations"></a>

```java
public void resetAnimations()
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetImage"></a>

```java
public void resetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animations">animations</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList">TranscoderJobTemplateConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.image">image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference">TranscoderJobTemplateConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput">animationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput">imageInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `animations`<sup>Required</sup> <a name="animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animations"></a>

```java
public TranscoderJobTemplateConfigOverlaysAnimationsList getAnimations();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList">TranscoderJobTemplateConfigOverlaysAnimationsList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.image"></a>

```java
public TranscoderJobTemplateConfigOverlaysImageOutputReference getImage();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference">TranscoderJobTemplateConfigOverlaysImageOutputReference</a>

---

##### `animationsInput`<sup>Optional</sup> <a name="animationsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput"></a>

```java
public java.lang.Object getAnimationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput"></a>

```java
public TranscoderJobTemplateConfigOverlaysImage getImageInput();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>

---


### TranscoderJobTemplateConfigPubsubDestinationOutputReference <a name="TranscoderJobTemplateConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateConfigPubsubDestinationOutputReference;

new TranscoderJobTemplateConfigPubsubDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic"></a>

```java
public void resetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue"></a>

```java
public TranscoderJobTemplateConfigPubsubDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---


### TranscoderJobTemplateTimeoutsOutputReference <a name="TranscoderJobTemplateTimeoutsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.transcoder_job_template.TranscoderJobTemplateTimeoutsOutputReference;

new TranscoderJobTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

---



