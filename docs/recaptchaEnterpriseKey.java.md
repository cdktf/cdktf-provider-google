# `recaptchaEnterpriseKey` Submodule <a name="`recaptchaEnterpriseKey` Submodule" id="@cdktf/provider-google.recaptchaEnterpriseKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecaptchaEnterpriseKey <a name="RecaptchaEnterpriseKey" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key google_recaptcha_enterprise_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKey;

RecaptchaEnterpriseKey.Builder.create(Construct scope, java.lang.String id)
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
//  .androidSettings(RecaptchaEnterpriseKeyAndroidSettings)
//  .id(java.lang.String)
//  .iosSettings(RecaptchaEnterpriseKeyIosSettings)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .testingOptions(RecaptchaEnterpriseKeyTestingOptions)
//  .timeouts(RecaptchaEnterpriseKeyTimeouts)
//  .wafSettings(RecaptchaEnterpriseKeyWafSettings)
//  .webSettings(RecaptchaEnterpriseKeyWebSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of this key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.androidSettings">androidSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | android_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.iosSettings">iosSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | ios_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels). |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.testingOptions">testingOptions</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | testing_options block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.wafSettings">wafSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a></code> | waf_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.webSettings">webSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | web_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable display name of this key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#display_name RecaptchaEnterpriseKey#display_name}

---

##### `androidSettings`<sup>Optional</sup> <a name="androidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.androidSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

android_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#android_settings RecaptchaEnterpriseKey#android_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iosSettings`<sup>Optional</sup> <a name="iosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.iosSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

ios_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#ios_settings RecaptchaEnterpriseKey#ios_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#labels RecaptchaEnterpriseKey#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#project RecaptchaEnterpriseKey#project}

---

##### `testingOptions`<sup>Optional</sup> <a name="testingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.testingOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

testing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#testing_options RecaptchaEnterpriseKey#testing_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#timeouts RecaptchaEnterpriseKey#timeouts}

---

##### `wafSettings`<sup>Optional</sup> <a name="wafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.wafSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a>

waf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#waf_settings RecaptchaEnterpriseKey#waf_settings}

---

##### `webSettings`<sup>Optional</sup> <a name="webSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.webSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

web_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#web_settings RecaptchaEnterpriseKey#web_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings">putAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings">putIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions">putTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWafSettings">putWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings">putWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetAndroidSettings">resetAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetIosSettings">resetIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTestingOptions">resetTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWafSettings">resetWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWebSettings">resetWebSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAndroidSettings` <a name="putAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings"></a>

