# `siteVerificationWebResource` Submodule <a name="`siteVerificationWebResource` Submodule" id="@cdktf/provider-google.siteVerificationWebResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteVerificationWebResource <a name="SiteVerificationWebResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource google_site_verification_web_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResource;

SiteVerificationWebResource.Builder.create(Construct scope, java.lang.String id)
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
    .site(SiteVerificationWebResourceSite)
    .verificationMethod(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SiteVerificationWebResourceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.site">site</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | site block. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.verificationMethod">verificationMethod</a></code> | <code>java.lang.String</code> | The verification method for the Site Verification system to use to verify this site or domain. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#id SiteVerificationWebResource#id}. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.site"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

site block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#site SiteVerificationWebResource#site}

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.verificationMethod"></a>

- *Type:* java.lang.String

The verification method for the Site Verification system to use to verify this site or domain.

Possible values: ["ANALYTICS", "DNS_CNAME", "DNS_TXT", "FILE", "META", "TAG_MANAGER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#verification_method SiteVerificationWebResource#verification_method}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#id SiteVerificationWebResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#timeouts SiteVerificationWebResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putSite">putSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSite` <a name="putSite" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putSite"></a>

```java
public void putSite(SiteVerificationWebResourceSite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putSite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putTimeouts"></a>

```java
public void putTimeouts(SiteVerificationWebResourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SiteVerificationWebResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResource;

SiteVerificationWebResource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResource;

SiteVerificationWebResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResource;

SiteVerificationWebResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResource;

SiteVerificationWebResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SiteVerificationWebResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SiteVerificationWebResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SiteVerificationWebResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SiteVerificationWebResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SiteVerificationWebResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.site">site</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference">SiteVerificationWebResourceSiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference">SiteVerificationWebResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.webResourceId">webResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.siteInput">siteInput</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethodInput">verificationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethod">verificationMethod</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.owners"></a>

```java
public java.util.List<java.lang.String> getOwners();
```

- *Type:* java.util.List<java.lang.String>

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.site"></a>

```java
public SiteVerificationWebResourceSiteOutputReference getSite();
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference">SiteVerificationWebResourceSiteOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeouts"></a>

```java
public SiteVerificationWebResourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference">SiteVerificationWebResourceTimeoutsOutputReference</a>

---

##### `webResourceId`<sup>Required</sup> <a name="webResourceId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.webResourceId"></a>

```java
public java.lang.String getWebResourceId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `siteInput`<sup>Optional</sup> <a name="siteInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.siteInput"></a>

```java
public SiteVerificationWebResourceSite getSiteInput();
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

---

##### `verificationMethodInput`<sup>Optional</sup> <a name="verificationMethodInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethodInput"></a>

```java
public java.lang.String getVerificationMethodInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethod"></a>

```java
public java.lang.String getVerificationMethod();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SiteVerificationWebResourceConfig <a name="SiteVerificationWebResourceConfig" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResourceConfig;

SiteVerificationWebResourceConfig.builder()
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
    .site(SiteVerificationWebResourceSite)
    .verificationMethod(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SiteVerificationWebResourceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.site">site</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | site block. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.verificationMethod">verificationMethod</a></code> | <code>java.lang.String</code> | The verification method for the Site Verification system to use to verify this site or domain. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#id SiteVerificationWebResource#id}. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.site"></a>

```java
public SiteVerificationWebResourceSite getSite();
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

site block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#site SiteVerificationWebResource#site}

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.verificationMethod"></a>

```java
public java.lang.String getVerificationMethod();
```

- *Type:* java.lang.String

The verification method for the Site Verification system to use to verify this site or domain.

Possible values: ["ANALYTICS", "DNS_CNAME", "DNS_TXT", "FILE", "META", "TAG_MANAGER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#verification_method SiteVerificationWebResource#verification_method}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#id SiteVerificationWebResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.timeouts"></a>

```java
public SiteVerificationWebResourceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#timeouts SiteVerificationWebResource#timeouts}

---

### SiteVerificationWebResourceSite <a name="SiteVerificationWebResourceSite" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResourceSite;

SiteVerificationWebResourceSite.builder()
    .identifier(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.identifier">identifier</a></code> | <code>java.lang.String</code> | The site identifier. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.type">type</a></code> | <code>java.lang.String</code> | The type of resource to be verified. Possible values: ["INET_DOMAIN", "SITE"]. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

The site identifier.

If the type is set to SITE, the identifier is a URL. If the type is
set to INET_DOMAIN, the identifier is a domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#identifier SiteVerificationWebResource#identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of resource to be verified. Possible values: ["INET_DOMAIN", "SITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#type SiteVerificationWebResource#type}

---

### SiteVerificationWebResourceTimeouts <a name="SiteVerificationWebResourceTimeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResourceTimeouts;

SiteVerificationWebResourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#create SiteVerificationWebResource#create}. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#delete SiteVerificationWebResource#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#create SiteVerificationWebResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/site_verification_web_resource#delete SiteVerificationWebResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteVerificationWebResourceSiteOutputReference <a name="SiteVerificationWebResourceSiteOutputReference" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResourceSiteOutputReference;

new SiteVerificationWebResourceSiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.internalValue"></a>

```java
public SiteVerificationWebResourceSite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

---


### SiteVerificationWebResourceTimeoutsOutputReference <a name="SiteVerificationWebResourceTimeoutsOutputReference" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.site_verification_web_resource.SiteVerificationWebResourceTimeoutsOutputReference;

new SiteVerificationWebResourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

---



