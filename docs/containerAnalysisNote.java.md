# `containerAnalysisNote` Submodule <a name="`containerAnalysisNote` Submodule" id="@cdktf/provider-google.containerAnalysisNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisNote <a name="ContainerAnalysisNote" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note google_container_analysis_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNote;

ContainerAnalysisNote.Builder.create(Construct scope, java.lang.String id)
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
    .attestationAuthority(ContainerAnalysisNoteAttestationAuthority)
    .name(java.lang.String)
//  .expirationTime(java.lang.String)
//  .id(java.lang.String)
//  .longDescription(java.lang.String)
//  .project(java.lang.String)
//  .relatedNoteNames(java.util.List<java.lang.String>)
//  .relatedUrl(IResolvable)
//  .relatedUrl(java.util.List<ContainerAnalysisNoteRelatedUrl>)
//  .shortDescription(java.lang.String)
//  .timeouts(ContainerAnalysisNoteTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.attestationAuthority">attestationAuthority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.longDescription">longDescription</a></code> | <code>java.lang.String</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.relatedNoteNames">relatedNoteNames</a></code> | <code>java.util.List<java.lang.String></code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.relatedUrl">relatedUrl</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>></code> | related_url block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attestationAuthority`<sup>Required</sup> <a name="attestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.attestationAuthority"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#attestation_authority ContainerAnalysisNote#attestation_authority}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#name ContainerAnalysisNote#name}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.expirationTime"></a>

- *Type:* java.lang.String

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#expiration_time ContainerAnalysisNote#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.longDescription"></a>

- *Type:* java.lang.String

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#long_description ContainerAnalysisNote#long_description}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}.

---

##### `relatedNoteNames`<sup>Optional</sup> <a name="relatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.relatedNoteNames"></a>

- *Type:* java.util.List<java.lang.String>

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#related_note_names ContainerAnalysisNote#related_note_names}

---

##### `relatedUrl`<sup>Optional</sup> <a name="relatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.relatedUrl"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>>

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#related_url ContainerAnalysisNote#related_url}

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.shortDescription"></a>

- *Type:* java.lang.String

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#short_description ContainerAnalysisNote#short_description}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#timeouts ContainerAnalysisNote#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority">putAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl">putRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetLongDescription">resetLongDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedNoteNames">resetRelatedNoteNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedUrl">resetRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetShortDescription">resetShortDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttestationAuthority` <a name="putAttestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority"></a>

