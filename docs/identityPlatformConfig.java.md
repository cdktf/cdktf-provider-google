# `identityPlatformConfig` Submodule <a name="`identityPlatformConfig` Submodule" id="@cdktf/provider-google.identityPlatformConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformConfig <a name="IdentityPlatformConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config google_identity_platform_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfig;

IdentityPlatformConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .authorizedDomains(java.util.List<java.lang.String>)
//  .autodeleteAnonymousUsers(java.lang.Boolean)
//  .autodeleteAnonymousUsers(IResolvable)
//  .blockingFunctions(IdentityPlatformConfigBlockingFunctions)
//  .client(IdentityPlatformConfigClient)
//  .id(java.lang.String)
//  .mfa(IdentityPlatformConfigMfa)
//  .monitoring(IdentityPlatformConfigMonitoring)
//  .multiTenant(IdentityPlatformConfigMultiTenant)
//  .project(java.lang.String)
//  .quota(IdentityPlatformConfigQuota)
//  .signIn(IdentityPlatformConfigSignIn)
//  .smsRegionConfig(IdentityPlatformConfigSmsRegionConfig)
//  .timeouts(IdentityPlatformConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.authorizedDomains">authorizedDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains authorized for OAuth redirects. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.autodeleteAnonymousUsers">autodeleteAnonymousUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether anonymous users will be auto-deleted after a period of 30 days. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.blockingFunctions">blockingFunctions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | blocking_functions block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.client">client</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | client block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#id IdentityPlatformConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.mfa">mfa</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | mfa block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.multiTenant">multiTenant</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | multi_tenant block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#project IdentityPlatformConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.smsRegionConfig">smsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | sms_region_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizedDomains`<sup>Optional</sup> <a name="authorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.authorizedDomains"></a>

- *Type:* java.util.List<java.lang.String>

List of domains authorized for OAuth redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#authorized_domains IdentityPlatformConfig#authorized_domains}

---

##### `autodeleteAnonymousUsers`<sup>Optional</sup> <a name="autodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.autodeleteAnonymousUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether anonymous users will be auto-deleted after a period of 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#autodelete_anonymous_users IdentityPlatformConfig#autodelete_anonymous_users}

---

##### `blockingFunctions`<sup>Optional</sup> <a name="blockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.blockingFunctions"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

blocking_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#blocking_functions IdentityPlatformConfig#blocking_functions}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.client"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#client IdentityPlatformConfig#client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#id IdentityPlatformConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mfa`<sup>Optional</sup> <a name="mfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.mfa"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

mfa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#mfa IdentityPlatformConfig#mfa}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.monitoring"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#monitoring IdentityPlatformConfig#monitoring}

---

##### `multiTenant`<sup>Optional</sup> <a name="multiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.multiTenant"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

multi_tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#multi_tenant IdentityPlatformConfig#multi_tenant}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#project IdentityPlatformConfig#project}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.quota"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#quota IdentityPlatformConfig#quota}

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.signIn"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#sign_in IdentityPlatformConfig#sign_in}

---

##### `smsRegionConfig`<sup>Optional</sup> <a name="smsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.smsRegionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

sms_region_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#sms_region_config IdentityPlatformConfig#sms_region_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#timeouts IdentityPlatformConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putBlockingFunctions">putBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putClient">putClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMfa">putMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMonitoring">putMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMultiTenant">putMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSignIn">putSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSmsRegionConfig">putSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAuthorizedDomains">resetAuthorizedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAutodeleteAnonymousUsers">resetAutodeleteAnonymousUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetBlockingFunctions">resetBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMfa">resetMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMultiTenant">resetMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSignIn">resetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSmsRegionConfig">resetSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlockingFunctions` <a name="putBlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putBlockingFunctions"></a>

