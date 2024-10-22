# `computePublicAdvertisedPrefix` Submodule <a name="`computePublicAdvertisedPrefix` Submodule" id="@cdktf/provider-google.computePublicAdvertisedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePublicAdvertisedPrefix <a name="ComputePublicAdvertisedPrefix" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix google_compute_public_advertised_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_public_advertised_prefix.ComputePublicAdvertisedPrefix;

ComputePublicAdvertisedPrefix.Builder.create(Construct scope, java.lang.String id)
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
    .dnsVerificationIp(java.lang.String)
    .ipCidrRange(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputePublicAdvertisedPrefixTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.dnsVerificationIp">dnsVerificationIp</a></code> | <code>java.lang.String</code> | The IPv4 address to be used for reverse DNS verification. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IPv4 address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsVerificationIp`<sup>Required</sup> <a name="dnsVerificationIp" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.dnsVerificationIp"></a>

- *Type:* java.lang.String

The IPv4 address to be used for reverse DNS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#dns_verification_ip ComputePublicAdvertisedPrefix#dns_verification_ip}

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The IPv4 address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#ip_cidr_range ComputePublicAdvertisedPrefix#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#name ComputePublicAdvertisedPrefix#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#description ComputePublicAdvertisedPrefix#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#timeouts ComputePublicAdvertisedPrefix#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts"></a>

```java
public void putTimeouts(ComputePublicAdvertisedPrefixTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputePublicAdvertisedPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_public_advertised_prefix.ComputePublicAdvertisedPrefix;

ComputePublicAdvertisedPrefix.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_public_advertised_prefix.ComputePublicAdvertisedPrefix;

ComputePublicAdvertisedPrefix.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_public_advertised_prefix.ComputePublicAdvertisedPrefix;

ComputePublicAdvertisedPrefix.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_public_advertised_prefix.ComputePublicAdvertisedPrefix;

ComputePublicAdvertisedPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputePublicAdvertisedPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputePublicAdvertisedPrefix resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputePublicAdvertisedPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputePublicAdvertisedPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputePublicAdvertisedPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference">ComputePublicAdvertisedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIpInput">dnsVerificationIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIp">dnsVerificationIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.sharedSecret"></a>

```java
public java.lang.String getSharedSecret();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeouts"></a>

```java
public ComputePublicAdvertisedPrefixTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference">ComputePublicAdvertisedPrefixTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsVerificationIpInput`<sup>Optional</sup> <a name="dnsVerificationIpInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIpInput"></a>

```java
public java.lang.String getDnsVerificationIpInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsVerificationIp`<sup>Required</sup> <a name="dnsVerificationIp" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIp"></a>

```java
public java.lang.String getDnsVerificationIp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePublicAdvertisedPrefixConfig <a name="ComputePublicAdvertisedPrefixConfig" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_public_advertised_prefix.ComputePublicAdvertisedPrefixConfig;

ComputePublicAdvertisedPrefixConfig.builder()
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
    .dnsVerificationIp(java.lang.String)
    .ipCidrRange(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputePublicAdvertisedPrefixTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp">dnsVerificationIp</a></code> | <code>java.lang.String</code> | The IPv4 address to be used for reverse DNS verification. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IPv4 address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsVerificationIp`<sup>Required</sup> <a name="dnsVerificationIp" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp"></a>

```java
public java.lang.String getDnsVerificationIp();
```

- *Type:* java.lang.String

The IPv4 address to be used for reverse DNS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#dns_verification_ip ComputePublicAdvertisedPrefix#dns_verification_ip}

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The IPv4 address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#ip_cidr_range ComputePublicAdvertisedPrefix#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#name ComputePublicAdvertisedPrefix#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#description ComputePublicAdvertisedPrefix#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.timeouts"></a>

```java
public ComputePublicAdvertisedPrefixTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#timeouts ComputePublicAdvertisedPrefix#timeouts}

---

### ComputePublicAdvertisedPrefixTimeouts <a name="ComputePublicAdvertisedPrefixTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_public_advertised_prefix.ComputePublicAdvertisedPrefixTimeouts;

ComputePublicAdvertisedPrefixTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#create ComputePublicAdvertisedPrefix#create}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#delete ComputePublicAdvertisedPrefix#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#create ComputePublicAdvertisedPrefix#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_public_advertised_prefix#delete ComputePublicAdvertisedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePublicAdvertisedPrefixTimeoutsOutputReference <a name="ComputePublicAdvertisedPrefixTimeoutsOutputReference" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_public_advertised_prefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference;

new ComputePublicAdvertisedPrefixTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

---



