# `google_certificate_manager_certificate`

Refer to the Terraform Registory for docs: [`google_certificate_manager_certificate`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate).

# `certificateManagerCertificate` Submodule <a name="`certificateManagerCertificate` Submodule" id="@cdktf/provider-google.certificateManagerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificate <a name="CertificateManagerCertificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate google_certificate_manager_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificate;

CertificateManagerCertificate.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .managed(CertificateManagerCertificateManaged)
//  .project(java.lang.String)
//  .scope(java.lang.String)
//  .selfManaged(CertificateManagerCertificateSelfManaged)
//  .timeouts(CertificateManagerCertificateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the Certificate resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The scope of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.selfManaged">selfManaged</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name of the certificate.

Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#name CertificateManagerCertificate#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#description CertificateManagerCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the Certificate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#labels CertificateManagerCertificate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#location CertificateManagerCertificate#location}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.managed"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#managed CertificateManagerCertificate#managed}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The scope of the certificate.

DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.

EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.

ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#scope CertificateManagerCertificate#scope}

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.selfManaged"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#self_managed CertificateManagerCertificate#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#timeouts CertificateManagerCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged">putManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putManaged` <a name="putManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged"></a>

```java
public void putManaged(CertificateManagerCertificateManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

---

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged"></a>

```java
public void putSelfManaged(CertificateManagerCertificateSelfManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts"></a>

```java
public void putTimeouts(CertificateManagerCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetManaged"></a>

```java
public void resetManaged()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetProject"></a>

```java
public void resetProject()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetScope"></a>

```java
public void resetScope()
```

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetSelfManaged"></a>

```java
public void resetSelfManaged()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateManagerCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificate;

CertificateManagerCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificate;

CertificateManagerCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificate;

CertificateManagerCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificate;

CertificateManagerCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CertificateManagerCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CertificateManagerCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CertificateManagerCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CertificateManagerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference">CertificateManagerCertificateManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference">CertificateManagerCertificateSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference">CertificateManagerCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managedInput">managedInput</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManagedInput">selfManagedInput</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managed"></a>

```java
public CertificateManagerCertificateManagedOutputReference getManaged();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference">CertificateManagerCertificateManagedOutputReference</a>

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManaged"></a>

```java
public CertificateManagerCertificateSelfManagedOutputReference getSelfManaged();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference">CertificateManagerCertificateSelfManagedOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeouts"></a>

```java
public CertificateManagerCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference">CertificateManagerCertificateTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managedInput"></a>

```java
public CertificateManagerCertificateManaged getManagedInput();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManagedInput"></a>

```java
public CertificateManagerCertificateSelfManaged getSelfManagedInput();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateConfig <a name="CertificateManagerCertificateConfig" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateConfig;

CertificateManagerCertificateConfig.builder()
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .managed(CertificateManagerCertificateManaged)
//  .project(java.lang.String)
//  .scope(java.lang.String)
//  .selfManaged(CertificateManagerCertificateSelfManaged)
//  .timeouts(CertificateManagerCertificateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the Certificate resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name of the certificate.

Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#name CertificateManagerCertificate#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#description CertificateManagerCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the Certificate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#labels CertificateManagerCertificate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#location CertificateManagerCertificate#location}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.managed"></a>

```java
public CertificateManagerCertificateManaged getManaged();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#managed CertificateManagerCertificate#managed}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope of the certificate.

DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.

EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.

ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#scope CertificateManagerCertificate#scope}

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.selfManaged"></a>

```java
public CertificateManagerCertificateSelfManaged getSelfManaged();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#self_managed CertificateManagerCertificate#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.timeouts"></a>

```java
public CertificateManagerCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#timeouts CertificateManagerCertificate#timeouts}

---

### CertificateManagerCertificateManaged <a name="CertificateManagerCertificateManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateManaged;

CertificateManagerCertificateManaged.builder()
//  .dnsAuthorizations(java.util.List<java.lang.String>)
//  .domains(java.util.List<java.lang.String>)
//  .issuanceConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.dnsAuthorizations">dnsAuthorizations</a></code> | <code>java.util.List<java.lang.String></code> | Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.issuanceConfig">issuanceConfig</a></code> | <code>java.lang.String</code> | The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*. |

---

##### `dnsAuthorizations`<sup>Optional</sup> <a name="dnsAuthorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.dnsAuthorizations"></a>

```java
public java.util.List<java.lang.String> getDnsAuthorizations();
```

- *Type:* java.util.List<java.lang.String>

Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#dns_authorizations CertificateManagerCertificate#dns_authorizations}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#domains CertificateManagerCertificate#domains}

---

##### `issuanceConfig`<sup>Optional</sup> <a name="issuanceConfig" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.issuanceConfig"></a>

```java
public java.lang.String getIssuanceConfig();
```

- *Type:* java.lang.String

The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*.

If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#issuance_config CertificateManagerCertificate#issuance_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### CertificateManagerCertificateManagedAuthorizationAttemptInfo <a name="CertificateManagerCertificateManagedAuthorizationAttemptInfo" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo;

CertificateManagerCertificateManagedAuthorizationAttemptInfo.builder()
    .build();
```


### CertificateManagerCertificateManagedProvisioningIssue <a name="CertificateManagerCertificateManagedProvisioningIssue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateManagedProvisioningIssue;

CertificateManagerCertificateManagedProvisioningIssue.builder()
    .build();
```


### CertificateManagerCertificateSelfManaged <a name="CertificateManagerCertificateSelfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateSelfManaged;

CertificateManagerCertificateSelfManaged.builder()
//  .certificatePem(java.lang.String)
//  .pemCertificate(java.lang.String)
//  .pemPrivateKey(java.lang.String)
//  .privateKeyPem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.certificatePem">certificatePem</a></code> | <code>java.lang.String</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemPrivateKey">pemPrivateKey</a></code> | <code>java.lang.String</code> | The private key of the leaf certificate in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | The private key of the leaf certificate in PEM-encoded form. |

---

##### `certificatePem`<sup>Optional</sup> <a name="certificatePem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.certificatePem"></a>

```java
public java.lang.String getCertificatePem();
```

- *Type:* java.lang.String

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#certificate_pem CertificateManagerCertificate#certificate_pem}

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#pem_certificate CertificateManagerCertificate#pem_certificate}

---

##### `pemPrivateKey`<sup>Optional</sup> <a name="pemPrivateKey" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemPrivateKey"></a>

```java
public java.lang.String getPemPrivateKey();
```

- *Type:* java.lang.String

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#pem_private_key CertificateManagerCertificate#pem_private_key}

---

##### `privateKeyPem`<sup>Optional</sup> <a name="privateKeyPem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#private_key_pem CertificateManagerCertificate#private_key_pem}

---

### CertificateManagerCertificateTimeouts <a name="CertificateManagerCertificateTimeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateTimeouts;

CertificateManagerCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#create CertificateManagerCertificate#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#delete CertificateManagerCertificate#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#update CertificateManagerCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#create CertificateManagerCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#delete CertificateManagerCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/certificate_manager_certificate#update CertificateManagerCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateManagedAuthorizationAttemptInfoList <a name="CertificateManagerCertificateManagedAuthorizationAttemptInfoList" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList;

new CertificateManagerCertificateManagedAuthorizationAttemptInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.get"></a>

```java
public CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference <a name="CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference;

new CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo">CertificateManagerCertificateManagedAuthorizationAttemptInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue"></a>

```java
public CertificateManagerCertificateManagedAuthorizationAttemptInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo">CertificateManagerCertificateManagedAuthorizationAttemptInfo</a>

---


### CertificateManagerCertificateManagedOutputReference <a name="CertificateManagerCertificateManagedOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateManagedOutputReference;

new CertificateManagerCertificateManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations">resetDnsAuthorizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetIssuanceConfig">resetIssuanceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsAuthorizations` <a name="resetDnsAuthorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations"></a>

```java
public void resetDnsAuthorizations()
```

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDomains"></a>

```java
public void resetDomains()
```

##### `resetIssuanceConfig` <a name="resetIssuanceConfig" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetIssuanceConfig"></a>

```java
public void resetIssuanceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo">authorizationAttemptInfo</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList">CertificateManagerCertificateManagedAuthorizationAttemptInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.provisioningIssue">provisioningIssue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList">CertificateManagerCertificateManagedProvisioningIssueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput">dnsAuthorizationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput">issuanceConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations">dnsAuthorizations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfig">issuanceConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationAttemptInfo`<sup>Required</sup> <a name="authorizationAttemptInfo" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo"></a>

```java
public CertificateManagerCertificateManagedAuthorizationAttemptInfoList getAuthorizationAttemptInfo();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList">CertificateManagerCertificateManagedAuthorizationAttemptInfoList</a>

---

##### `provisioningIssue`<sup>Required</sup> <a name="provisioningIssue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.provisioningIssue"></a>

```java
public CertificateManagerCertificateManagedProvisioningIssueList getProvisioningIssue();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList">CertificateManagerCertificateManagedProvisioningIssueList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `dnsAuthorizationsInput`<sup>Optional</sup> <a name="dnsAuthorizationsInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput"></a>

```java
public java.util.List<java.lang.String> getDnsAuthorizationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuanceConfigInput`<sup>Optional</sup> <a name="issuanceConfigInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput"></a>

```java
public java.lang.String getIssuanceConfigInput();
```

- *Type:* java.lang.String

---

##### `dnsAuthorizations`<sup>Required</sup> <a name="dnsAuthorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations"></a>

```java
public java.util.List<java.lang.String> getDnsAuthorizations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuanceConfig`<sup>Required</sup> <a name="issuanceConfig" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfig"></a>

```java
public java.lang.String getIssuanceConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.internalValue"></a>

```java
public CertificateManagerCertificateManaged getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

---


### CertificateManagerCertificateManagedProvisioningIssueList <a name="CertificateManagerCertificateManagedProvisioningIssueList" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateManagedProvisioningIssueList;

new CertificateManagerCertificateManagedProvisioningIssueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.get"></a>

```java
public CertificateManagerCertificateManagedProvisioningIssueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificateManagerCertificateManagedProvisioningIssueOutputReference <a name="CertificateManagerCertificateManagedProvisioningIssueOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference;

new CertificateManagerCertificateManagedProvisioningIssueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue">CertificateManagerCertificateManagedProvisioningIssue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue"></a>

```java
public CertificateManagerCertificateManagedProvisioningIssue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue">CertificateManagerCertificateManagedProvisioningIssue</a>

---


### CertificateManagerCertificateSelfManagedOutputReference <a name="CertificateManagerCertificateSelfManagedOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateSelfManagedOutputReference;

new CertificateManagerCertificateSelfManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem">resetCertificatePem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey">resetPemPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem">resetPrivateKeyPem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificatePem` <a name="resetCertificatePem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem"></a>

```java
public void resetCertificatePem()
```

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate"></a>

```java
public void resetPemCertificate()
```

##### `resetPemPrivateKey` <a name="resetPemPrivateKey" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey"></a>

```java
public void resetPemPrivateKey()
```

##### `resetPrivateKeyPem` <a name="resetPrivateKeyPem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem"></a>

```java
public void resetPrivateKeyPem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput">certificatePemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput">pemPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput">privateKeyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePem">certificatePem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey">pemPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificatePemInput`<sup>Optional</sup> <a name="certificatePemInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput"></a>

```java
public java.lang.String getCertificatePemInput();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemPrivateKeyInput`<sup>Optional</sup> <a name="pemPrivateKeyInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput"></a>

```java
public java.lang.String getPemPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="privateKeyPemInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput"></a>

```java
public java.lang.String getPrivateKeyPemInput();
```

- *Type:* java.lang.String

---

##### `certificatePem`<sup>Required</sup> <a name="certificatePem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePem"></a>

```java
public java.lang.String getCertificatePem();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `pemPrivateKey`<sup>Required</sup> <a name="pemPrivateKey" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey"></a>

```java
public java.lang.String getPemPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.internalValue"></a>

```java
public CertificateManagerCertificateSelfManaged getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

---


### CertificateManagerCertificateTimeoutsOutputReference <a name="CertificateManagerCertificateTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate.CertificateManagerCertificateTimeoutsOutputReference;

new CertificateManagerCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>

---