```java
public void putBlockingFunctions(IdentityPlatformConfigBlockingFunctions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putBlockingFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

---

##### `putClient` <a name="putClient" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putClient"></a>

```java
public void putClient(IdentityPlatformConfigClient value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putClient.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

---

##### `putMfa` <a name="putMfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMfa"></a>

```java
public void putMfa(IdentityPlatformConfigMfa value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMfa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

---

##### `putMonitoring` <a name="putMonitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMonitoring"></a>

```java
public void putMonitoring(IdentityPlatformConfigMonitoring value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

---

##### `putMultiTenant` <a name="putMultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMultiTenant"></a>

```java
public void putMultiTenant(IdentityPlatformConfigMultiTenant value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMultiTenant.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putQuota"></a>

```java
public void putQuota(IdentityPlatformConfigQuota value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

---

##### `putSignIn` <a name="putSignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSignIn"></a>

```java
public void putSignIn(IdentityPlatformConfigSignIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

---

##### `putSmsRegionConfig` <a name="putSmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSmsRegionConfig"></a>

```java
public void putSmsRegionConfig(IdentityPlatformConfigSmsRegionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSmsRegionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putTimeouts"></a>

```java
public void putTimeouts(IdentityPlatformConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a>

---

##### `resetAuthorizedDomains` <a name="resetAuthorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAuthorizedDomains"></a>

```java
public void resetAuthorizedDomains()
```

##### `resetAutodeleteAnonymousUsers` <a name="resetAutodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAutodeleteAnonymousUsers"></a>

```java
public void resetAutodeleteAnonymousUsers()
```

##### `resetBlockingFunctions` <a name="resetBlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetBlockingFunctions"></a>

```java
public void resetBlockingFunctions()
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetClient"></a>

```java
public void resetClient()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetId"></a>

```java
public void resetId()
```

##### `resetMfa` <a name="resetMfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMfa"></a>

```java
public void resetMfa()
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMonitoring"></a>

```java
public void resetMonitoring()
```

##### `resetMultiTenant` <a name="resetMultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMultiTenant"></a>

```java
public void resetMultiTenant()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetSignIn` <a name="resetSignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSignIn"></a>

```java
public void resetSignIn()
```

##### `resetSmsRegionConfig` <a name="resetSmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSmsRegionConfig"></a>

```java
public void resetSmsRegionConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPlatformConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfig;

IdentityPlatformConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfig;

IdentityPlatformConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfig;

IdentityPlatformConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfig;

IdentityPlatformConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityPlatformConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityPlatformConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityPlatformConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityPlatformConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctions">blockingFunctions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference">IdentityPlatformConfigBlockingFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.client">client</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference">IdentityPlatformConfigClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfa">mfa</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference">IdentityPlatformConfigMfaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference">IdentityPlatformConfigMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenant">multiTenant</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference">IdentityPlatformConfigMultiTenantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference">IdentityPlatformConfigQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference">IdentityPlatformConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfig">smsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference">IdentityPlatformConfigSmsRegionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference">IdentityPlatformConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomainsInput">authorizedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsersInput">autodeleteAnonymousUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctionsInput">blockingFunctionsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.clientInput">clientInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfaInput">mfaInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoringInput">monitoringInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenantInput">multiTenantInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signInInput">signInInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfigInput">smsRegionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomains">authorizedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsers">autodeleteAnonymousUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blockingFunctions`<sup>Required</sup> <a name="blockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctions"></a>

```java
public IdentityPlatformConfigBlockingFunctionsOutputReference getBlockingFunctions();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference">IdentityPlatformConfigBlockingFunctionsOutputReference</a>

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.client"></a>

```java
public IdentityPlatformConfigClientOutputReference getClient();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference">IdentityPlatformConfigClientOutputReference</a>

---

##### `mfa`<sup>Required</sup> <a name="mfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfa"></a>

```java
public IdentityPlatformConfigMfaOutputReference getMfa();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference">IdentityPlatformConfigMfaOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoring"></a>

```java
public IdentityPlatformConfigMonitoringOutputReference getMonitoring();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference">IdentityPlatformConfigMonitoringOutputReference</a>

---

##### `multiTenant`<sup>Required</sup> <a name="multiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenant"></a>

```java
public IdentityPlatformConfigMultiTenantOutputReference getMultiTenant();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference">IdentityPlatformConfigMultiTenantOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quota"></a>

```java
public IdentityPlatformConfigQuotaOutputReference getQuota();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference">IdentityPlatformConfigQuotaOutputReference</a>

---

##### `signIn`<sup>Required</sup> <a name="signIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signIn"></a>

```java
public IdentityPlatformConfigSignInOutputReference getSignIn();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference">IdentityPlatformConfigSignInOutputReference</a>

---

##### `smsRegionConfig`<sup>Required</sup> <a name="smsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfig"></a>

```java
public IdentityPlatformConfigSmsRegionConfigOutputReference getSmsRegionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference">IdentityPlatformConfigSmsRegionConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeouts"></a>

```java
public IdentityPlatformConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference">IdentityPlatformConfigTimeoutsOutputReference</a>

---

##### `authorizedDomainsInput`<sup>Optional</sup> <a name="authorizedDomainsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autodeleteAnonymousUsersInput`<sup>Optional</sup> <a name="autodeleteAnonymousUsersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsersInput"></a>

```java
public java.lang.Object getAutodeleteAnonymousUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockingFunctionsInput`<sup>Optional</sup> <a name="blockingFunctionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctionsInput"></a>

```java
public IdentityPlatformConfigBlockingFunctions getBlockingFunctionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.clientInput"></a>

```java
public IdentityPlatformConfigClient getClientInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mfaInput`<sup>Optional</sup> <a name="mfaInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfaInput"></a>

```java
public IdentityPlatformConfigMfa getMfaInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoringInput"></a>

```java
public IdentityPlatformConfigMonitoring getMonitoringInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

---

##### `multiTenantInput`<sup>Optional</sup> <a name="multiTenantInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenantInput"></a>

```java
public IdentityPlatformConfigMultiTenant getMultiTenantInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quotaInput"></a>

```java
public IdentityPlatformConfigQuota getQuotaInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

---

##### `signInInput`<sup>Optional</sup> <a name="signInInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signInInput"></a>

```java
public IdentityPlatformConfigSignIn getSignInInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

---

##### `smsRegionConfigInput`<sup>Optional</sup> <a name="smsRegionConfigInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfigInput"></a>

```java
public IdentityPlatformConfigSmsRegionConfig getSmsRegionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a>

---

##### `authorizedDomains`<sup>Required</sup> <a name="authorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomains"></a>

```java
public java.util.List<java.lang.String> getAuthorizedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autodeleteAnonymousUsers`<sup>Required</sup> <a name="autodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsers"></a>

```java
public java.lang.Object getAutodeleteAnonymousUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformConfigBlockingFunctions <a name="IdentityPlatformConfigBlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigBlockingFunctions;

IdentityPlatformConfigBlockingFunctions.builder()
    .triggers(IResolvable)
    .triggers(java.util.List<IdentityPlatformConfigBlockingFunctionsTriggers>)
//  .forwardInboundCredentials(IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.triggers">triggers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers">IdentityPlatformConfigBlockingFunctionsTriggers</a>></code> | triggers block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials">forwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | forward_inbound_credentials block. |

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.triggers"></a>

```java
public java.lang.Object getTriggers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers">IdentityPlatformConfigBlockingFunctionsTriggers</a>>

triggers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#triggers IdentityPlatformConfig#triggers}

---

##### `forwardInboundCredentials`<sup>Optional</sup> <a name="forwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials"></a>

```java
public IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials getForwardInboundCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

forward_inbound_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#forward_inbound_credentials IdentityPlatformConfig#forward_inbound_credentials}

---

### IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials <a name="IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials;

IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.builder()
//  .accessToken(java.lang.Boolean)
//  .accessToken(IResolvable)
//  .idToken(java.lang.Boolean)
//  .idToken(IResolvable)
//  .refreshToken(java.lang.Boolean)
//  .refreshToken(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken">accessToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to pass the user's OAuth identity provider's access token. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken">idToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to pass the user's OIDC identity provider's ID token. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken">refreshToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to pass the user's OAuth identity provider's refresh token. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken"></a>

```java
public java.lang.Object getAccessToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to pass the user's OAuth identity provider's access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#access_token IdentityPlatformConfig#access_token}

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken"></a>

```java
public java.lang.Object getIdToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to pass the user's OIDC identity provider's ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#id_token IdentityPlatformConfig#id_token}

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken"></a>

```java
public java.lang.Object getRefreshToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to pass the user's OAuth identity provider's refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#refresh_token IdentityPlatformConfig#refresh_token}

---

### IdentityPlatformConfigBlockingFunctionsTriggers <a name="IdentityPlatformConfigBlockingFunctionsTriggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigBlockingFunctionsTriggers;

IdentityPlatformConfigBlockingFunctionsTriggers.builder()
    .eventType(java.lang.String)
    .functionUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.eventType">eventType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#event_type IdentityPlatformConfig#event_type}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri">functionUri</a></code> | <code>java.lang.String</code> | HTTP URI trigger for the Cloud Function. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#event_type IdentityPlatformConfig#event_type}.

---

##### `functionUri`<sup>Required</sup> <a name="functionUri" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri"></a>

```java
public java.lang.String getFunctionUri();
```

- *Type:* java.lang.String

HTTP URI trigger for the Cloud Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#function_uri IdentityPlatformConfig#function_uri}

---

### IdentityPlatformConfigClient <a name="IdentityPlatformConfigClient" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigClient;

IdentityPlatformConfigClient.builder()
//  .permissions(IdentityPlatformConfigClientPermissions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a></code> | permissions block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient.property.permissions"></a>

```java
public IdentityPlatformConfigClientPermissions getPermissions();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#permissions IdentityPlatformConfig#permissions}

---

### IdentityPlatformConfigClientPermissions <a name="IdentityPlatformConfigClientPermissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigClientPermissions;

IdentityPlatformConfigClientPermissions.builder()
//  .disabledUserDeletion(java.lang.Boolean)
//  .disabledUserDeletion(IResolvable)
//  .disabledUserSignup(java.lang.Boolean)
//  .disabledUserSignup(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserDeletion">disabledUserDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, end users cannot delete their account on the associated project through any of our API methods. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserSignup">disabledUserSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, end users cannot sign up for a new account on the associated project through any of our API methods. |

---

##### `disabledUserDeletion`<sup>Optional</sup> <a name="disabledUserDeletion" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserDeletion"></a>

```java
public java.lang.Object getDisabledUserDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, end users cannot delete their account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#disabled_user_deletion IdentityPlatformConfig#disabled_user_deletion}

---

##### `disabledUserSignup`<sup>Optional</sup> <a name="disabledUserSignup" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserSignup"></a>

```java
public java.lang.Object getDisabledUserSignup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, end users cannot sign up for a new account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#disabled_user_signup IdentityPlatformConfig#disabled_user_signup}

---

### IdentityPlatformConfigConfig <a name="IdentityPlatformConfigConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigConfig;

IdentityPlatformConfigConfig.builder()
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
//  .authorizedDomains(java.util.List<java.lang.String>)
//  .autodeleteAnonymousUsers(java.lang.Boolean)
//  .autodeleteAnonymousUsers(IResolvable)
//  .blockingFunctions(IdentityPlatformConfigBlockingFunctions)
//  .client(IdentityPlatformConfigClient)
//  .id(java.lang.String)
//  .mfa(IdentityPlatformConfigMfa)
//  .monitoring(IdentityPlatformConfigMonitoring)
//  .multiTenant(IdentityPlatformConfigMultiTenant)
//  .project(java.lang.String)
//  .quota(IdentityPlatformConfigQuota)
//  .signIn(IdentityPlatformConfigSignIn)
//  .smsRegionConfig(IdentityPlatformConfigSmsRegionConfig)
//  .timeouts(IdentityPlatformConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.authorizedDomains">authorizedDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains authorized for OAuth redirects. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.autodeleteAnonymousUsers">autodeleteAnonymousUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether anonymous users will be auto-deleted after a period of 30 days. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.blockingFunctions">blockingFunctions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | blocking_functions block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.client">client</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | client block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#id IdentityPlatformConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.mfa">mfa</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | mfa block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.multiTenant">multiTenant</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | multi_tenant block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#project IdentityPlatformConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.smsRegionConfig">smsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | sms_region_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizedDomains`<sup>Optional</sup> <a name="authorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.authorizedDomains"></a>

```java
public java.util.List<java.lang.String> getAuthorizedDomains();
```

- *Type:* java.util.List<java.lang.String>

List of domains authorized for OAuth redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#authorized_domains IdentityPlatformConfig#authorized_domains}

---

##### `autodeleteAnonymousUsers`<sup>Optional</sup> <a name="autodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.autodeleteAnonymousUsers"></a>

```java
public java.lang.Object getAutodeleteAnonymousUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether anonymous users will be auto-deleted after a period of 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#autodelete_anonymous_users IdentityPlatformConfig#autodelete_anonymous_users}

---

##### `blockingFunctions`<sup>Optional</sup> <a name="blockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.blockingFunctions"></a>

```java
public IdentityPlatformConfigBlockingFunctions getBlockingFunctions();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

blocking_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#blocking_functions IdentityPlatformConfig#blocking_functions}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.client"></a>

```java
public IdentityPlatformConfigClient getClient();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#client IdentityPlatformConfig#client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#id IdentityPlatformConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mfa`<sup>Optional</sup> <a name="mfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.mfa"></a>

```java
public IdentityPlatformConfigMfa getMfa();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

mfa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#mfa IdentityPlatformConfig#mfa}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.monitoring"></a>

```java
public IdentityPlatformConfigMonitoring getMonitoring();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#monitoring IdentityPlatformConfig#monitoring}

---

##### `multiTenant`<sup>Optional</sup> <a name="multiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.multiTenant"></a>

```java
public IdentityPlatformConfigMultiTenant getMultiTenant();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

multi_tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#multi_tenant IdentityPlatformConfig#multi_tenant}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#project IdentityPlatformConfig#project}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.quota"></a>

```java
public IdentityPlatformConfigQuota getQuota();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#quota IdentityPlatformConfig#quota}

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.signIn"></a>

```java
public IdentityPlatformConfigSignIn getSignIn();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#sign_in IdentityPlatformConfig#sign_in}

---

##### `smsRegionConfig`<sup>Optional</sup> <a name="smsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.smsRegionConfig"></a>

```java
public IdentityPlatformConfigSmsRegionConfig getSmsRegionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

sms_region_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#sms_region_config IdentityPlatformConfig#sms_region_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.timeouts"></a>

```java
public IdentityPlatformConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#timeouts IdentityPlatformConfig#timeouts}

---

### IdentityPlatformConfigMfa <a name="IdentityPlatformConfigMfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMfa;

IdentityPlatformConfigMfa.builder()
//  .enabledProviders(java.util.List<java.lang.String>)
//  .providerConfigs(IResolvable)
//  .providerConfigs(java.util.List<IdentityPlatformConfigMfaProviderConfigs>)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.enabledProviders">enabledProviders</a></code> | <code>java.util.List<java.lang.String></code> | A list of usable second factors for this project. Possible values: ["PHONE_SMS"]. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.providerConfigs">providerConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs">IdentityPlatformConfigMfaProviderConfigs</a>></code> | provider_configs block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.state">state</a></code> | <code>java.lang.String</code> | Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]. |

---

##### `enabledProviders`<sup>Optional</sup> <a name="enabledProviders" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.enabledProviders"></a>

```java
public java.util.List<java.lang.String> getEnabledProviders();
```

- *Type:* java.util.List<java.lang.String>

A list of usable second factors for this project. Possible values: ["PHONE_SMS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#enabled_providers IdentityPlatformConfig#enabled_providers}

---

##### `providerConfigs`<sup>Optional</sup> <a name="providerConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.providerConfigs"></a>

```java
public java.lang.Object getProviderConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs">IdentityPlatformConfigMfaProviderConfigs</a>>

provider_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#provider_configs IdentityPlatformConfig#provider_configs}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#state IdentityPlatformConfig#state}

---

### IdentityPlatformConfigMfaProviderConfigs <a name="IdentityPlatformConfigMfaProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMfaProviderConfigs;

IdentityPlatformConfigMfaProviderConfigs.builder()
//  .state(java.lang.String)
//  .totpProviderConfig(IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.state">state</a></code> | <code>java.lang.String</code> | Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.totpProviderConfig">totpProviderConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | totp_provider_config block. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#state IdentityPlatformConfig#state}

---

##### `totpProviderConfig`<sup>Optional</sup> <a name="totpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.totpProviderConfig"></a>

```java
public IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig getTotpProviderConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

totp_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#totp_provider_config IdentityPlatformConfig#totp_provider_config}

---

### IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig <a name="IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig;

IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.builder()
//  .adjacentIntervals(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.property.adjacentIntervals">adjacentIntervals</a></code> | <code>java.lang.Number</code> | The allowed number of adjacent intervals that will be used for verification to avoid clock skew. |

---

##### `adjacentIntervals`<sup>Optional</sup> <a name="adjacentIntervals" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.property.adjacentIntervals"></a>

```java
public java.lang.Number getAdjacentIntervals();
```

- *Type:* java.lang.Number

The allowed number of adjacent intervals that will be used for verification to avoid clock skew.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#adjacent_intervals IdentityPlatformConfig#adjacent_intervals}

---

### IdentityPlatformConfigMonitoring <a name="IdentityPlatformConfigMonitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMonitoring;

IdentityPlatformConfigMonitoring.builder()
//  .requestLogging(IdentityPlatformConfigMonitoringRequestLogging)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring.property.requestLogging">requestLogging</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a></code> | request_logging block. |

---

##### `requestLogging`<sup>Optional</sup> <a name="requestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring.property.requestLogging"></a>

```java
public IdentityPlatformConfigMonitoringRequestLogging getRequestLogging();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

request_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#request_logging IdentityPlatformConfig#request_logging}

---

### IdentityPlatformConfigMonitoringRequestLogging <a name="IdentityPlatformConfigMonitoringRequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMonitoringRequestLogging;

IdentityPlatformConfigMonitoringRequestLogging.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether logging is enabled for this project or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether logging is enabled for this project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

### IdentityPlatformConfigMultiTenant <a name="IdentityPlatformConfigMultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMultiTenant;

IdentityPlatformConfigMultiTenant.builder()
//  .allowTenants(java.lang.Boolean)
//  .allowTenants(IResolvable)
//  .defaultTenantLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.allowTenants">allowTenants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this project can have tenants or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.defaultTenantLocation">defaultTenantLocation</a></code> | <code>java.lang.String</code> | The default cloud parent org or folder that the tenant project should be created under. |

---

##### `allowTenants`<sup>Optional</sup> <a name="allowTenants" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.allowTenants"></a>

```java
public java.lang.Object getAllowTenants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this project can have tenants or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#allow_tenants IdentityPlatformConfig#allow_tenants}

---

##### `defaultTenantLocation`<sup>Optional</sup> <a name="defaultTenantLocation" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.defaultTenantLocation"></a>

```java
public java.lang.String getDefaultTenantLocation();
```

- *Type:* java.lang.String

The default cloud parent org or folder that the tenant project should be created under.

The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".
If the value is not set, the tenant will be created under the same organization or folder as the agent project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#default_tenant_location IdentityPlatformConfig#default_tenant_location}

---

### IdentityPlatformConfigQuota <a name="IdentityPlatformConfigQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigQuota;

IdentityPlatformConfigQuota.builder()
//  .signUpQuotaConfig(IdentityPlatformConfigQuotaSignUpQuotaConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota.property.signUpQuotaConfig">signUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | sign_up_quota_config block. |

---

##### `signUpQuotaConfig`<sup>Optional</sup> <a name="signUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota.property.signUpQuotaConfig"></a>

```java
public IdentityPlatformConfigQuotaSignUpQuotaConfig getSignUpQuotaConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

sign_up_quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#sign_up_quota_config IdentityPlatformConfig#sign_up_quota_config}

---

### IdentityPlatformConfigQuotaSignUpQuotaConfig <a name="IdentityPlatformConfigQuotaSignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigQuotaSignUpQuotaConfig;

IdentityPlatformConfigQuotaSignUpQuotaConfig.builder()
//  .quota(java.lang.Number)
//  .quotaDuration(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota">quota</a></code> | <code>java.lang.Number</code> | A sign up APIs quota that customers can override temporarily. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration">quotaDuration</a></code> | <code>java.lang.String</code> | How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s". |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | When this quota will take affect. |

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota"></a>

```java
public java.lang.Number getQuota();
```

- *Type:* java.lang.Number

A sign up APIs quota that customers can override temporarily.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#quota IdentityPlatformConfig#quota}

---

##### `quotaDuration`<sup>Optional</sup> <a name="quotaDuration" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration"></a>

```java
public java.lang.String getQuotaDuration();
```

- *Type:* java.lang.String

How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#quota_duration IdentityPlatformConfig#quota_duration}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

When this quota will take affect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#start_time IdentityPlatformConfig#start_time}

---

### IdentityPlatformConfigSignIn <a name="IdentityPlatformConfigSignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignIn;

IdentityPlatformConfigSignIn.builder()
//  .allowDuplicateEmails(java.lang.Boolean)
//  .allowDuplicateEmails(IResolvable)
//  .anonymous(IdentityPlatformConfigSignInAnonymous)
//  .email(IdentityPlatformConfigSignInEmail)
//  .phoneNumber(IdentityPlatformConfigSignInPhoneNumber)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.email">email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `allowDuplicateEmails`<sup>Optional</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.allowDuplicateEmails"></a>

```java
public java.lang.Object getAllowDuplicateEmails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#allow_duplicate_emails IdentityPlatformConfig#allow_duplicate_emails}

---

##### `anonymous`<sup>Optional</sup> <a name="anonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.anonymous"></a>

```java
public IdentityPlatformConfigSignInAnonymous getAnonymous();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#anonymous IdentityPlatformConfig#anonymous}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.email"></a>

```java
public IdentityPlatformConfigSignInEmail getEmail();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#email IdentityPlatformConfig#email}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.phoneNumber"></a>

```java
public IdentityPlatformConfigSignInPhoneNumber getPhoneNumber();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#phone_number IdentityPlatformConfig#phone_number}

---

### IdentityPlatformConfigSignInAnonymous <a name="IdentityPlatformConfigSignInAnonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInAnonymous;

IdentityPlatformConfigSignInAnonymous.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

### IdentityPlatformConfigSignInEmail <a name="IdentityPlatformConfigSignInEmail" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInEmail;

IdentityPlatformConfigSignInEmail.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .passwordRequired(java.lang.Boolean)
//  .passwordRequired(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.passwordRequired">passwordRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether a password is required for email auth or not. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

##### `passwordRequired`<sup>Optional</sup> <a name="passwordRequired" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.passwordRequired"></a>

```java
public java.lang.Object getPasswordRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#password_required IdentityPlatformConfig#password_required}

---

### IdentityPlatformConfigSignInHashConfig <a name="IdentityPlatformConfigSignInHashConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInHashConfig;

IdentityPlatformConfigSignInHashConfig.builder()
    .build();
```


### IdentityPlatformConfigSignInPhoneNumber <a name="IdentityPlatformConfigSignInPhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInPhoneNumber;

IdentityPlatformConfigSignInPhoneNumber.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .testPhoneNumbers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

##### `testPhoneNumbers`<sup>Optional</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestPhoneNumbers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#test_phone_numbers IdentityPlatformConfig#test_phone_numbers}

---

### IdentityPlatformConfigSmsRegionConfig <a name="IdentityPlatformConfigSmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSmsRegionConfig;

IdentityPlatformConfigSmsRegionConfig.builder()
//  .allowByDefault(IdentityPlatformConfigSmsRegionConfigAllowByDefault)
//  .allowlistOnly(IdentityPlatformConfigSmsRegionConfigAllowlistOnly)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowByDefault">allowByDefault</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | allow_by_default block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowlistOnly">allowlistOnly</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | allowlist_only block. |

---

##### `allowByDefault`<sup>Optional</sup> <a name="allowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowByDefault"></a>

```java
public IdentityPlatformConfigSmsRegionConfigAllowByDefault getAllowByDefault();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

allow_by_default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#allow_by_default IdentityPlatformConfig#allow_by_default}

---

##### `allowlistOnly`<sup>Optional</sup> <a name="allowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowlistOnly"></a>

```java
public IdentityPlatformConfigSmsRegionConfigAllowlistOnly getAllowlistOnly();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

allowlist_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#allowlist_only IdentityPlatformConfig#allowlist_only}

---

### IdentityPlatformConfigSmsRegionConfigAllowByDefault <a name="IdentityPlatformConfigSmsRegionConfigAllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSmsRegionConfigAllowByDefault;

IdentityPlatformConfigSmsRegionConfigAllowByDefault.builder()
//  .disallowedRegions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault.property.disallowedRegions">disallowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json. |

---

##### `disallowedRegions`<sup>Optional</sup> <a name="disallowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault.property.disallowedRegions"></a>

```java
public java.util.List<java.lang.String> getDisallowedRegions();
```

- *Type:* java.util.List<java.lang.String>

Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#disallowed_regions IdentityPlatformConfig#disallowed_regions}

---

### IdentityPlatformConfigSmsRegionConfigAllowlistOnly <a name="IdentityPlatformConfigSmsRegionConfigAllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSmsRegionConfigAllowlistOnly;

IdentityPlatformConfigSmsRegionConfigAllowlistOnly.builder()
//  .allowedRegions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly.property.allowedRegions">allowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json. |

---

##### `allowedRegions`<sup>Optional</sup> <a name="allowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly.property.allowedRegions"></a>

```java
public java.util.List<java.lang.String> getAllowedRegions();
```

- *Type:* java.util.List<java.lang.String>

Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#allowed_regions IdentityPlatformConfig#allowed_regions}

---

### IdentityPlatformConfigTimeouts <a name="IdentityPlatformConfigTimeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigTimeouts;

IdentityPlatformConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#create IdentityPlatformConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#delete IdentityPlatformConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#update IdentityPlatformConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#create IdentityPlatformConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#delete IdentityPlatformConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/identity_platform_config#update IdentityPlatformConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference <a name="IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference;

new IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken"></a>

```java
public void resetIdToken()
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken"></a>

```java
public void resetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken">idToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken">refreshToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput"></a>

```java
public java.lang.Object getAccessTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput"></a>

```java
public java.lang.Object getIdTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput"></a>

```java
public java.lang.Object getRefreshTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken"></a>

```java
public java.lang.Object getAccessToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken"></a>

```java
public java.lang.Object getIdToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken"></a>

```java
public java.lang.Object getRefreshToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---


### IdentityPlatformConfigBlockingFunctionsOutputReference <a name="IdentityPlatformConfigBlockingFunctionsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigBlockingFunctionsOutputReference;

new IdentityPlatformConfigBlockingFunctionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials">putForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers">putTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials">resetForwardInboundCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForwardInboundCredentials` <a name="putForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials"></a>

```java
public void putForwardInboundCredentials(IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `putTriggers` <a name="putTriggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers"></a>

```java
public void putTriggers(IResolvable OR java.util.List<IdentityPlatformConfigBlockingFunctionsTriggers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers">IdentityPlatformConfigBlockingFunctionsTriggers</a>>

---

##### `resetForwardInboundCredentials` <a name="resetForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials"></a>

```java
public void resetForwardInboundCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials">forwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers">triggers</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList">IdentityPlatformConfigBlockingFunctionsTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput">forwardInboundCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput">triggersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers">IdentityPlatformConfigBlockingFunctionsTriggers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardInboundCredentials`<sup>Required</sup> <a name="forwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials"></a>

```java
public IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference getForwardInboundCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers"></a>

```java
public IdentityPlatformConfigBlockingFunctionsTriggersList getTriggers();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList">IdentityPlatformConfigBlockingFunctionsTriggersList</a>

---

##### `forwardInboundCredentialsInput`<sup>Optional</sup> <a name="forwardInboundCredentialsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput"></a>

```java
public IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials getForwardInboundCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput"></a>

```java
public java.lang.Object getTriggersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers">IdentityPlatformConfigBlockingFunctionsTriggers</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigBlockingFunctions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

---


### IdentityPlatformConfigBlockingFunctionsTriggersList <a name="IdentityPlatformConfigBlockingFunctionsTriggersList" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigBlockingFunctionsTriggersList;

new IdentityPlatformConfigBlockingFunctionsTriggersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.get"></a>

```java
public IdentityPlatformConfigBlockingFunctionsTriggersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers">IdentityPlatformConfigBlockingFunctionsTriggers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers">IdentityPlatformConfigBlockingFunctionsTriggers</a>>

---


### IdentityPlatformConfigBlockingFunctionsTriggersOutputReference <a name="IdentityPlatformConfigBlockingFunctionsTriggersOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference;

new IdentityPlatformConfigBlockingFunctionsTriggersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput">functionUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri">functionUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers">IdentityPlatformConfigBlockingFunctionsTriggers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `functionUriInput`<sup>Optional</sup> <a name="functionUriInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput"></a>

```java
public java.lang.String getFunctionUriInput();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `functionUri`<sup>Required</sup> <a name="functionUri" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri"></a>

```java
public java.lang.String getFunctionUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers">IdentityPlatformConfigBlockingFunctionsTriggers</a>

---


### IdentityPlatformConfigClientOutputReference <a name="IdentityPlatformConfigClientOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigClientOutputReference;

new IdentityPlatformConfigClientOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.putPermissions"></a>

```java
public void putPermissions(IdentityPlatformConfigClientPermissions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resetPermissions"></a>

```java
public void resetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.firebaseSubdomain">firebaseSubdomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference">IdentityPlatformConfigClientPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissionsInput">permissionsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `firebaseSubdomain`<sup>Required</sup> <a name="firebaseSubdomain" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.firebaseSubdomain"></a>

```java
public java.lang.String getFirebaseSubdomain();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissions"></a>

```java
public IdentityPlatformConfigClientPermissionsOutputReference getPermissions();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference">IdentityPlatformConfigClientPermissionsOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissionsInput"></a>

```java
public IdentityPlatformConfigClientPermissions getPermissionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigClient getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

---


### IdentityPlatformConfigClientPermissionsOutputReference <a name="IdentityPlatformConfigClientPermissionsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigClientPermissionsOutputReference;

new IdentityPlatformConfigClientPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserDeletion">resetDisabledUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserSignup">resetDisabledUserSignup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledUserDeletion` <a name="resetDisabledUserDeletion" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserDeletion"></a>

```java
public void resetDisabledUserDeletion()
```

##### `resetDisabledUserSignup` <a name="resetDisabledUserSignup" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserSignup"></a>

```java
public void resetDisabledUserSignup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletionInput">disabledUserDeletionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignupInput">disabledUserSignupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletion">disabledUserDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignup">disabledUserSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledUserDeletionInput`<sup>Optional</sup> <a name="disabledUserDeletionInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletionInput"></a>

```java
public java.lang.Object getDisabledUserDeletionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disabledUserSignupInput`<sup>Optional</sup> <a name="disabledUserSignupInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignupInput"></a>

```java
public java.lang.Object getDisabledUserSignupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disabledUserDeletion`<sup>Required</sup> <a name="disabledUserDeletion" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletion"></a>

```java
public java.lang.Object getDisabledUserDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disabledUserSignup`<sup>Required</sup> <a name="disabledUserSignup" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignup"></a>

```java
public java.lang.Object getDisabledUserSignup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigClientPermissions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

---


### IdentityPlatformConfigMfaOutputReference <a name="IdentityPlatformConfigMfaOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMfaOutputReference;

new IdentityPlatformConfigMfaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.putProviderConfigs">putProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetEnabledProviders">resetEnabledProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetProviderConfigs">resetProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfigs` <a name="putProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.putProviderConfigs"></a>

```java
public void putProviderConfigs(IResolvable OR java.util.List<IdentityPlatformConfigMfaProviderConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.putProviderConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs">IdentityPlatformConfigMfaProviderConfigs</a>>

---

##### `resetEnabledProviders` <a name="resetEnabledProviders" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetEnabledProviders"></a>

```java
public void resetEnabledProviders()
```

##### `resetProviderConfigs` <a name="resetProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetProviderConfigs"></a>

```java
public void resetProviderConfigs()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigs">providerConfigs</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList">IdentityPlatformConfigMfaProviderConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProvidersInput">enabledProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigsInput">providerConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs">IdentityPlatformConfigMfaProviderConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProviders">enabledProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `providerConfigs`<sup>Required</sup> <a name="providerConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigs"></a>

```java
public IdentityPlatformConfigMfaProviderConfigsList getProviderConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList">IdentityPlatformConfigMfaProviderConfigsList</a>

---

##### `enabledProvidersInput`<sup>Optional</sup> <a name="enabledProvidersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProvidersInput"></a>

```java
public java.util.List<java.lang.String> getEnabledProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `providerConfigsInput`<sup>Optional</sup> <a name="providerConfigsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigsInput"></a>

```java
public java.lang.Object getProviderConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs">IdentityPlatformConfigMfaProviderConfigs</a>>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `enabledProviders`<sup>Required</sup> <a name="enabledProviders" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProviders"></a>

```java
public java.util.List<java.lang.String> getEnabledProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigMfa getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

---


### IdentityPlatformConfigMfaProviderConfigsList <a name="IdentityPlatformConfigMfaProviderConfigsList" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMfaProviderConfigsList;

new IdentityPlatformConfigMfaProviderConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.get"></a>

```java
public IdentityPlatformConfigMfaProviderConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs">IdentityPlatformConfigMfaProviderConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs">IdentityPlatformConfigMfaProviderConfigs</a>>

---


### IdentityPlatformConfigMfaProviderConfigsOutputReference <a name="IdentityPlatformConfigMfaProviderConfigsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMfaProviderConfigsOutputReference;

new IdentityPlatformConfigMfaProviderConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig">putTotpProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetTotpProviderConfig">resetTotpProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTotpProviderConfig` <a name="putTotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig"></a>

```java
public void putTotpProviderConfig(IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---

##### `resetState` <a name="resetState" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetTotpProviderConfig` <a name="resetTotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetTotpProviderConfig"></a>

```java
public void resetTotpProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfig">totpProviderConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfigInput">totpProviderConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs">IdentityPlatformConfigMfaProviderConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totpProviderConfig`<sup>Required</sup> <a name="totpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfig"></a>

```java
public IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference getTotpProviderConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `totpProviderConfigInput`<sup>Optional</sup> <a name="totpProviderConfigInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfigInput"></a>

```java
public IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig getTotpProviderConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs">IdentityPlatformConfigMfaProviderConfigs</a>

---


### IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference <a name="IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference;

new IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resetAdjacentIntervals">resetAdjacentIntervals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdjacentIntervals` <a name="resetAdjacentIntervals" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resetAdjacentIntervals"></a>

```java
public void resetAdjacentIntervals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervalsInput">adjacentIntervalsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervals">adjacentIntervals</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adjacentIntervalsInput`<sup>Optional</sup> <a name="adjacentIntervalsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervalsInput"></a>

```java
public java.lang.Number getAdjacentIntervalsInput();
```

- *Type:* java.lang.Number

---

##### `adjacentIntervals`<sup>Required</sup> <a name="adjacentIntervals" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervals"></a>

```java
public java.lang.Number getAdjacentIntervals();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---


### IdentityPlatformConfigMonitoringOutputReference <a name="IdentityPlatformConfigMonitoringOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMonitoringOutputReference;

new IdentityPlatformConfigMonitoringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.putRequestLogging">putRequestLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resetRequestLogging">resetRequestLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestLogging` <a name="putRequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.putRequestLogging"></a>

```java
public void putRequestLogging(IdentityPlatformConfigMonitoringRequestLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.putRequestLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

---

##### `resetRequestLogging` <a name="resetRequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resetRequestLogging"></a>

```java
public void resetRequestLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLogging">requestLogging</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference">IdentityPlatformConfigMonitoringRequestLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLoggingInput">requestLoggingInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestLogging`<sup>Required</sup> <a name="requestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLogging"></a>

```java
public IdentityPlatformConfigMonitoringRequestLoggingOutputReference getRequestLogging();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference">IdentityPlatformConfigMonitoringRequestLoggingOutputReference</a>

---

##### `requestLoggingInput`<sup>Optional</sup> <a name="requestLoggingInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLoggingInput"></a>

```java
public IdentityPlatformConfigMonitoringRequestLogging getRequestLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigMonitoring getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

---


### IdentityPlatformConfigMonitoringRequestLoggingOutputReference <a name="IdentityPlatformConfigMonitoringRequestLoggingOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMonitoringRequestLoggingOutputReference;

new IdentityPlatformConfigMonitoringRequestLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigMonitoringRequestLogging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

---


### IdentityPlatformConfigMultiTenantOutputReference <a name="IdentityPlatformConfigMultiTenantOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigMultiTenantOutputReference;

new IdentityPlatformConfigMultiTenantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetAllowTenants">resetAllowTenants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetDefaultTenantLocation">resetDefaultTenantLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowTenants` <a name="resetAllowTenants" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetAllowTenants"></a>

```java
public void resetAllowTenants()
```

##### `resetDefaultTenantLocation` <a name="resetDefaultTenantLocation" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetDefaultTenantLocation"></a>

```java
public void resetDefaultTenantLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenantsInput">allowTenantsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocationInput">defaultTenantLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenants">allowTenants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocation">defaultTenantLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowTenantsInput`<sup>Optional</sup> <a name="allowTenantsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenantsInput"></a>

```java
public java.lang.Object getAllowTenantsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTenantLocationInput`<sup>Optional</sup> <a name="defaultTenantLocationInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocationInput"></a>

```java
public java.lang.String getDefaultTenantLocationInput();
```

- *Type:* java.lang.String

---

##### `allowTenants`<sup>Required</sup> <a name="allowTenants" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenants"></a>

```java
public java.lang.Object getAllowTenants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTenantLocation`<sup>Required</sup> <a name="defaultTenantLocation" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocation"></a>

```java
public java.lang.String getDefaultTenantLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigMultiTenant getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

---


### IdentityPlatformConfigQuotaOutputReference <a name="IdentityPlatformConfigQuotaOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigQuotaOutputReference;

new IdentityPlatformConfigQuotaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig">putSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig">resetSignUpQuotaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSignUpQuotaConfig` <a name="putSignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig"></a>

```java
public void putSignUpQuotaConfig(IdentityPlatformConfigQuotaSignUpQuotaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `resetSignUpQuotaConfig` <a name="resetSignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig"></a>

```java
public void resetSignUpQuotaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig">signUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput">signUpQuotaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signUpQuotaConfig`<sup>Required</sup> <a name="signUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig"></a>

```java
public IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference getSignUpQuotaConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a>

---

##### `signUpQuotaConfigInput`<sup>Optional</sup> <a name="signUpQuotaConfigInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput"></a>

```java
public IdentityPlatformConfigQuotaSignUpQuotaConfig getSignUpQuotaConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigQuota getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

---


### IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference <a name="IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference;

new IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration">resetQuotaDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetQuotaDuration` <a name="resetQuotaDuration" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration"></a>

```java
public void resetQuotaDuration()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput">quotaDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput">quotaInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota">quota</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration">quotaDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `quotaDurationInput`<sup>Optional</sup> <a name="quotaDurationInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput"></a>

```java
public java.lang.String getQuotaDurationInput();
```

- *Type:* java.lang.String

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput"></a>

```java
public java.lang.Number getQuotaInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota"></a>

```java
public java.lang.Number getQuota();
```

- *Type:* java.lang.Number

---

##### `quotaDuration`<sup>Required</sup> <a name="quotaDuration" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration"></a>

```java
public java.lang.String getQuotaDuration();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigQuotaSignUpQuotaConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---


### IdentityPlatformConfigSignInAnonymousOutputReference <a name="IdentityPlatformConfigSignInAnonymousOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInAnonymousOutputReference;

new IdentityPlatformConfigSignInAnonymousOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigSignInAnonymous getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

---


### IdentityPlatformConfigSignInEmailOutputReference <a name="IdentityPlatformConfigSignInEmailOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInEmailOutputReference;

new IdentityPlatformConfigSignInEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resetPasswordRequired">resetPasswordRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPasswordRequired` <a name="resetPasswordRequired" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```java
public void resetPasswordRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequiredInput">passwordRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequired">passwordRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordRequiredInput`<sup>Optional</sup> <a name="passwordRequiredInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```java
public java.lang.Object getPasswordRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordRequired`<sup>Required</sup> <a name="passwordRequired" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequired"></a>

```java
public java.lang.Object getPasswordRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigSignInEmail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

---


### IdentityPlatformConfigSignInHashConfigList <a name="IdentityPlatformConfigSignInHashConfigList" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInHashConfigList;

new IdentityPlatformConfigSignInHashConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.get"></a>

```java
public IdentityPlatformConfigSignInHashConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IdentityPlatformConfigSignInHashConfigOutputReference <a name="IdentityPlatformConfigSignInHashConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInHashConfigOutputReference;

new IdentityPlatformConfigSignInHashConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.memoryCost">memoryCost</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.rounds">rounds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.saltSeparator">saltSeparator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.signerKey">signerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig">IdentityPlatformConfigSignInHashConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `memoryCost`<sup>Required</sup> <a name="memoryCost" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```java
public java.lang.Number getMemoryCost();
```

- *Type:* java.lang.Number

---

##### `rounds`<sup>Required</sup> <a name="rounds" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.rounds"></a>

```java
public java.lang.Number getRounds();
```

- *Type:* java.lang.Number

---

##### `saltSeparator`<sup>Required</sup> <a name="saltSeparator" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```java
public java.lang.String getSaltSeparator();
```

- *Type:* java.lang.String

---

##### `signerKey`<sup>Required</sup> <a name="signerKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.signerKey"></a>

```java
public java.lang.String getSignerKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigSignInHashConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig">IdentityPlatformConfigSignInHashConfig</a>

---


### IdentityPlatformConfigSignInOutputReference <a name="IdentityPlatformConfigSignInOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInOutputReference;

new IdentityPlatformConfigSignInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putAnonymous">putAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putPhoneNumber">putPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAllowDuplicateEmails">resetAllowDuplicateEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAnonymous">resetAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnonymous` <a name="putAnonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putAnonymous"></a>

```java
public void putAnonymous(IdentityPlatformConfigSignInAnonymous value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putAnonymous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

---

##### `putEmail` <a name="putEmail" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putEmail"></a>

```java
public void putEmail(IdentityPlatformConfigSignInEmail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

---

##### `putPhoneNumber` <a name="putPhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putPhoneNumber"></a>

```java
public void putPhoneNumber(IdentityPlatformConfigSignInPhoneNumber value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putPhoneNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

---

##### `resetAllowDuplicateEmails` <a name="resetAllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```java
public void resetAllowDuplicateEmails()
```

##### `resetAnonymous` <a name="resetAnonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAnonymous"></a>

```java
public void resetAnonymous()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference">IdentityPlatformConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference">IdentityPlatformConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.hashConfig">hashConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList">IdentityPlatformConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference">IdentityPlatformConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmailsInput">allowDuplicateEmailsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymousInput">anonymousInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.emailInput">emailInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anonymous`<sup>Required</sup> <a name="anonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymous"></a>

```java
public IdentityPlatformConfigSignInAnonymousOutputReference getAnonymous();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference">IdentityPlatformConfigSignInAnonymousOutputReference</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.email"></a>

```java
public IdentityPlatformConfigSignInEmailOutputReference getEmail();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference">IdentityPlatformConfigSignInEmailOutputReference</a>

---

##### `hashConfig`<sup>Required</sup> <a name="hashConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.hashConfig"></a>

```java
public IdentityPlatformConfigSignInHashConfigList getHashConfig();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList">IdentityPlatformConfigSignInHashConfigList</a>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumber"></a>

```java
public IdentityPlatformConfigSignInPhoneNumberOutputReference getPhoneNumber();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference">IdentityPlatformConfigSignInPhoneNumberOutputReference</a>

---

##### `allowDuplicateEmailsInput`<sup>Optional</sup> <a name="allowDuplicateEmailsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```java
public java.lang.Object getAllowDuplicateEmailsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anonymousInput`<sup>Optional</sup> <a name="anonymousInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymousInput"></a>

```java
public IdentityPlatformConfigSignInAnonymous getAnonymousInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.emailInput"></a>

```java
public IdentityPlatformConfigSignInEmail getEmailInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumberInput"></a>

```java
public IdentityPlatformConfigSignInPhoneNumber getPhoneNumberInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

---

##### `allowDuplicateEmails`<sup>Required</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```java
public java.lang.Object getAllowDuplicateEmails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigSignIn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

---


### IdentityPlatformConfigSignInPhoneNumberOutputReference <a name="IdentityPlatformConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSignInPhoneNumberOutputReference;

new IdentityPlatformConfigSignInPhoneNumberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">resetTestPhoneNumbers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestPhoneNumbers` <a name="resetTestPhoneNumbers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```java
public void resetTestPhoneNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">testPhoneNumbersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `testPhoneNumbersInput`<sup>Optional</sup> <a name="testPhoneNumbersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestPhoneNumbersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `testPhoneNumbers`<sup>Required</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestPhoneNumbers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigSignInPhoneNumber getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

---


### IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference <a name="IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference;

new IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resetDisallowedRegions">resetDisallowedRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisallowedRegions` <a name="resetDisallowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resetDisallowedRegions"></a>

```java
public void resetDisallowedRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegionsInput">disallowedRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegions">disallowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disallowedRegionsInput`<sup>Optional</sup> <a name="disallowedRegionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegionsInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowedRegions`<sup>Required</sup> <a name="disallowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegions"></a>

```java
public java.util.List<java.lang.String> getDisallowedRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigSmsRegionConfigAllowByDefault getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---


### IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference <a name="IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference;

new IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resetAllowedRegions">resetAllowedRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRegions` <a name="resetAllowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resetAllowedRegions"></a>

```java
public void resetAllowedRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegionsInput">allowedRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegions">allowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedRegionsInput`<sup>Optional</sup> <a name="allowedRegionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedRegions`<sup>Required</sup> <a name="allowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegions"></a>

```java
public java.util.List<java.lang.String> getAllowedRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigSmsRegionConfigAllowlistOnly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---


### IdentityPlatformConfigSmsRegionConfigOutputReference <a name="IdentityPlatformConfigSmsRegionConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigSmsRegionConfigOutputReference;

new IdentityPlatformConfigSmsRegionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault">putAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly">putAllowlistOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowByDefault">resetAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowlistOnly">resetAllowlistOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowByDefault` <a name="putAllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault"></a>

```java
public void putAllowByDefault(IdentityPlatformConfigSmsRegionConfigAllowByDefault value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---

##### `putAllowlistOnly` <a name="putAllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly"></a>

```java
public void putAllowlistOnly(IdentityPlatformConfigSmsRegionConfigAllowlistOnly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---

##### `resetAllowByDefault` <a name="resetAllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowByDefault"></a>

```java
public void resetAllowByDefault()
```

##### `resetAllowlistOnly` <a name="resetAllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowlistOnly"></a>

```java
public void resetAllowlistOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefault">allowByDefault</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference">IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnly">allowlistOnly</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference">IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefaultInput">allowByDefaultInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnlyInput">allowlistOnlyInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowByDefault`<sup>Required</sup> <a name="allowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefault"></a>

```java
public IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference getAllowByDefault();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference">IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference</a>

---

##### `allowlistOnly`<sup>Required</sup> <a name="allowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnly"></a>

```java
public IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference getAllowlistOnly();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference">IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference</a>

---

##### `allowByDefaultInput`<sup>Optional</sup> <a name="allowByDefaultInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefaultInput"></a>

```java
public IdentityPlatformConfigSmsRegionConfigAllowByDefault getAllowByDefaultInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---

##### `allowlistOnlyInput`<sup>Optional</sup> <a name="allowlistOnlyInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnlyInput"></a>

```java
public IdentityPlatformConfigSmsRegionConfigAllowlistOnly getAllowlistOnlyInput();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.internalValue"></a>

```java
public IdentityPlatformConfigSmsRegionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

---


### IdentityPlatformConfigTimeoutsOutputReference <a name="IdentityPlatformConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.identity_platform_config.IdentityPlatformConfigTimeoutsOutputReference;

new IdentityPlatformConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a>

---



