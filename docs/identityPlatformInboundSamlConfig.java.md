# `google_identity_platform_inbound_saml_config`

Refer to the Terraform Registory for docs: [`google_identity_platform_inbound_saml_config`](https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config).

# `identityPlatformInboundSamlConfig` Submodule <a name="`identityPlatformInboundSamlConfig` Submodule" id="@cdktf/provider-google.identityPlatformInboundSamlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformInboundSamlConfig <a name="IdentityPlatformInboundSamlConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config google_identity_platform_inbound_saml_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfig;

IdentityPlatformInboundSamlConfig.Builder.create(Construct scope, java.lang.String id)
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
    .idpConfig(IdentityPlatformInboundSamlConfigIdpConfig)
    .name(java.lang.String)
    .spConfig(IdentityPlatformInboundSamlConfigSpConfig)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IdentityPlatformInboundSamlConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.idpConfig">idpConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.spConfig">spConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#display_name IdentityPlatformInboundSamlConfig#display_name}

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#idp_config IdentityPlatformInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#name IdentityPlatformInboundSamlConfig#name}

---

##### `spConfig`<sup>Required</sup> <a name="spConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.spConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#sp_config IdentityPlatformInboundSamlConfig#sp_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#enabled IdentityPlatformInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#timeouts IdentityPlatformInboundSamlConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig">putSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig"></a>