```java
public void putAndroidSettings(RecaptchaEnterpriseKeyAndroidSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `putIosSettings` <a name="putIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings"></a>

```java
public void putIosSettings(RecaptchaEnterpriseKeyIosSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---

##### `putTestingOptions` <a name="putTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions"></a>

```java
public void putTestingOptions(RecaptchaEnterpriseKeyTestingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts"></a>

```java
public void putTimeouts(RecaptchaEnterpriseKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

---

##### `putWafSettings` <a name="putWafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWafSettings"></a>

```java
public void putWafSettings(RecaptchaEnterpriseKeyWafSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWafSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a>

---

##### `putWebSettings` <a name="putWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings"></a>

```java
public void putWebSettings(RecaptchaEnterpriseKeyWebSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---

##### `resetAndroidSettings` <a name="resetAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetAndroidSettings"></a>

```java
public void resetAndroidSettings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetId"></a>

```java
public void resetId()
```

##### `resetIosSettings` <a name="resetIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetIosSettings"></a>

```java
public void resetIosSettings()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetProject"></a>

```java
public void resetProject()
```

##### `resetTestingOptions` <a name="resetTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTestingOptions"></a>

```java
public void resetTestingOptions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWafSettings` <a name="resetWafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWafSettings"></a>

```java
public void resetWafSettings()
```

##### `resetWebSettings` <a name="resetWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWebSettings"></a>

```java
public void resetWebSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKey;

RecaptchaEnterpriseKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKey;

RecaptchaEnterpriseKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKey;

RecaptchaEnterpriseKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKey;

RecaptchaEnterpriseKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RecaptchaEnterpriseKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RecaptchaEnterpriseKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RecaptchaEnterpriseKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RecaptchaEnterpriseKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettings">androidSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference">RecaptchaEnterpriseKeyAndroidSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettings">iosSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference">RecaptchaEnterpriseKeyIosSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptions">testingOptions</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference">RecaptchaEnterpriseKeyTestingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference">RecaptchaEnterpriseKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.wafSettings">wafSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference">RecaptchaEnterpriseKeyWafSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettings">webSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference">RecaptchaEnterpriseKeyWebSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettingsInput">androidSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettingsInput">iosSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptionsInput">testingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.wafSettingsInput">wafSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettingsInput">webSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `androidSettings`<sup>Required</sup> <a name="androidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettings"></a>

```java
public RecaptchaEnterpriseKeyAndroidSettingsOutputReference getAndroidSettings();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference">RecaptchaEnterpriseKeyAndroidSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `iosSettings`<sup>Required</sup> <a name="iosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettings"></a>

```java
public RecaptchaEnterpriseKeyIosSettingsOutputReference getIosSettings();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference">RecaptchaEnterpriseKeyIosSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `testingOptions`<sup>Required</sup> <a name="testingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptions"></a>

```java
public RecaptchaEnterpriseKeyTestingOptionsOutputReference getTestingOptions();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference">RecaptchaEnterpriseKeyTestingOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeouts"></a>

```java
public RecaptchaEnterpriseKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference">RecaptchaEnterpriseKeyTimeoutsOutputReference</a>

---

##### `wafSettings`<sup>Required</sup> <a name="wafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.wafSettings"></a>

```java
public RecaptchaEnterpriseKeyWafSettingsOutputReference getWafSettings();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference">RecaptchaEnterpriseKeyWafSettingsOutputReference</a>

---

##### `webSettings`<sup>Required</sup> <a name="webSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettings"></a>

```java
public RecaptchaEnterpriseKeyWebSettingsOutputReference getWebSettings();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference">RecaptchaEnterpriseKeyWebSettingsOutputReference</a>

---

##### `androidSettingsInput`<sup>Optional</sup> <a name="androidSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettingsInput"></a>

```java
public RecaptchaEnterpriseKeyAndroidSettings getAndroidSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iosSettingsInput`<sup>Optional</sup> <a name="iosSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettingsInput"></a>

```java
public RecaptchaEnterpriseKeyIosSettings getIosSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `testingOptionsInput`<sup>Optional</sup> <a name="testingOptionsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptionsInput"></a>

```java
public RecaptchaEnterpriseKeyTestingOptions getTestingOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

---

##### `wafSettingsInput`<sup>Optional</sup> <a name="wafSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.wafSettingsInput"></a>

```java
public RecaptchaEnterpriseKeyWafSettings getWafSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a>

---

##### `webSettingsInput`<sup>Optional</sup> <a name="webSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettingsInput"></a>

```java
public RecaptchaEnterpriseKeyWebSettings getWebSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RecaptchaEnterpriseKeyAndroidSettings <a name="RecaptchaEnterpriseKeyAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyAndroidSettings;

RecaptchaEnterpriseKeyAndroidSettings.builder()
//  .allowAllPackageNames(java.lang.Boolean)
//  .allowAllPackageNames(IResolvable)
//  .allowedPackageNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames">allowAllPackageNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, it means allowed_package_names will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames">allowedPackageNames</a></code> | <code>java.util.List<java.lang.String></code> | Android package names of apps allowed to use the key. Example: 'com.companyname.appname'. |

---

##### `allowAllPackageNames`<sup>Optional</sup> <a name="allowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames"></a>

```java
public java.lang.Object getAllowAllPackageNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, it means allowed_package_names will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#allow_all_package_names RecaptchaEnterpriseKey#allow_all_package_names}

---

##### `allowedPackageNames`<sup>Optional</sup> <a name="allowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames"></a>

```java
public java.util.List<java.lang.String> getAllowedPackageNames();
```

- *Type:* java.util.List<java.lang.String>

Android package names of apps allowed to use the key. Example: 'com.companyname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#allowed_package_names RecaptchaEnterpriseKey#allowed_package_names}

---

### RecaptchaEnterpriseKeyConfig <a name="RecaptchaEnterpriseKeyConfig" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyConfig;

RecaptchaEnterpriseKeyConfig.builder()
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
//  .androidSettings(RecaptchaEnterpriseKeyAndroidSettings)
//  .id(java.lang.String)
//  .iosSettings(RecaptchaEnterpriseKeyIosSettings)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .testingOptions(RecaptchaEnterpriseKeyTestingOptions)
//  .timeouts(RecaptchaEnterpriseKeyTimeouts)
//  .wafSettings(RecaptchaEnterpriseKeyWafSettings)
//  .webSettings(RecaptchaEnterpriseKeyWebSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of this key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.androidSettings">androidSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | android_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.iosSettings">iosSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | ios_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels). |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.testingOptions">testingOptions</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | testing_options block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.wafSettings">wafSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a></code> | waf_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.webSettings">webSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | web_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable display name of this key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#display_name RecaptchaEnterpriseKey#display_name}

---

##### `androidSettings`<sup>Optional</sup> <a name="androidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.androidSettings"></a>

```java
public RecaptchaEnterpriseKeyAndroidSettings getAndroidSettings();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

android_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#android_settings RecaptchaEnterpriseKey#android_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iosSettings`<sup>Optional</sup> <a name="iosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.iosSettings"></a>

```java
public RecaptchaEnterpriseKeyIosSettings getIosSettings();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

ios_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#ios_settings RecaptchaEnterpriseKey#ios_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#labels RecaptchaEnterpriseKey#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#project RecaptchaEnterpriseKey#project}

---

##### `testingOptions`<sup>Optional</sup> <a name="testingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.testingOptions"></a>

```java
public RecaptchaEnterpriseKeyTestingOptions getTestingOptions();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

testing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#testing_options RecaptchaEnterpriseKey#testing_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.timeouts"></a>

```java
public RecaptchaEnterpriseKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#timeouts RecaptchaEnterpriseKey#timeouts}

---

##### `wafSettings`<sup>Optional</sup> <a name="wafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.wafSettings"></a>

```java
public RecaptchaEnterpriseKeyWafSettings getWafSettings();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a>

waf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#waf_settings RecaptchaEnterpriseKey#waf_settings}

---

##### `webSettings`<sup>Optional</sup> <a name="webSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.webSettings"></a>

```java
public RecaptchaEnterpriseKeyWebSettings getWebSettings();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

web_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#web_settings RecaptchaEnterpriseKey#web_settings}

---

### RecaptchaEnterpriseKeyIosSettings <a name="RecaptchaEnterpriseKeyIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyIosSettings;

RecaptchaEnterpriseKeyIosSettings.builder()
//  .allowAllBundleIds(java.lang.Boolean)
//  .allowAllBundleIds(IResolvable)
//  .allowedBundleIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds">allowAllBundleIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, it means allowed_bundle_ids will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds">allowedBundleIds</a></code> | <code>java.util.List<java.lang.String></code> | iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'. |

---

##### `allowAllBundleIds`<sup>Optional</sup> <a name="allowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds"></a>

```java
public java.lang.Object getAllowAllBundleIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, it means allowed_bundle_ids will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#allow_all_bundle_ids RecaptchaEnterpriseKey#allow_all_bundle_ids}

---

##### `allowedBundleIds`<sup>Optional</sup> <a name="allowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds"></a>

```java
public java.util.List<java.lang.String> getAllowedBundleIds();
```

- *Type:* java.util.List<java.lang.String>

iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#allowed_bundle_ids RecaptchaEnterpriseKey#allowed_bundle_ids}

---

### RecaptchaEnterpriseKeyTestingOptions <a name="RecaptchaEnterpriseKeyTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyTestingOptions;

RecaptchaEnterpriseKeyTestingOptions.builder()
//  .testingChallenge(java.lang.String)
//  .testingScore(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingChallenge">testingChallenge</a></code> | <code>java.lang.String</code> | For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingScore">testingScore</a></code> | <code>java.lang.Number</code> | All assessments for this Key will return this score. |

---

##### `testingChallenge`<sup>Optional</sup> <a name="testingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingChallenge"></a>

```java
public java.lang.String getTestingChallenge();
```

- *Type:* java.lang.String

For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE.

Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#testing_challenge RecaptchaEnterpriseKey#testing_challenge}

---

##### `testingScore`<sup>Optional</sup> <a name="testingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingScore"></a>

```java
public java.lang.Number getTestingScore();
```

- *Type:* java.lang.Number

All assessments for this Key will return this score.

Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#testing_score RecaptchaEnterpriseKey#testing_score}

---

### RecaptchaEnterpriseKeyTimeouts <a name="RecaptchaEnterpriseKeyTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyTimeouts;

RecaptchaEnterpriseKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}.

---

### RecaptchaEnterpriseKeyWafSettings <a name="RecaptchaEnterpriseKeyWafSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyWafSettings;

RecaptchaEnterpriseKeyWafSettings.builder()
    .wafFeature(java.lang.String)
    .wafService(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.property.wafFeature">wafFeature</a></code> | <code>java.lang.String</code> | Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.property.wafService">wafService</a></code> | <code>java.lang.String</code> | The WAF service that uses this key. Possible values: CA, FASTLY. |

---

##### `wafFeature`<sup>Required</sup> <a name="wafFeature" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.property.wafFeature"></a>

```java
public java.lang.String getWafFeature();
```

- *Type:* java.lang.String

Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#waf_feature RecaptchaEnterpriseKey#waf_feature}

---

##### `wafService`<sup>Required</sup> <a name="wafService" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings.property.wafService"></a>

```java
public java.lang.String getWafService();
```

- *Type:* java.lang.String

The WAF service that uses this key. Possible values: CA, FASTLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#waf_service RecaptchaEnterpriseKey#waf_service}

---

### RecaptchaEnterpriseKeyWebSettings <a name="RecaptchaEnterpriseKeyWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyWebSettings;

RecaptchaEnterpriseKeyWebSettings.builder()
    .integrationType(java.lang.String)
//  .allowAllDomains(java.lang.Boolean)
//  .allowAllDomains(IResolvable)
//  .allowAmpTraffic(java.lang.Boolean)
//  .allowAmpTraffic(IResolvable)
//  .allowedDomains(java.util.List<java.lang.String>)
//  .challengeSecurityPreference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAllDomains">allowAllDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, it means allowed_domains will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic">allowAmpTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowedDomains">allowedDomains</a></code> | <code>java.util.List<java.lang.String></code> | Domains or subdomains of websites allowed to use the key. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference">challengeSecurityPreference</a></code> | <code>java.lang.String</code> | Settings for the frequency and difficulty at which this key triggers captcha challenges. |

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#integration_type RecaptchaEnterpriseKey#integration_type}

---

##### `allowAllDomains`<sup>Optional</sup> <a name="allowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAllDomains"></a>

```java
public java.lang.Object getAllowAllDomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, it means allowed_domains will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#allow_all_domains RecaptchaEnterpriseKey#allow_all_domains}

---

##### `allowAmpTraffic`<sup>Optional</sup> <a name="allowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic"></a>

```java
public java.lang.Object getAllowAmpTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites.

This is supported only for the SCORE integration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#allow_amp_traffic RecaptchaEnterpriseKey#allow_amp_traffic}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowedDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedDomains();
```

- *Type:* java.util.List<java.lang.String>

Domains or subdomains of websites allowed to use the key.

All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#allowed_domains RecaptchaEnterpriseKey#allowed_domains}

---

##### `challengeSecurityPreference`<sup>Optional</sup> <a name="challengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference"></a>

```java
public java.lang.String getChallengeSecurityPreference();
```

- *Type:* java.lang.String

Settings for the frequency and difficulty at which this key triggers captcha challenges.

This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/recaptcha_enterprise_key#challenge_security_preference RecaptchaEnterpriseKey#challenge_security_preference}

---

## Classes <a name="Classes" id="Classes"></a>

### RecaptchaEnterpriseKeyAndroidSettingsOutputReference <a name="RecaptchaEnterpriseKeyAndroidSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyAndroidSettingsOutputReference;

new RecaptchaEnterpriseKeyAndroidSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames">resetAllowAllPackageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames">resetAllowedPackageNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllPackageNames` <a name="resetAllowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames"></a>

```java
public void resetAllowAllPackageNames()
```

##### `resetAllowedPackageNames` <a name="resetAllowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames"></a>

```java
public void resetAllowedPackageNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput">allowAllPackageNamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput">allowedPackageNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames">allowAllPackageNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames">allowedPackageNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowAllPackageNamesInput`<sup>Optional</sup> <a name="allowAllPackageNamesInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput"></a>

```java
public java.lang.Object getAllowAllPackageNamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedPackageNamesInput`<sup>Optional</sup> <a name="allowedPackageNamesInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedPackageNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowAllPackageNames`<sup>Required</sup> <a name="allowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames"></a>

```java
public java.lang.Object getAllowAllPackageNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedPackageNames`<sup>Required</sup> <a name="allowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames"></a>

```java
public java.util.List<java.lang.String> getAllowedPackageNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue"></a>

```java
public RecaptchaEnterpriseKeyAndroidSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---


### RecaptchaEnterpriseKeyIosSettingsOutputReference <a name="RecaptchaEnterpriseKeyIosSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyIosSettingsOutputReference;

new RecaptchaEnterpriseKeyIosSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds">resetAllowAllBundleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds">resetAllowedBundleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllBundleIds` <a name="resetAllowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds"></a>

```java
public void resetAllowAllBundleIds()
```

##### `resetAllowedBundleIds` <a name="resetAllowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds"></a>

```java
public void resetAllowedBundleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput">allowAllBundleIdsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput">allowedBundleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds">allowAllBundleIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds">allowedBundleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowAllBundleIdsInput`<sup>Optional</sup> <a name="allowAllBundleIdsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput"></a>

```java
public java.lang.Object getAllowAllBundleIdsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedBundleIdsInput`<sup>Optional</sup> <a name="allowedBundleIdsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedBundleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowAllBundleIds`<sup>Required</sup> <a name="allowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds"></a>

```java
public java.lang.Object getAllowAllBundleIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedBundleIds`<sup>Required</sup> <a name="allowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds"></a>

```java
public java.util.List<java.lang.String> getAllowedBundleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue"></a>

```java
public RecaptchaEnterpriseKeyIosSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---


### RecaptchaEnterpriseKeyTestingOptionsOutputReference <a name="RecaptchaEnterpriseKeyTestingOptionsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyTestingOptionsOutputReference;

new RecaptchaEnterpriseKeyTestingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge">resetTestingChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore">resetTestingScore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestingChallenge` <a name="resetTestingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge"></a>

```java
public void resetTestingChallenge()
```

##### `resetTestingScore` <a name="resetTestingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore"></a>

```java
public void resetTestingScore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput">testingChallengeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput">testingScoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge">testingChallenge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore">testingScore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `testingChallengeInput`<sup>Optional</sup> <a name="testingChallengeInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput"></a>

```java
public java.lang.String getTestingChallengeInput();
```

- *Type:* java.lang.String

---

##### `testingScoreInput`<sup>Optional</sup> <a name="testingScoreInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput"></a>

```java
public java.lang.Number getTestingScoreInput();
```

- *Type:* java.lang.Number

---

##### `testingChallenge`<sup>Required</sup> <a name="testingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge"></a>

```java
public java.lang.String getTestingChallenge();
```

- *Type:* java.lang.String

---

##### `testingScore`<sup>Required</sup> <a name="testingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore"></a>

```java
public java.lang.Number getTestingScore();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue"></a>

```java
public RecaptchaEnterpriseKeyTestingOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---


### RecaptchaEnterpriseKeyTimeoutsOutputReference <a name="RecaptchaEnterpriseKeyTimeoutsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyTimeoutsOutputReference;

new RecaptchaEnterpriseKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

---


### RecaptchaEnterpriseKeyWafSettingsOutputReference <a name="RecaptchaEnterpriseKeyWafSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyWafSettingsOutputReference;

new RecaptchaEnterpriseKeyWafSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeatureInput">wafFeatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafServiceInput">wafServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeature">wafFeature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafService">wafService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `wafFeatureInput`<sup>Optional</sup> <a name="wafFeatureInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeatureInput"></a>

```java
public java.lang.String getWafFeatureInput();
```

- *Type:* java.lang.String

---

##### `wafServiceInput`<sup>Optional</sup> <a name="wafServiceInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafServiceInput"></a>

```java
public java.lang.String getWafServiceInput();
```

- *Type:* java.lang.String

---

##### `wafFeature`<sup>Required</sup> <a name="wafFeature" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeature"></a>

```java
public java.lang.String getWafFeature();
```

- *Type:* java.lang.String

---

##### `wafService`<sup>Required</sup> <a name="wafService" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafService"></a>

```java
public java.lang.String getWafService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettingsOutputReference.property.internalValue"></a>

```java
public RecaptchaEnterpriseKeyWafSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWafSettings">RecaptchaEnterpriseKeyWafSettings</a>

---


### RecaptchaEnterpriseKeyWebSettingsOutputReference <a name="RecaptchaEnterpriseKeyWebSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.recaptcha_enterprise_key.RecaptchaEnterpriseKeyWebSettingsOutputReference;

new RecaptchaEnterpriseKeyWebSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains">resetAllowAllDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic">resetAllowAmpTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference">resetChallengeSecurityPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllDomains` <a name="resetAllowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains"></a>

```java
public void resetAllowAllDomains()
```

##### `resetAllowAmpTraffic` <a name="resetAllowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic"></a>

```java
public void resetAllowAmpTraffic()
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains"></a>

```java
public void resetAllowedDomains()
```

##### `resetChallengeSecurityPreference` <a name="resetChallengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference"></a>

```java
public void resetChallengeSecurityPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput">allowAllDomainsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput">allowAmpTrafficInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput">challengeSecurityPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput">integrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains">allowAllDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic">allowAmpTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains">allowedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference">challengeSecurityPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowAllDomainsInput`<sup>Optional</sup> <a name="allowAllDomainsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput"></a>

```java
public java.lang.Object getAllowAllDomainsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowAmpTrafficInput`<sup>Optional</sup> <a name="allowAmpTrafficInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput"></a>

```java
public java.lang.Object getAllowAmpTrafficInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `challengeSecurityPreferenceInput`<sup>Optional</sup> <a name="challengeSecurityPreferenceInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput"></a>

```java
public java.lang.String getChallengeSecurityPreferenceInput();
```

- *Type:* java.lang.String

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput"></a>

```java
public java.lang.String getIntegrationTypeInput();
```

- *Type:* java.lang.String

---

##### `allowAllDomains`<sup>Required</sup> <a name="allowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains"></a>

```java
public java.lang.Object getAllowAllDomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowAmpTraffic`<sup>Required</sup> <a name="allowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic"></a>

```java
public java.lang.Object getAllowAmpTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `challengeSecurityPreference`<sup>Required</sup> <a name="challengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference"></a>

```java
public java.lang.String getChallengeSecurityPreference();
```

- *Type:* java.lang.String

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue"></a>

```java
public RecaptchaEnterpriseKeyWebSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---



