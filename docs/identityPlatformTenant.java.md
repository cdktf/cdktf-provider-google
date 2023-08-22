# `google_identity_platform_tenant`

Refer to the Terraform Registory for docs: [`google_identity_platform_tenant`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant).

# `identityPlatformTenant` Submodule <a name="`identityPlatformTenant` Submodule" id="@cdktf/provider-google.identityPlatformTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformTenant <a name="IdentityPlatformTenant" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant google_identity_platform_tenant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant.IdentityPlatformTenant;

IdentityPlatformTenant.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
//  .allowPasswordSignup(java.lang.Boolean)
//  .allowPasswordSignup(IResolvable)
//  .disableAuth(java.lang.Boolean)
//  .disableAuth(IResolvable)
//  .enableEmailLinkSignin(java.lang.Boolean)
//  .enableEmailLinkSignin(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IdentityPlatformTenantTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name of the tenant. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.allowPasswordSignup">allowPasswordSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow email/password user authentication. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.disableAuth">disableAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether authentication is disabled for the tenant. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.enableEmailLinkSignin">enableEmailLinkSignin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable email link user authentication. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#id IdentityPlatformTenant#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#project IdentityPlatformTenant#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human friendly display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#display_name IdentityPlatformTenant#display_name}

---

##### `allowPasswordSignup`<sup>Optional</sup> <a name="allowPasswordSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.allowPasswordSignup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow email/password user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#allow_password_signup IdentityPlatformTenant#allow_password_signup}

---

##### `disableAuth`<sup>Optional</sup> <a name="disableAuth" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.disableAuth"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether authentication is disabled for the tenant.

If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#disable_auth IdentityPlatformTenant#disable_auth}

---

##### `enableEmailLinkSignin`<sup>Optional</sup> <a name="enableEmailLinkSignin" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.enableEmailLinkSignin"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable email link user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#enable_email_link_signin IdentityPlatformTenant#enable_email_link_signin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#id IdentityPlatformTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#project IdentityPlatformTenant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#timeouts IdentityPlatformTenant#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetAllowPasswordSignup">resetAllowPasswordSignup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetDisableAuth">resetDisableAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetEnableEmailLinkSignin">resetEnableEmailLinkSignin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.putTimeouts"></a>

```java
public void putTimeouts(IdentityPlatformTenantTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a>

---

##### `resetAllowPasswordSignup` <a name="resetAllowPasswordSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetAllowPasswordSignup"></a>

```java
public void resetAllowPasswordSignup()
```

##### `resetDisableAuth` <a name="resetDisableAuth" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetDisableAuth"></a>

```java
public void resetDisableAuth()
```

##### `resetEnableEmailLinkSignin` <a name="resetEnableEmailLinkSignin" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetEnableEmailLinkSignin"></a>

```java
public void resetEnableEmailLinkSignin()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant.IdentityPlatformTenant;

IdentityPlatformTenant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant.IdentityPlatformTenant;

IdentityPlatformTenant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant.IdentityPlatformTenant;

IdentityPlatformTenant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference">IdentityPlatformTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.allowPasswordSignupInput">allowPasswordSignupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.disableAuthInput">disableAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.enableEmailLinkSigninInput">enableEmailLinkSigninInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.allowPasswordSignup">allowPasswordSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.disableAuth">disableAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.enableEmailLinkSignin">enableEmailLinkSignin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.timeouts"></a>

```java
public IdentityPlatformTenantTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference">IdentityPlatformTenantTimeoutsOutputReference</a>

---

##### `allowPasswordSignupInput`<sup>Optional</sup> <a name="allowPasswordSignupInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.allowPasswordSignupInput"></a>

```java
public java.lang.Object getAllowPasswordSignupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableAuthInput`<sup>Optional</sup> <a name="disableAuthInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.disableAuthInput"></a>

```java
public java.lang.Object getDisableAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableEmailLinkSigninInput`<sup>Optional</sup> <a name="enableEmailLinkSigninInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.enableEmailLinkSigninInput"></a>

```java
public java.lang.Object getEnableEmailLinkSigninInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a>

---

##### `allowPasswordSignup`<sup>Required</sup> <a name="allowPasswordSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.allowPasswordSignup"></a>

```java
public java.lang.Object getAllowPasswordSignup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableAuth`<sup>Required</sup> <a name="disableAuth" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.disableAuth"></a>

```java
public java.lang.Object getDisableAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableEmailLinkSignin`<sup>Required</sup> <a name="enableEmailLinkSignin" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.enableEmailLinkSignin"></a>

```java
public java.lang.Object getEnableEmailLinkSignin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformTenantConfig <a name="IdentityPlatformTenantConfig" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant.IdentityPlatformTenantConfig;

IdentityPlatformTenantConfig.builder()
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
    .displayName(java.lang.String)
//  .allowPasswordSignup(java.lang.Boolean)
//  .allowPasswordSignup(IResolvable)
//  .disableAuth(java.lang.Boolean)
//  .disableAuth(IResolvable)
//  .enableEmailLinkSignin(java.lang.Boolean)
//  .enableEmailLinkSignin(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IdentityPlatformTenantTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name of the tenant. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.allowPasswordSignup">allowPasswordSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow email/password user authentication. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.disableAuth">disableAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether authentication is disabled for the tenant. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.enableEmailLinkSignin">enableEmailLinkSignin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable email link user authentication. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#id IdentityPlatformTenant#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#project IdentityPlatformTenant#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human friendly display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#display_name IdentityPlatformTenant#display_name}

---

##### `allowPasswordSignup`<sup>Optional</sup> <a name="allowPasswordSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.allowPasswordSignup"></a>

```java
public java.lang.Object getAllowPasswordSignup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow email/password user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#allow_password_signup IdentityPlatformTenant#allow_password_signup}

---

##### `disableAuth`<sup>Optional</sup> <a name="disableAuth" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.disableAuth"></a>

```java
public java.lang.Object getDisableAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether authentication is disabled for the tenant.

If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#disable_auth IdentityPlatformTenant#disable_auth}

---

##### `enableEmailLinkSignin`<sup>Optional</sup> <a name="enableEmailLinkSignin" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.enableEmailLinkSignin"></a>

```java
public java.lang.Object getEnableEmailLinkSignin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable email link user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#enable_email_link_signin IdentityPlatformTenant#enable_email_link_signin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#id IdentityPlatformTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#project IdentityPlatformTenant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.timeouts"></a>

```java
public IdentityPlatformTenantTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#timeouts IdentityPlatformTenant#timeouts}

---

### IdentityPlatformTenantTimeouts <a name="IdentityPlatformTenantTimeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant.IdentityPlatformTenantTimeouts;

IdentityPlatformTenantTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#create IdentityPlatformTenant#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#delete IdentityPlatformTenant#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#update IdentityPlatformTenant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#create IdentityPlatformTenant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#delete IdentityPlatformTenant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/identity_platform_tenant#update IdentityPlatformTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformTenantTimeoutsOutputReference <a name="IdentityPlatformTenantTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant.IdentityPlatformTenantTimeoutsOutputReference;

new IdentityPlatformTenantTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a>

---