```java
public void putIdpConfig(IdentityPlatformInboundSamlConfigIdpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

---

##### `putSpConfig` <a name="putSpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig"></a>

```java
public void putSpConfig(IdentityPlatformInboundSamlConfigSpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putSpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts"></a>

```java
public void putTimeouts(IdentityPlatformInboundSamlConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfig;

IdentityPlatformInboundSamlConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfig;

IdentityPlatformInboundSamlConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfig;

IdentityPlatformInboundSamlConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference">IdentityPlatformInboundSamlConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfig">spConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference">IdentityPlatformInboundSamlConfigSpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference">IdentityPlatformInboundSamlConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfigInput">spConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfig"></a>

```java
public IdentityPlatformInboundSamlConfigIdpConfigOutputReference getIdpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference">IdentityPlatformInboundSamlConfigIdpConfigOutputReference</a>

---

##### `spConfig`<sup>Required</sup> <a name="spConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfig"></a>

```java
public IdentityPlatformInboundSamlConfigSpConfigOutputReference getSpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference">IdentityPlatformInboundSamlConfigSpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeouts"></a>

```java
public IdentityPlatformInboundSamlConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference">IdentityPlatformInboundSamlConfigTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.idpConfigInput"></a>

```java
public IdentityPlatformInboundSamlConfigIdpConfig getIdpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `spConfigInput`<sup>Optional</sup> <a name="spConfigInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.spConfigInput"></a>

```java
public IdentityPlatformInboundSamlConfigSpConfig getSpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformInboundSamlConfigConfig <a name="IdentityPlatformInboundSamlConfigConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigConfig;

IdentityPlatformInboundSamlConfigConfig.builder()
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
    .idpConfig(IdentityPlatformInboundSamlConfigIdpConfig)
    .name(java.lang.String)
    .spConfig(IdentityPlatformInboundSamlConfigSpConfig)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IdentityPlatformInboundSamlConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.spConfig">spConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#display_name IdentityPlatformInboundSamlConfig#display_name}

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.idpConfig"></a>

```java
public IdentityPlatformInboundSamlConfigIdpConfig getIdpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#idp_config IdentityPlatformInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#name IdentityPlatformInboundSamlConfig#name}

---

##### `spConfig`<sup>Required</sup> <a name="spConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.spConfig"></a>

```java
public IdentityPlatformInboundSamlConfigSpConfig getSpConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#sp_config IdentityPlatformInboundSamlConfig#sp_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#enabled IdentityPlatformInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#id IdentityPlatformInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#project IdentityPlatformInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigConfig.property.timeouts"></a>

```java
public IdentityPlatformInboundSamlConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#timeouts IdentityPlatformInboundSamlConfig#timeouts}

---

### IdentityPlatformInboundSamlConfigIdpConfig <a name="IdentityPlatformInboundSamlConfigIdpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigIdpConfig;

IdentityPlatformInboundSamlConfigIdpConfig.builder()
    .idpCertificates(IResolvable)
    .idpCertificates(java.util.List<IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates>)
    .idpEntityId(java.lang.String)
    .ssoUrl(java.lang.String)
//  .signRequest(java.lang.Boolean)
//  .signRequest(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates">idpCertificates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>></code> | idp_certificates block. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId">idpEntityId</a></code> | <code>java.lang.String</code> | Unique identifier for all SAML entities. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | URL to send Authentication request to. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.signRequest">signRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if outbounding SAMLRequest should be signed. |

---

##### `idpCertificates`<sup>Required</sup> <a name="idpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates"></a>

```java
public java.lang.Object getIdpCertificates();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>>

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#idp_certificates IdentityPlatformInboundSamlConfig#idp_certificates}

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId"></a>

```java
public java.lang.String getIdpEntityId();
```

- *Type:* java.lang.String

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#idp_entity_id IdentityPlatformInboundSamlConfig#idp_entity_id}

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#sso_url IdentityPlatformInboundSamlConfig#sso_url}

---

##### `signRequest`<sup>Optional</sup> <a name="signRequest" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig.property.signRequest"></a>

```java
public java.lang.Object getSignRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#sign_request IdentityPlatformInboundSamlConfig#sign_request}

---

### IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates <a name="IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates;

IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.builder()
//  .x509Certificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate">x509Certificate</a></code> | <code>java.lang.String</code> | The IdP's x509 certificate. |

---

##### `x509Certificate`<sup>Optional</sup> <a name="x509Certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate"></a>

```java
public java.lang.String getX509Certificate();
```

- *Type:* java.lang.String

The IdP's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#x509_certificate IdentityPlatformInboundSamlConfig#x509_certificate}

---

### IdentityPlatformInboundSamlConfigSpConfig <a name="IdentityPlatformInboundSamlConfigSpConfig" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigSpConfig;

IdentityPlatformInboundSamlConfigSpConfig.builder()
//  .callbackUri(java.lang.String)
//  .spEntityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.callbackUri">callbackUri</a></code> | <code>java.lang.String</code> | Callback URI where responses from IDP are handled. Must start with 'https://'. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.spEntityId">spEntityId</a></code> | <code>java.lang.String</code> | Unique identifier for all SAML entities. |

---

##### `callbackUri`<sup>Optional</sup> <a name="callbackUri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.callbackUri"></a>

```java
public java.lang.String getCallbackUri();
```

- *Type:* java.lang.String

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#callback_uri IdentityPlatformInboundSamlConfig#callback_uri}

---

##### `spEntityId`<sup>Optional</sup> <a name="spEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig.property.spEntityId"></a>

```java
public java.lang.String getSpEntityId();
```

- *Type:* java.lang.String

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#sp_entity_id IdentityPlatformInboundSamlConfig#sp_entity_id}

---

### IdentityPlatformInboundSamlConfigSpConfigSpCertificates <a name="IdentityPlatformInboundSamlConfigSpConfigSpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigSpConfigSpCertificates;

IdentityPlatformInboundSamlConfigSpConfigSpCertificates.builder()
    .build();
```


### IdentityPlatformInboundSamlConfigTimeouts <a name="IdentityPlatformInboundSamlConfigTimeouts" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigTimeouts;

IdentityPlatformInboundSamlConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#create IdentityPlatformInboundSamlConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#delete IdentityPlatformInboundSamlConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#update IdentityPlatformInboundSamlConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#create IdentityPlatformInboundSamlConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#delete IdentityPlatformInboundSamlConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/resources/identity_platform_inbound_saml_config#update IdentityPlatformInboundSamlConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList <a name="IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList;

new IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get"></a>

```java
public IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>>

---


### IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference <a name="IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference;

new IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate">resetX509Certificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetX509Certificate` <a name="resetX509Certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate"></a>

```java
public void resetX509Certificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput">x509CertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate">x509Certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `x509CertificateInput`<sup>Optional</sup> <a name="x509CertificateInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput"></a>

```java
public java.lang.String getX509CertificateInput();
```

- *Type:* java.lang.String

---

##### `x509Certificate`<sup>Required</sup> <a name="x509Certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate"></a>

```java
public java.lang.String getX509Certificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>

---


### IdentityPlatformInboundSamlConfigIdpConfigOutputReference <a name="IdentityPlatformInboundSamlConfigIdpConfigOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigIdpConfigOutputReference;

new IdentityPlatformInboundSamlConfigIdpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates">putIdpCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest">resetSignRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdpCertificates` <a name="putIdpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates"></a>

```java
public void putIdpCertificates(IResolvable OR java.util.List<IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>>

---

##### `resetSignRequest` <a name="resetSignRequest" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest"></a>

```java
public void resetSignRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates">idpCertificates</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput">idpCertificatesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput">idpEntityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput">signRequestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput">ssoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId">idpEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest">signRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idpCertificates`<sup>Required</sup> <a name="idpCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates"></a>

```java
public IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList getIdpCertificates();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a>

---

##### `idpCertificatesInput`<sup>Optional</sup> <a name="idpCertificatesInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput"></a>

```java
public java.lang.Object getIdpCertificatesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates">IdentityPlatformInboundSamlConfigIdpConfigIdpCertificates</a>>

---

##### `idpEntityIdInput`<sup>Optional</sup> <a name="idpEntityIdInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput"></a>

```java
public java.lang.String getIdpEntityIdInput();
```

- *Type:* java.lang.String

---

##### `signRequestInput`<sup>Optional</sup> <a name="signRequestInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput"></a>

```java
public java.lang.Object getSignRequestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput"></a>

```java
public java.lang.String getSsoUrlInput();
```

- *Type:* java.lang.String

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId"></a>

```java
public java.lang.String getIdpEntityId();
```

- *Type:* java.lang.String

---

##### `signRequest`<sup>Required</sup> <a name="signRequest" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest"></a>

```java
public java.lang.Object getSignRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue"></a>

```java
public IdentityPlatformInboundSamlConfigIdpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigIdpConfig">IdentityPlatformInboundSamlConfigIdpConfig</a>

---


### IdentityPlatformInboundSamlConfigSpConfigOutputReference <a name="IdentityPlatformInboundSamlConfigSpConfigOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigSpConfigOutputReference;

new IdentityPlatformInboundSamlConfigSpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri">resetCallbackUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId">resetSpEntityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCallbackUri` <a name="resetCallbackUri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri"></a>

```java
public void resetCallbackUri()
```

##### `resetSpEntityId` <a name="resetSpEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId"></a>

```java
public void resetSpEntityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates">spCertificates</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput">callbackUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput">spEntityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri">callbackUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId">spEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spCertificates`<sup>Required</sup> <a name="spCertificates" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates"></a>

```java
public IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList getSpCertificates();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a>

---

##### `callbackUriInput`<sup>Optional</sup> <a name="callbackUriInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput"></a>

```java
public java.lang.String getCallbackUriInput();
```

- *Type:* java.lang.String

---

##### `spEntityIdInput`<sup>Optional</sup> <a name="spEntityIdInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput"></a>

```java
public java.lang.String getSpEntityIdInput();
```

- *Type:* java.lang.String

---

##### `callbackUri`<sup>Required</sup> <a name="callbackUri" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri"></a>

```java
public java.lang.String getCallbackUri();
```

- *Type:* java.lang.String

---

##### `spEntityId`<sup>Required</sup> <a name="spEntityId" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId"></a>

```java
public java.lang.String getSpEntityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue"></a>

```java
public IdentityPlatformInboundSamlConfigSpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfig">IdentityPlatformInboundSamlConfigSpConfig</a>

---


### IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList <a name="IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList;

new IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get"></a>

```java
public IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference <a name="IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference;

new IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate">x509Certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates">IdentityPlatformInboundSamlConfigSpConfigSpCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `x509Certificate`<sup>Required</sup> <a name="x509Certificate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate"></a>

```java
public java.lang.String getX509Certificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue"></a>

```java
public IdentityPlatformInboundSamlConfigSpConfigSpCertificates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigSpConfigSpCertificates">IdentityPlatformInboundSamlConfigSpConfigSpCertificates</a>

---


### IdentityPlatformInboundSamlConfigTimeoutsOutputReference <a name="IdentityPlatformInboundSamlConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_inbound_saml_config.IdentityPlatformInboundSamlConfigTimeoutsOutputReference;

new IdentityPlatformInboundSamlConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformInboundSamlConfig.IdentityPlatformInboundSamlConfigTimeouts">IdentityPlatformInboundSamlConfigTimeouts</a>

---