```java
public void putAttestationAuthority(ContainerAnalysisNoteAttestationAuthority value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---

##### `putRelatedUrl` <a name="putRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl"></a>

```java
public void putRelatedUrl(IResolvable OR java.util.List<ContainerAnalysisNoteRelatedUrl> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts"></a>

```java
public void putTimeouts(ContainerAnalysisNoteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

---

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetExpirationTime"></a>

```java
public void resetExpirationTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetId"></a>

```java
public void resetId()
```

##### `resetLongDescription` <a name="resetLongDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetLongDescription"></a>

```java
public void resetLongDescription()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetProject"></a>

```java
public void resetProject()
```

##### `resetRelatedNoteNames` <a name="resetRelatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedNoteNames"></a>

```java
public void resetRelatedNoteNames()
```

##### `resetRelatedUrl` <a name="resetRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedUrl"></a>

```java
public void resetRelatedUrl()
```

##### `resetShortDescription` <a name="resetShortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetShortDescription"></a>

```java
public void resetShortDescription()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAnalysisNote resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNote;

ContainerAnalysisNote.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNote;

ContainerAnalysisNote.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNote;

ContainerAnalysisNote.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNote;

ContainerAnalysisNote.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerAnalysisNote.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerAnalysisNote resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerAnalysisNote to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerAnalysisNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAnalysisNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthority">attestationAuthority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference">ContainerAnalysisNoteAttestationAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrl">relatedUrl</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList">ContainerAnalysisNoteRelatedUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference">ContainerAnalysisNoteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthorityInput">attestationAuthorityInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTimeInput">expirationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescriptionInput">longDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNamesInput">relatedNoteNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrlInput">relatedUrlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescriptionInput">shortDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNames">relatedNoteNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attestationAuthority`<sup>Required</sup> <a name="attestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthority"></a>

```java
public ContainerAnalysisNoteAttestationAuthorityOutputReference getAttestationAuthority();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference">ContainerAnalysisNoteAttestationAuthorityOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `relatedUrl`<sup>Required</sup> <a name="relatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrl"></a>

```java
public ContainerAnalysisNoteRelatedUrlList getRelatedUrl();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList">ContainerAnalysisNoteRelatedUrlList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeouts"></a>

```java
public ContainerAnalysisNoteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference">ContainerAnalysisNoteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `attestationAuthorityInput`<sup>Optional</sup> <a name="attestationAuthorityInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthorityInput"></a>

```java
public ContainerAnalysisNoteAttestationAuthority getAttestationAuthorityInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTimeInput"></a>

```java
public java.lang.String getExpirationTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `longDescriptionInput`<sup>Optional</sup> <a name="longDescriptionInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescriptionInput"></a>

```java
public java.lang.String getLongDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `relatedNoteNamesInput`<sup>Optional</sup> <a name="relatedNoteNamesInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNamesInput"></a>

```java
public java.util.List<java.lang.String> getRelatedNoteNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `relatedUrlInput`<sup>Optional</sup> <a name="relatedUrlInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrlInput"></a>

```java
public java.lang.Object getRelatedUrlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>>

---

##### `shortDescriptionInput`<sup>Optional</sup> <a name="shortDescriptionInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescriptionInput"></a>

```java
public java.lang.String getShortDescriptionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `longDescription`<sup>Required</sup> <a name="longDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `relatedNoteNames`<sup>Required</sup> <a name="relatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNames"></a>

```java
public java.util.List<java.lang.String> getRelatedNoteNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisNoteAttestationAuthority <a name="ContainerAnalysisNoteAttestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteAttestationAuthority;

ContainerAnalysisNoteAttestationAuthority.builder()
    .hint(ContainerAnalysisNoteAttestationAuthorityHint)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | hint block. |

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.property.hint"></a>

```java
public ContainerAnalysisNoteAttestationAuthorityHint getHint();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

hint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#hint ContainerAnalysisNote#hint}

---

### ContainerAnalysisNoteAttestationAuthorityHint <a name="ContainerAnalysisNoteAttestationAuthorityHint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteAttestationAuthorityHint;

ContainerAnalysisNoteAttestationAuthorityHint.builder()
    .humanReadableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName">humanReadableName</a></code> | <code>java.lang.String</code> | The human readable name of this Attestation Authority, for example "qa". |

---

##### `humanReadableName`<sup>Required</sup> <a name="humanReadableName" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName"></a>

```java
public java.lang.String getHumanReadableName();
```

- *Type:* java.lang.String

The human readable name of this Attestation Authority, for example "qa".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#human_readable_name ContainerAnalysisNote#human_readable_name}

---

### ContainerAnalysisNoteConfig <a name="ContainerAnalysisNoteConfig" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteConfig;

ContainerAnalysisNoteConfig.builder()
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
    .attestationAuthority(ContainerAnalysisNoteAttestationAuthority)
    .name(java.lang.String)
//  .expirationTime(java.lang.String)
//  .id(java.lang.String)
//  .longDescription(java.lang.String)
//  .project(java.lang.String)
//  .relatedNoteNames(java.util.List<java.lang.String>)
//  .relatedUrl(IResolvable)
//  .relatedUrl(java.util.List<ContainerAnalysisNoteRelatedUrl>)
//  .shortDescription(java.lang.String)
//  .timeouts(ContainerAnalysisNoteTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.attestationAuthority">attestationAuthority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedNoteNames">relatedNoteNames</a></code> | <code>java.util.List<java.lang.String></code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedUrl">relatedUrl</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>></code> | related_url block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attestationAuthority`<sup>Required</sup> <a name="attestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.attestationAuthority"></a>

```java
public ContainerAnalysisNoteAttestationAuthority getAttestationAuthority();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#attestation_authority ContainerAnalysisNote#attestation_authority}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#name ContainerAnalysisNote#name}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#expiration_time ContainerAnalysisNote#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#long_description ContainerAnalysisNote#long_description}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}.

---

##### `relatedNoteNames`<sup>Optional</sup> <a name="relatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedNoteNames"></a>

```java
public java.util.List<java.lang.String> getRelatedNoteNames();
```

- *Type:* java.util.List<java.lang.String>

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#related_note_names ContainerAnalysisNote#related_note_names}

---

##### `relatedUrl`<sup>Optional</sup> <a name="relatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedUrl"></a>

```java
public java.lang.Object getRelatedUrl();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>>

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#related_url ContainerAnalysisNote#related_url}

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#short_description ContainerAnalysisNote#short_description}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.timeouts"></a>

```java
public ContainerAnalysisNoteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#timeouts ContainerAnalysisNote#timeouts}

---

### ContainerAnalysisNoteRelatedUrl <a name="ContainerAnalysisNoteRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteRelatedUrl;

ContainerAnalysisNoteRelatedUrl.builder()
    .url(java.lang.String)
//  .label(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.url">url</a></code> | <code>java.lang.String</code> | Specific URL associated with the resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.label">label</a></code> | <code>java.lang.String</code> | Label to describe usage of the URL. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Specific URL associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#url ContainerAnalysisNote#url}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Label to describe usage of the URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#label ContainerAnalysisNote#label}

---

### ContainerAnalysisNoteTimeouts <a name="ContainerAnalysisNoteTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteTimeouts;

ContainerAnalysisNoteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#create ContainerAnalysisNote#create}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#delete ContainerAnalysisNote#delete}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#update ContainerAnalysisNote#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#create ContainerAnalysisNote#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#delete ContainerAnalysisNote#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/container_analysis_note#update ContainerAnalysisNote#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisNoteAttestationAuthorityHintOutputReference <a name="ContainerAnalysisNoteAttestationAuthorityHintOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteAttestationAuthorityHintOutputReference;

new ContainerAnalysisNoteAttestationAuthorityHintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput">humanReadableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName">humanReadableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `humanReadableNameInput`<sup>Optional</sup> <a name="humanReadableNameInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput"></a>

```java
public java.lang.String getHumanReadableNameInput();
```

- *Type:* java.lang.String

---

##### `humanReadableName`<sup>Required</sup> <a name="humanReadableName" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName"></a>

```java
public java.lang.String getHumanReadableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue"></a>

```java
public ContainerAnalysisNoteAttestationAuthorityHint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---


### ContainerAnalysisNoteAttestationAuthorityOutputReference <a name="ContainerAnalysisNoteAttestationAuthorityOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteAttestationAuthorityOutputReference;

new ContainerAnalysisNoteAttestationAuthorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint">putHint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHint` <a name="putHint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint"></a>

```java
public void putHint(ContainerAnalysisNoteAttestationAuthorityHint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference">ContainerAnalysisNoteAttestationAuthorityHintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput">hintInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint"></a>

```java
public ContainerAnalysisNoteAttestationAuthorityHintOutputReference getHint();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference">ContainerAnalysisNoteAttestationAuthorityHintOutputReference</a>

---

##### `hintInput`<sup>Optional</sup> <a name="hintInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput"></a>

```java
public ContainerAnalysisNoteAttestationAuthorityHint getHintInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue"></a>

```java
public ContainerAnalysisNoteAttestationAuthority getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---


### ContainerAnalysisNoteRelatedUrlList <a name="ContainerAnalysisNoteRelatedUrlList" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteRelatedUrlList;

new ContainerAnalysisNoteRelatedUrlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get"></a>

```java
public ContainerAnalysisNoteRelatedUrlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>>

---


### ContainerAnalysisNoteRelatedUrlOutputReference <a name="ContainerAnalysisNoteRelatedUrlOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteRelatedUrlOutputReference;

new ContainerAnalysisNoteRelatedUrlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resetLabel"></a>

```java
public void resetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>

---


### ContainerAnalysisNoteTimeoutsOutputReference <a name="ContainerAnalysisNoteTimeoutsOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_analysis_note.ContainerAnalysisNoteTimeoutsOutputReference;

new ContainerAnalysisNoteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

---



