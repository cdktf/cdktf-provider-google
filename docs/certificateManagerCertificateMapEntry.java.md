# `google_certificate_manager_certificate_map_entry`

Refer to the Terraform Registory for docs: [`google_certificate_manager_certificate_map_entry`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry).

# `certificateManagerCertificateMapEntry` Submodule <a name="`certificateManagerCertificateMapEntry` Submodule" id="@cdktf/provider-google.certificateManagerCertificateMapEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificateMapEntry <a name="CertificateManagerCertificateMapEntry" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry google_certificate_manager_certificate_map_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map_entry.CertificateManagerCertificateMapEntry;

CertificateManagerCertificateMapEntry.Builder.create(Construct scope, java.lang.String id)
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
    .certificates(java.util.List<java.lang.String>)
    .map(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .matcher(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(CertificateManagerCertificateMapEntryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | A set of Certificates defines for the given hostname. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.map">map</a></code> | <code>java.lang.String</code> | A map entry that is inputted into the cetrificate map. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern 'projects/*\/locations/*\/certificateMaps/*\/certificateMapEntries/*'. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with a Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.matcher">matcher</a></code> | <code>java.lang.String</code> | A predefined matcher for particular cases, other than SNI selection. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.certificates"></a>

- *Type:* java.util.List<java.lang.String>

A set of Certificates defines for the given hostname.

There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/*/locations/*/certificates/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#certificates CertificateManagerCertificateMapEntry#certificates}

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.map"></a>

- *Type:* java.lang.String

A map entry that is inputted into the cetrificate map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#map CertificateManagerCertificateMapEntry#map}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern 'projects/*\/locations/*\/certificateMaps/*\/certificateMapEntries/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#name CertificateManagerCertificateMapEntry#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#description CertificateManagerCertificateMapEntry#description}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#hostname CertificateManagerCertificateMapEntry#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with a Certificate Map Entry.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#labels CertificateManagerCertificateMapEntry#labels}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.matcher"></a>

- *Type:* java.lang.String

A predefined matcher for particular cases, other than SNI selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#matcher CertificateManagerCertificateMapEntry#matcher}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#timeouts CertificateManagerCertificateMapEntry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts"></a>

```java
public void putTimeouts(CertificateManagerCertificateMapEntryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetMatcher"></a>

```java
public void resetMatcher()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map_entry.CertificateManagerCertificateMapEntry;

CertificateManagerCertificateMapEntry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map_entry.CertificateManagerCertificateMapEntry;

CertificateManagerCertificateMapEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map_entry.CertificateManagerCertificateMapEntry;

CertificateManagerCertificateMapEntry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference">CertificateManagerCertificateMapEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificatesInput">certificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.mapInput">mapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcherInput">matcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.map">map</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcher">matcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeouts"></a>

```java
public CertificateManagerCertificateMapEntryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference">CertificateManagerCertificateMapEntryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificatesInput"></a>

```java
public java.util.List<java.lang.String> getCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mapInput`<sup>Optional</sup> <a name="mapInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.mapInput"></a>

```java
public java.lang.String getMapInput();
```

- *Type:* java.lang.String

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcherInput"></a>

```java
public java.lang.String getMatcherInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificates"></a>

```java
public java.util.List<java.lang.String> getCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.map"></a>

```java
public java.lang.String getMap();
```

- *Type:* java.lang.String

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateMapEntryConfig <a name="CertificateManagerCertificateMapEntryConfig" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map_entry.CertificateManagerCertificateMapEntryConfig;

CertificateManagerCertificateMapEntryConfig.builder()
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
    .certificates(java.util.List<java.lang.String>)
    .map(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .matcher(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(CertificateManagerCertificateMapEntryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | A set of Certificates defines for the given hostname. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.map">map</a></code> | <code>java.lang.String</code> | A map entry that is inputted into the cetrificate map. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern 'projects/*\/locations/*\/certificateMaps/*\/certificateMapEntries/*'. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with a Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.matcher">matcher</a></code> | <code>java.lang.String</code> | A predefined matcher for particular cases, other than SNI selection. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.certificates"></a>

```java
public java.util.List<java.lang.String> getCertificates();
```

- *Type:* java.util.List<java.lang.String>

A set of Certificates defines for the given hostname.

There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/*/locations/*/certificates/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#certificates CertificateManagerCertificateMapEntry#certificates}

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.map"></a>

```java
public java.lang.String getMap();
```

- *Type:* java.lang.String

A map entry that is inputted into the cetrificate map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#map CertificateManagerCertificateMapEntry#map}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern 'projects/*\/locations/*\/certificateMaps/*\/certificateMapEntries/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#name CertificateManagerCertificateMapEntry#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#description CertificateManagerCertificateMapEntry#description}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#hostname CertificateManagerCertificateMapEntry#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with a Certificate Map Entry.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#labels CertificateManagerCertificateMapEntry#labels}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

A predefined matcher for particular cases, other than SNI selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#matcher CertificateManagerCertificateMapEntry#matcher}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.timeouts"></a>

```java
public CertificateManagerCertificateMapEntryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#timeouts CertificateManagerCertificateMapEntry#timeouts}

---

### CertificateManagerCertificateMapEntryTimeouts <a name="CertificateManagerCertificateMapEntryTimeouts" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map_entry.CertificateManagerCertificateMapEntryTimeouts;

CertificateManagerCertificateMapEntryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateMapEntryTimeoutsOutputReference <a name="CertificateManagerCertificateMapEntryTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map_entry.CertificateManagerCertificateMapEntryTimeoutsOutputReference;

new CertificateManagerCertificateMapEntryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



