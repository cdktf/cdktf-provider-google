# `identityPlatformTenantOauthIdpConfig` Submodule <a name="`identityPlatformTenantOauthIdpConfig` Submodule" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformTenantOauthIdpConfig <a name="IdentityPlatformTenantOauthIdpConfig" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config google_identity_platform_tenant_oauth_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant_oauth_idp_config.IdentityPlatformTenantOauthIdpConfig;

IdentityPlatformTenantOauthIdpConfig.Builder.create(Construct scope, java.lang.String id)
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
    .clientId(java.lang.String)
    .displayName(java.lang.String)
    .issuer(java.lang.String)
    .name(java.lang.String)
    .tenant(java.lang.String)
//  .clientSecret(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IdentityPlatformTenantOauthIdpConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The client id of an OAuth client. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.tenant">tenant</a></code> | <code>java.lang.String</code> | The name of the tenant where this OIDC IDP configuration resource exists. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#id IdentityPlatformTenantOauthIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#project IdentityPlatformTenantOauthIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#client_id IdentityPlatformTenantOauthIdpConfig#client_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#display_name IdentityPlatformTenantOauthIdpConfig#display_name}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#issuer IdentityPlatformTenantOauthIdpConfig#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#name IdentityPlatformTenantOauthIdpConfig#name}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.tenant"></a>

- *Type:* java.lang.String

The name of the tenant where this OIDC IDP configuration resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#tenant IdentityPlatformTenantOauthIdpConfig#tenant}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#client_secret IdentityPlatformTenantOauthIdpConfig#client_secret}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#enabled IdentityPlatformTenantOauthIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#id IdentityPlatformTenantOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#project IdentityPlatformTenantOauthIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#timeouts IdentityPlatformTenantOauthIdpConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.putTimeouts"></a>

```java
public void putTimeouts(IdentityPlatformTenantOauthIdpConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPlatformTenantOauthIdpConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant_oauth_idp_config.IdentityPlatformTenantOauthIdpConfig;

IdentityPlatformTenantOauthIdpConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant_oauth_idp_config.IdentityPlatformTenantOauthIdpConfig;

IdentityPlatformTenantOauthIdpConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant_oauth_idp_config.IdentityPlatformTenantOauthIdpConfig;

IdentityPlatformTenantOauthIdpConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant_oauth_idp_config.IdentityPlatformTenantOauthIdpConfig;

IdentityPlatformTenantOauthIdpConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityPlatformTenantOauthIdpConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityPlatformTenantOauthIdpConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityPlatformTenantOauthIdpConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityPlatformTenantOauthIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformTenantOauthIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference">IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenantInput">tenantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenant">tenant</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeouts"></a>

```java
public IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference">IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenantInput"></a>

```java
public java.lang.String getTenantInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformTenantOauthIdpConfigConfig <a name="IdentityPlatformTenantOauthIdpConfigConfig" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant_oauth_idp_config.IdentityPlatformTenantOauthIdpConfigConfig;

IdentityPlatformTenantOauthIdpConfigConfig.builder()
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
    .clientId(java.lang.String)
    .displayName(java.lang.String)
    .issuer(java.lang.String)
    .name(java.lang.String)
    .tenant(java.lang.String)
//  .clientSecret(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IdentityPlatformTenantOauthIdpConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client id of an OAuth client. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.tenant">tenant</a></code> | <code>java.lang.String</code> | The name of the tenant where this OIDC IDP configuration resource exists. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#id IdentityPlatformTenantOauthIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#project IdentityPlatformTenantOauthIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#client_id IdentityPlatformTenantOauthIdpConfig#client_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#display_name IdentityPlatformTenantOauthIdpConfig#display_name}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#issuer IdentityPlatformTenantOauthIdpConfig#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#name IdentityPlatformTenantOauthIdpConfig#name}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

The name of the tenant where this OIDC IDP configuration resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#tenant IdentityPlatformTenantOauthIdpConfig#tenant}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#client_secret IdentityPlatformTenantOauthIdpConfig#client_secret}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#enabled IdentityPlatformTenantOauthIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#id IdentityPlatformTenantOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#project IdentityPlatformTenantOauthIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.timeouts"></a>

```java
public IdentityPlatformTenantOauthIdpConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#timeouts IdentityPlatformTenantOauthIdpConfig#timeouts}

---

### IdentityPlatformTenantOauthIdpConfigTimeouts <a name="IdentityPlatformTenantOauthIdpConfigTimeouts" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant_oauth_idp_config.IdentityPlatformTenantOauthIdpConfigTimeouts;

IdentityPlatformTenantOauthIdpConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#create IdentityPlatformTenantOauthIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#delete IdentityPlatformTenantOauthIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#update IdentityPlatformTenantOauthIdpConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#create IdentityPlatformTenantOauthIdpConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#delete IdentityPlatformTenantOauthIdpConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant_oauth_idp_config#update IdentityPlatformTenantOauthIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference <a name="IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_tenant_oauth_idp_config.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference;

new IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

---



