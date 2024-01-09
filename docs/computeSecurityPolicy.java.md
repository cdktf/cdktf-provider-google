# `computeSecurityPolicy` Submodule <a name="`computeSecurityPolicy` Submodule" id="@cdktf/provider-google.computeSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityPolicy <a name="ComputeSecurityPolicy" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy google_compute_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicy;

ComputeSecurityPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .adaptiveProtectionConfig(ComputeSecurityPolicyAdaptiveProtectionConfig)
//  .advancedOptionsConfig(ComputeSecurityPolicyAdvancedOptionsConfig)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .recaptchaOptionsConfig(ComputeSecurityPolicyRecaptchaOptionsConfig)
//  .rule(IResolvable)
//  .rule(java.util.List<ComputeSecurityPolicyRule>)
//  .timeouts(ComputeSecurityPolicyTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the security policy. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.adaptiveProtectionConfig">adaptiveProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | adaptive_protection_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this security policy. Max size is 2048. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.recaptchaOptionsConfig">recaptchaOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | recaptcha_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type indicates the intended use of the security policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#name ComputeSecurityPolicy#name}

---

##### `adaptiveProtectionConfig`<sup>Optional</sup> <a name="adaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.adaptiveProtectionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

adaptive_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#adaptive_protection_config ComputeSecurityPolicy#adaptive_protection_config}

---

##### `advancedOptionsConfig`<sup>Optional</sup> <a name="advancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.advancedOptionsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#advanced_options_config ComputeSecurityPolicy#advanced_options_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this security policy. Max size is 2048.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#description ComputeSecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#project ComputeSecurityPolicy#project}

---

##### `recaptchaOptionsConfig`<sup>Optional</sup> <a name="recaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.recaptchaOptionsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

recaptcha_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#recaptcha_options_config ComputeSecurityPolicy#recaptcha_options_config}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#rule ComputeSecurityPolicy#rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#timeouts ComputeSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type indicates the intended use of the security policy.

CLOUD_ARMOR - Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers. CLOUD_ARMOR_EDGE - Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdaptiveProtectionConfig">putAdaptiveProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig">putAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRecaptchaOptionsConfig">putRecaptchaOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdaptiveProtectionConfig">resetAdaptiveProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdvancedOptionsConfig">resetAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRecaptchaOptionsConfig">resetRecaptchaOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdaptiveProtectionConfig` <a name="putAdaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdaptiveProtectionConfig"></a>

```java
public void putAdaptiveProtectionConfig(ComputeSecurityPolicyAdaptiveProtectionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdaptiveProtectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

---

##### `putAdvancedOptionsConfig` <a name="putAdvancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig"></a>

```java
public void putAdvancedOptionsConfig(ComputeSecurityPolicyAdvancedOptionsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

---

##### `putRecaptchaOptionsConfig` <a name="putRecaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRecaptchaOptionsConfig"></a>

```java
public void putRecaptchaOptionsConfig(ComputeSecurityPolicyRecaptchaOptionsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRecaptchaOptionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<ComputeSecurityPolicyRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts"></a>

```java
public void putTimeouts(ComputeSecurityPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>

---

##### `resetAdaptiveProtectionConfig` <a name="resetAdaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdaptiveProtectionConfig"></a>

```java
public void resetAdaptiveProtectionConfig()
```

##### `resetAdvancedOptionsConfig` <a name="resetAdvancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdvancedOptionsConfig"></a>

```java
public void resetAdvancedOptionsConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetRecaptchaOptionsConfig` <a name="resetRecaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRecaptchaOptionsConfig"></a>

```java
public void resetRecaptchaOptionsConfig()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRule"></a>

```java
public void resetRule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicy;

ComputeSecurityPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicy;

ComputeSecurityPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicy;

ComputeSecurityPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicy;

ComputeSecurityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeSecurityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfig">adaptiveProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfig">recaptchaOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference">ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList">ComputeSecurityPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference">ComputeSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfigInput">adaptiveProtectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfigInput">advancedOptionsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfigInput">recaptchaOptionsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adaptiveProtectionConfig`<sup>Required</sup> <a name="adaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfig"></a>

```java
public ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference getAdaptiveProtectionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference</a>

---

##### `advancedOptionsConfig`<sup>Required</sup> <a name="advancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfig"></a>

```java
public ComputeSecurityPolicyAdvancedOptionsConfigOutputReference getAdvancedOptionsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `recaptchaOptionsConfig`<sup>Required</sup> <a name="recaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfig"></a>

```java
public ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference getRecaptchaOptionsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference">ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.rule"></a>

```java
public ComputeSecurityPolicyRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList">ComputeSecurityPolicyRuleList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeouts"></a>

```java
public ComputeSecurityPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference">ComputeSecurityPolicyTimeoutsOutputReference</a>

---

##### `adaptiveProtectionConfigInput`<sup>Optional</sup> <a name="adaptiveProtectionConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfigInput"></a>

```java
public ComputeSecurityPolicyAdaptiveProtectionConfig getAdaptiveProtectionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

---

##### `advancedOptionsConfigInput`<sup>Optional</sup> <a name="advancedOptionsConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfigInput"></a>

```java
public ComputeSecurityPolicyAdvancedOptionsConfig getAdvancedOptionsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `recaptchaOptionsConfigInput`<sup>Optional</sup> <a name="recaptchaOptionsConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfigInput"></a>

```java
public ComputeSecurityPolicyRecaptchaOptionsConfig getRecaptchaOptionsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityPolicyAdaptiveProtectionConfig <a name="ComputeSecurityPolicyAdaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyAdaptiveProtectionConfig;

ComputeSecurityPolicyAdaptiveProtectionConfig.builder()
//  .layer7DdosDefenseConfig(ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig.property.layer7DdosDefenseConfig">layer7DdosDefenseConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | layer_7_ddos_defense_config block. |

---

##### `layer7DdosDefenseConfig`<sup>Optional</sup> <a name="layer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig.property.layer7DdosDefenseConfig"></a>

```java
public ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig getLayer7DdosDefenseConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

layer_7_ddos_defense_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#layer_7_ddos_defense_config ComputeSecurityPolicy#layer_7_ddos_defense_config}

---

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;

ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .ruleVisibility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, enables CAAP for L7 DDoS detection. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.ruleVisibility">ruleVisibility</a></code> | <code>java.lang.String</code> | Rule visibility. Supported values include: "STANDARD", "PREMIUM". |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, enables CAAP for L7 DDoS detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#enable ComputeSecurityPolicy#enable}

---

##### `ruleVisibility`<sup>Optional</sup> <a name="ruleVisibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.ruleVisibility"></a>

```java
public java.lang.String getRuleVisibility();
```

- *Type:* java.lang.String

Rule visibility. Supported values include: "STANDARD", "PREMIUM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#rule_visibility ComputeSecurityPolicy#rule_visibility}

---

### ComputeSecurityPolicyAdvancedOptionsConfig <a name="ComputeSecurityPolicyAdvancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyAdvancedOptionsConfig;

ComputeSecurityPolicyAdvancedOptionsConfig.builder()
//  .jsonCustomConfig(ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig)
//  .jsonParsing(java.lang.String)
//  .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig">jsonCustomConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | json_custom_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonParsing">jsonParsing</a></code> | <code>java.lang.String</code> | JSON body parsing. Supported values include: "DISABLED", "STANDARD". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Logging level. Supported values include: "NORMAL", "VERBOSE". |

---

##### `jsonCustomConfig`<sup>Optional</sup> <a name="jsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig"></a>

```java
public ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig getJsonCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#json_custom_config ComputeSecurityPolicy#json_custom_config}

---

##### `jsonParsing`<sup>Optional</sup> <a name="jsonParsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonParsing"></a>

```java
public java.lang.String getJsonParsing();
```

- *Type:* java.lang.String

JSON body parsing. Supported values include: "DISABLED", "STANDARD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#json_parsing ComputeSecurityPolicy#json_parsing}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Logging level. Supported values include: "NORMAL", "VERBOSE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#log_level ComputeSecurityPolicy#log_level}

---

### ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig;

ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.builder()
    .contentTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes">contentTypes</a></code> | <code>java.util.List<java.lang.String></code> | A list of custom Content-Type header values to apply the JSON parsing. |

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes"></a>

```java
public java.util.List<java.lang.String> getContentTypes();
```

- *Type:* java.util.List<java.lang.String>

A list of custom Content-Type header values to apply the JSON parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#content_types ComputeSecurityPolicy#content_types}

---

### ComputeSecurityPolicyConfig <a name="ComputeSecurityPolicyConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyConfig;

ComputeSecurityPolicyConfig.builder()
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
//  .adaptiveProtectionConfig(ComputeSecurityPolicyAdaptiveProtectionConfig)
//  .advancedOptionsConfig(ComputeSecurityPolicyAdvancedOptionsConfig)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .recaptchaOptionsConfig(ComputeSecurityPolicyRecaptchaOptionsConfig)
//  .rule(IResolvable)
//  .rule(java.util.List<ComputeSecurityPolicyRule>)
//  .timeouts(ComputeSecurityPolicyTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the security policy. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.adaptiveProtectionConfig">adaptiveProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | adaptive_protection_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this security policy. Max size is 2048. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.recaptchaOptionsConfig">recaptchaOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | recaptcha_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type indicates the intended use of the security policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#name ComputeSecurityPolicy#name}

---

##### `adaptiveProtectionConfig`<sup>Optional</sup> <a name="adaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.adaptiveProtectionConfig"></a>

```java
public ComputeSecurityPolicyAdaptiveProtectionConfig getAdaptiveProtectionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

adaptive_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#adaptive_protection_config ComputeSecurityPolicy#adaptive_protection_config}

---

##### `advancedOptionsConfig`<sup>Optional</sup> <a name="advancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.advancedOptionsConfig"></a>

```java
public ComputeSecurityPolicyAdvancedOptionsConfig getAdvancedOptionsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#advanced_options_config ComputeSecurityPolicy#advanced_options_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this security policy. Max size is 2048.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#description ComputeSecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#project ComputeSecurityPolicy#project}

---

##### `recaptchaOptionsConfig`<sup>Optional</sup> <a name="recaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.recaptchaOptionsConfig"></a>

```java
public ComputeSecurityPolicyRecaptchaOptionsConfig getRecaptchaOptionsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

recaptcha_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#recaptcha_options_config ComputeSecurityPolicy#recaptcha_options_config}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#rule ComputeSecurityPolicy#rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.timeouts"></a>

```java
public ComputeSecurityPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#timeouts ComputeSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type indicates the intended use of the security policy.

CLOUD_ARMOR - Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers. CLOUD_ARMOR_EDGE - Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

### ComputeSecurityPolicyRecaptchaOptionsConfig <a name="ComputeSecurityPolicyRecaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRecaptchaOptionsConfig;

ComputeSecurityPolicyRecaptchaOptionsConfig.builder()
    .redirectSiteKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig.property.redirectSiteKey">redirectSiteKey</a></code> | <code>java.lang.String</code> | A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of GOOGLE_RECAPTCHA under the security policy. |

---

##### `redirectSiteKey`<sup>Required</sup> <a name="redirectSiteKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig.property.redirectSiteKey"></a>

```java
public java.lang.String getRedirectSiteKey();
```

- *Type:* java.lang.String

A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of GOOGLE_RECAPTCHA under the security policy.

The specified site key needs to be created from the reCAPTCHA API. The user is responsible for the validity of the specified site key. If not specified, a Google-managed site key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#redirect_site_key ComputeSecurityPolicy#redirect_site_key}

---

### ComputeSecurityPolicyRule <a name="ComputeSecurityPolicyRule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRule;

ComputeSecurityPolicyRule.builder()
    .action(java.lang.String)
    .match(ComputeSecurityPolicyRuleMatch)
    .priority(java.lang.Number)
//  .description(java.lang.String)
//  .headerAction(ComputeSecurityPolicyRuleHeaderAction)
//  .preview(java.lang.Boolean)
//  .preview(IResolvable)
//  .rateLimitOptions(ComputeSecurityPolicyRuleRateLimitOptions)
//  .redirectOptions(ComputeSecurityPolicyRuleRedirectOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.action">action</a></code> | <code>java.lang.String</code> | Action to take when match matches the request. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | An unique positive integer indicating the priority of evaluation for a rule. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this rule. Max size is 64. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.headerAction">headerAction</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, the action specified above is not enforced. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a></code> | rate_limit_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.redirectOptions">redirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a></code> | redirect_options block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Action to take when match matches the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#action ComputeSecurityPolicy#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.match"></a>

```java
public ComputeSecurityPolicyRuleMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#match ComputeSecurityPolicy#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

An unique positive integer indicating the priority of evaluation for a rule.

Rules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#priority ComputeSecurityPolicy#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this rule. Max size is 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#description ComputeSecurityPolicy#description}

---

##### `headerAction`<sup>Optional</sup> <a name="headerAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.headerAction"></a>

```java
public ComputeSecurityPolicyRuleHeaderAction getHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#header_action ComputeSecurityPolicy#header_action}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preview"></a>

```java
public java.lang.Object getPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, the action specified above is not enforced.

Stackdriver logs for requests that trigger a preview action are annotated as such.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#preview ComputeSecurityPolicy#preview}

---

##### `rateLimitOptions`<sup>Optional</sup> <a name="rateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.rateLimitOptions"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptions getRateLimitOptions();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#rate_limit_options ComputeSecurityPolicy#rate_limit_options}

---

##### `redirectOptions`<sup>Optional</sup> <a name="redirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.redirectOptions"></a>

```java
public ComputeSecurityPolicyRuleRedirectOptions getRedirectOptions();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#redirect_options ComputeSecurityPolicy#redirect_options}

---

### ComputeSecurityPolicyRuleHeaderAction <a name="ComputeSecurityPolicyRuleHeaderAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleHeaderAction;

ComputeSecurityPolicyRuleHeaderAction.builder()
    .requestHeadersToAdds(IResolvable)
    .requestHeadersToAdds(java.util.List<ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds">requestHeadersToAdds</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>></code> | request_headers_to_adds block. |

---

##### `requestHeadersToAdds`<sup>Required</sup> <a name="requestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds"></a>

```java
public java.lang.Object getRequestHeadersToAdds();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>>

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#request_headers_to_adds ComputeSecurityPolicy#request_headers_to_adds}

---

### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds;

ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.builder()
    .headerName(java.lang.String)
//  .headerValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The name of the header to set. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | The value to set the named header to. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The name of the header to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#header_name ComputeSecurityPolicy#header_name}

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

The value to set the named header to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#header_value ComputeSecurityPolicy#header_value}

---

### ComputeSecurityPolicyRuleMatch <a name="ComputeSecurityPolicyRuleMatch" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleMatch;

ComputeSecurityPolicyRuleMatch.builder()
//  .config(ComputeSecurityPolicyRuleMatchConfig)
//  .expr(ComputeSecurityPolicyRuleMatchExpr)
//  .versionedExpr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.versionedExpr">versionedExpr</a></code> | <code>java.lang.String</code> | Predefined rule expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.config"></a>

```java
public ComputeSecurityPolicyRuleMatchConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#config ComputeSecurityPolicy#config}

---

##### `expr`<sup>Optional</sup> <a name="expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.expr"></a>

```java
public ComputeSecurityPolicyRuleMatchExpr getExpr();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#expr ComputeSecurityPolicy#expr}

---

##### `versionedExpr`<sup>Optional</sup> <a name="versionedExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.versionedExpr"></a>

```java
public java.lang.String getVersionedExpr();
```

- *Type:* java.lang.String

Predefined rule expression.

If this field is specified, config must also be specified. Available options:   SRC_IPS_V1: Must specify the corresponding src_ip_ranges field in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#versioned_expr ComputeSecurityPolicy#versioned_expr}

---

### ComputeSecurityPolicyRuleMatchConfig <a name="ComputeSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleMatchConfig;

ComputeSecurityPolicyRuleMatchConfig.builder()
    .srcIpRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic. |

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic.

There is a limit of 10 IP ranges per rule. A value of '*' matches all IPs (can be used to override the default behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#src_ip_ranges ComputeSecurityPolicy#src_ip_ranges}

---

### ComputeSecurityPolicyRuleMatchExpr <a name="ComputeSecurityPolicyRuleMatchExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleMatchExpr;

ComputeSecurityPolicyRuleMatchExpr.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#expression ComputeSecurityPolicy#expression}

---

### ComputeSecurityPolicyRuleRateLimitOptions <a name="ComputeSecurityPolicyRuleRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRateLimitOptions;

ComputeSecurityPolicyRuleRateLimitOptions.builder()
    .conformAction(java.lang.String)
    .exceedAction(java.lang.String)
    .rateLimitThreshold(ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold)
//  .banDurationSec(java.lang.Number)
//  .banThreshold(ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold)
//  .enforceOnKey(java.lang.String)
//  .enforceOnKeyName(java.lang.String)
//  .exceedRedirectOptions(ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.conformAction">conformAction</a></code> | <code>java.lang.String</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedAction">exceedAction</a></code> | <code>java.lang.String</code> | Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banDurationSec">banDurationSec</a></code> | <code>java.lang.Number</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKey">enforceOnKey</a></code> | <code>java.lang.String</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>java.lang.String</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedRedirectOptions">exceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | exceed_redirect_options block. |

---

##### `conformAction`<sup>Required</sup> <a name="conformAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.conformAction"></a>

```java
public java.lang.String getConformAction();
```

- *Type:* java.lang.String

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#conform_action ComputeSecurityPolicy#conform_action}

---

##### `exceedAction`<sup>Required</sup> <a name="exceedAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedAction"></a>

```java
public java.lang.String getExceedAction();
```

- *Type:* java.lang.String

Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint.

Valid options are "deny()" where valid values for status are 403, 404, 429, and 502, and "redirect" where the redirect parameters come from exceedRedirectOptions below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#exceed_action ComputeSecurityPolicy#exceed_action}

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold getRateLimitThreshold();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#rate_limit_threshold ComputeSecurityPolicy#rate_limit_threshold}

---

##### `banDurationSec`<sup>Optional</sup> <a name="banDurationSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banDurationSec"></a>

```java
public java.lang.Number getBanDurationSec();
```

- *Type:* java.lang.Number

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#ban_duration_sec ComputeSecurityPolicy#ban_duration_sec}

---

##### `banThreshold`<sup>Optional</sup> <a name="banThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banThreshold"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold getBanThreshold();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#ban_threshold ComputeSecurityPolicy#ban_threshold}

---

##### `enforceOnKey`<sup>Optional</sup> <a name="enforceOnKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKey"></a>

```java
public java.lang.String getEnforceOnKey();
```

- *Type:* java.lang.String

Determines the key to enforce the rateLimitThreshold on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#enforce_on_key ComputeSecurityPolicy#enforce_on_key}

---

##### `enforceOnKeyName`<sup>Optional</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName"></a>

```java
public java.lang.String getEnforceOnKeyName();
```

- *Type:* java.lang.String

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#enforce_on_key_name ComputeSecurityPolicy#enforce_on_key_name}

---

##### `exceedRedirectOptions`<sup>Optional</sup> <a name="exceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedRedirectOptions"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions getExceedRedirectOptions();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

exceed_redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#exceed_redirect_options ComputeSecurityPolicy#exceed_redirect_options}

---

### ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold;

ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.builder()
    .count(java.lang.Number)
    .intervalSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count">count</a></code> | <code>java.lang.Number</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec">intervalSec</a></code> | <code>java.lang.Number</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#count ComputeSecurityPolicy#count}

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec"></a>

```java
public java.lang.Number getIntervalSec();
```

- *Type:* java.lang.Number

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}

---

### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions;

ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.builder()
    .type(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.type">type</a></code> | <code>java.lang.String</code> | Type of the redirect action. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.target">target</a></code> | <code>java.lang.String</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the redirect action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#target ComputeSecurityPolicy#target}

---

### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold;

ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.builder()
    .count(java.lang.Number)
    .intervalSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count">count</a></code> | <code>java.lang.Number</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec">intervalSec</a></code> | <code>java.lang.Number</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#count ComputeSecurityPolicy#count}

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```java
public java.lang.Number getIntervalSec();
```

- *Type:* java.lang.Number

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}

---

### ComputeSecurityPolicyRuleRedirectOptions <a name="ComputeSecurityPolicyRuleRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRedirectOptions;

ComputeSecurityPolicyRuleRedirectOptions.builder()
    .type(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.type">type</a></code> | <code>java.lang.String</code> | Type of the redirect action. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.target">target</a></code> | <code>java.lang.String</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the redirect action.

Available options: EXTERNAL_302: Must specify the corresponding target field in config. GOOGLE_RECAPTCHA: Cannot specify target field in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#target ComputeSecurityPolicy#target}

---

### ComputeSecurityPolicyTimeouts <a name="ComputeSecurityPolicyTimeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyTimeouts;

ComputeSecurityPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#create ComputeSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#delete ComputeSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#update ComputeSecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#create ComputeSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#delete ComputeSecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_security_policy#update ComputeSecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference;

new ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetRuleVisibility">resetRuleVisibility</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetRuleVisibility` <a name="resetRuleVisibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetRuleVisibility"></a>

```java
public void resetRuleVisibility()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibilityInput">ruleVisibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility">ruleVisibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ruleVisibilityInput`<sup>Optional</sup> <a name="ruleVisibilityInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibilityInput"></a>

```java
public java.lang.String getRuleVisibilityInput();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ruleVisibility`<sup>Required</sup> <a name="ruleVisibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility"></a>

```java
public java.lang.String getRuleVisibility();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---


### ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference;

new ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig">putLayer7DdosDefenseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resetLayer7DdosDefenseConfig">resetLayer7DdosDefenseConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer7DdosDefenseConfig` <a name="putLayer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig"></a>

```java
public void putLayer7DdosDefenseConfig(ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---

##### `resetLayer7DdosDefenseConfig` <a name="resetLayer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resetLayer7DdosDefenseConfig"></a>

```java
public void resetLayer7DdosDefenseConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig">layer7DdosDefenseConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfigInput">layer7DdosDefenseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `layer7DdosDefenseConfig`<sup>Required</sup> <a name="layer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig"></a>

```java
public ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference getLayer7DdosDefenseConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference</a>

---

##### `layer7DdosDefenseConfigInput`<sup>Optional</sup> <a name="layer7DdosDefenseConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfigInput"></a>

```java
public ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig getLayer7DdosDefenseConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyAdaptiveProtectionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

---


### ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference;

new ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput">contentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">contentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypesInput`<sup>Optional</sup> <a name="contentTypesInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput"></a>

```java
public java.util.List<java.lang.String> getContentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```java
public java.util.List<java.lang.String> getContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### ComputeSecurityPolicyAdvancedOptionsConfigOutputReference <a name="ComputeSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference;

new ComputeSecurityPolicyAdvancedOptionsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig">putJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig">resetJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing">resetJsonParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJsonCustomConfig` <a name="putJsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig"></a>

```java
public void putJsonCustomConfig(ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `resetJsonCustomConfig` <a name="resetJsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig"></a>

```java
public void resetJsonCustomConfig()
```

##### `resetJsonParsing` <a name="resetJsonParsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing"></a>

```java
public void resetJsonParsing()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">jsonCustomConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput">jsonCustomConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput">jsonParsingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">jsonParsing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonCustomConfig`<sup>Required</sup> <a name="jsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```java
public ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference getJsonCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a>

---

##### `jsonCustomConfigInput`<sup>Optional</sup> <a name="jsonCustomConfigInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput"></a>

```java
public ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig getJsonCustomConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `jsonParsingInput`<sup>Optional</sup> <a name="jsonParsingInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput"></a>

```java
public java.lang.String getJsonParsingInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `jsonParsing`<sup>Required</sup> <a name="jsonParsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```java
public java.lang.String getJsonParsing();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyAdvancedOptionsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

---


### ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference <a name="ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference;

new ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKeyInput">redirectSiteKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey">redirectSiteKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redirectSiteKeyInput`<sup>Optional</sup> <a name="redirectSiteKeyInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKeyInput"></a>

```java
public java.lang.String getRedirectSiteKeyInput();
```

- *Type:* java.lang.String

---

##### `redirectSiteKey`<sup>Required</sup> <a name="redirectSiteKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey"></a>

```java
public java.lang.String getRedirectSiteKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRecaptchaOptionsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

---


### ComputeSecurityPolicyRuleHeaderActionOutputReference <a name="ComputeSecurityPolicyRuleHeaderActionOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleHeaderActionOutputReference;

new ComputeSecurityPolicyRuleHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds">putRequestHeadersToAdds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeadersToAdds` <a name="putRequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds"></a>

```java
public void putRequestHeadersToAdds(IResolvable OR java.util.List<ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">requestHeadersToAdds</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput">requestHeadersToAddsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestHeadersToAdds`<sup>Required</sup> <a name="requestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```java
public ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList getRequestHeadersToAdds();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `requestHeadersToAddsInput`<sup>Optional</sup> <a name="requestHeadersToAddsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput"></a>

```java
public java.lang.Object getRequestHeadersToAddsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRuleHeaderAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

---


### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList;

new ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```java
public ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>>

---


### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference;

new ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue">resetHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderValue` <a name="resetHeaderValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue"></a>

```java
public void resetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput"></a>

```java
public java.lang.String getHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>

---


### ComputeSecurityPolicyRuleList <a name="ComputeSecurityPolicyRuleList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleList;

new ComputeSecurityPolicyRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.get"></a>

```java
public ComputeSecurityPolicyRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>>

---


### ComputeSecurityPolicyRuleMatchConfigOutputReference <a name="ComputeSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleMatchConfigOutputReference;

new ComputeSecurityPolicyRuleMatchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRuleMatchConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

---


### ComputeSecurityPolicyRuleMatchExprOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleMatchExprOutputReference;

new ComputeSecurityPolicyRuleMatchExprOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRuleMatchExpr getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

---


### ComputeSecurityPolicyRuleMatchOutputReference <a name="ComputeSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleMatchOutputReference;

new ComputeSecurityPolicyRuleMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExpr">putExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExpr">resetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">resetVersionedExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```java
public void putConfig(ComputeSecurityPolicyRuleMatchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

---

##### `putExpr` <a name="putExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExpr"></a>

```java
public void putExpr(ComputeSecurityPolicyRuleMatchExpr value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetExpr` <a name="resetExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExpr"></a>

```java
public void resetExpr()
```

##### `resetVersionedExpr` <a name="resetVersionedExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```java
public void resetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference">ComputeSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference">ComputeSecurityPolicyRuleMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">versionedExprInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr">versionedExpr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.config"></a>

```java
public ComputeSecurityPolicyRuleMatchConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference">ComputeSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```java
public ComputeSecurityPolicyRuleMatchExprOutputReference getExpr();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference">ComputeSecurityPolicyRuleMatchExprOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```java
public ComputeSecurityPolicyRuleMatchConfig getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprInput"></a>

```java
public ComputeSecurityPolicyRuleMatchExpr getExprInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

---

##### `versionedExprInput`<sup>Optional</sup> <a name="versionedExprInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```java
public java.lang.String getVersionedExprInput();
```

- *Type:* java.lang.String

---

##### `versionedExpr`<sup>Required</sup> <a name="versionedExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```java
public java.lang.String getVersionedExpr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRuleMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

---


### ComputeSecurityPolicyRuleOutputReference <a name="ComputeSecurityPolicyRuleOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleOutputReference;

new ComputeSecurityPolicyRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putHeaderAction">putHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions">putRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions">putRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetHeaderAction">resetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRateLimitOptions">resetRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRedirectOptions">resetRedirectOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderAction` <a name="putHeaderAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putHeaderAction"></a>

```java
public void putHeaderAction(ComputeSecurityPolicyRuleHeaderAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch"></a>

```java
public void putMatch(ComputeSecurityPolicyRuleMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

---

##### `putRateLimitOptions` <a name="putRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions"></a>

```java
public void putRateLimitOptions(ComputeSecurityPolicyRuleRateLimitOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

---

##### `putRedirectOptions` <a name="putRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions"></a>

```java
public void putRedirectOptions(ComputeSecurityPolicyRuleRedirectOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHeaderAction` <a name="resetHeaderAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetHeaderAction"></a>

```java
public void resetHeaderAction()
```

##### `resetPreview` <a name="resetPreview" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreview"></a>

```java
public void resetPreview()
```

##### `resetRateLimitOptions` <a name="resetRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRateLimitOptions"></a>

```java
public void resetRateLimitOptions()
```

##### `resetRedirectOptions` <a name="resetRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRedirectOptions"></a>

```java
public void resetRedirectOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerAction">headerAction</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference">ComputeSecurityPolicyRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference">ComputeSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptions">redirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerActionInput">headerActionInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.previewInput">previewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptionsInput">rateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptionsInput">redirectOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerAction"></a>

```java
public ComputeSecurityPolicyRuleHeaderActionOutputReference getHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference">ComputeSecurityPolicyRuleHeaderActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.match"></a>

```java
public ComputeSecurityPolicyRuleMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference">ComputeSecurityPolicyRuleMatchOutputReference</a>

---

##### `rateLimitOptions`<sup>Required</sup> <a name="rateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsOutputReference getRateLimitOptions();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsOutputReference</a>

---

##### `redirectOptions`<sup>Required</sup> <a name="redirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptions"></a>

```java
public ComputeSecurityPolicyRuleRedirectOptionsOutputReference getRedirectOptions();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRedirectOptionsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `headerActionInput`<sup>Optional</sup> <a name="headerActionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerActionInput"></a>

```java
public ComputeSecurityPolicyRuleHeaderAction getHeaderActionInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.matchInput"></a>

```java
public ComputeSecurityPolicyRuleMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.previewInput"></a>

```java
public java.lang.Object getPreviewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitOptionsInput`<sup>Optional</sup> <a name="rateLimitOptionsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptionsInput"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptions getRateLimitOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

---

##### `redirectOptionsInput`<sup>Optional</sup> <a name="redirectOptionsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptionsInput"></a>

```java
public ComputeSecurityPolicyRuleRedirectOptions getRedirectOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preview"></a>

```java
public java.lang.Object getPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference;

new ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">intervalSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalSecInput`<sup>Optional</sup> <a name="intervalSecInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```java
public java.lang.Number getIntervalSecInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```java
public java.lang.Number getIntervalSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference;

new ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference;

new ComputeSecurityPolicyRuleRateLimitOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold">putBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions">putExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold">putRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec">resetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold">resetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey">resetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName">resetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedRedirectOptions">resetExceedRedirectOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBanThreshold` <a name="putBanThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold"></a>

```java
public void putBanThreshold(ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---

##### `putExceedRedirectOptions` <a name="putExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions"></a>

```java
public void putExceedRedirectOptions(ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---

##### `putRateLimitThreshold` <a name="putRateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```java
public void putRateLimitThreshold(ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---

##### `resetBanDurationSec` <a name="resetBanDurationSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```java
public void resetBanDurationSec()
```

##### `resetBanThreshold` <a name="resetBanThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold"></a>

```java
public void resetBanThreshold()
```

##### `resetEnforceOnKey` <a name="resetEnforceOnKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```java
public void resetEnforceOnKey()
```

##### `resetEnforceOnKeyName` <a name="resetEnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```java
public void resetEnforceOnKeyName()
```

##### `resetExceedRedirectOptions` <a name="resetExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedRedirectOptions"></a>

```java
public void resetExceedRedirectOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions">exceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput">banDurationSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput">banThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput">conformActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput">enforceOnKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">enforceOnKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput">exceedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptionsInput">exceedRedirectOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput">rateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec">banDurationSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction">conformAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey">enforceOnKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction">exceedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `banThreshold`<sup>Required</sup> <a name="banThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference getBanThreshold();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a>

---

##### `exceedRedirectOptions`<sup>Required</sup> <a name="exceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference getExceedRedirectOptions();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference</a>

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference getRateLimitThreshold();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `banDurationSecInput`<sup>Optional</sup> <a name="banDurationSecInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```java
public java.lang.Number getBanDurationSecInput();
```

- *Type:* java.lang.Number

---

##### `banThresholdInput`<sup>Optional</sup> <a name="banThresholdInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold getBanThresholdInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---

##### `conformActionInput`<sup>Optional</sup> <a name="conformActionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput"></a>

```java
public java.lang.String getConformActionInput();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyInput`<sup>Optional</sup> <a name="enforceOnKeyInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```java
public java.lang.String getEnforceOnKeyInput();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyNameInput`<sup>Optional</sup> <a name="enforceOnKeyNameInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```java
public java.lang.String getEnforceOnKeyNameInput();
```

- *Type:* java.lang.String

---

##### `exceedActionInput`<sup>Optional</sup> <a name="exceedActionInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```java
public java.lang.String getExceedActionInput();
```

- *Type:* java.lang.String

---

##### `exceedRedirectOptionsInput`<sup>Optional</sup> <a name="exceedRedirectOptionsInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptionsInput"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions getExceedRedirectOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---

##### `rateLimitThresholdInput`<sup>Optional</sup> <a name="rateLimitThresholdInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold getRateLimitThresholdInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---

##### `banDurationSec`<sup>Required</sup> <a name="banDurationSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec"></a>

```java
public java.lang.Number getBanDurationSec();
```

- *Type:* java.lang.Number

---

##### `conformAction`<sup>Required</sup> <a name="conformAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction"></a>

```java
public java.lang.String getConformAction();
```

- *Type:* java.lang.String

---

##### `enforceOnKey`<sup>Required</sup> <a name="enforceOnKey" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```java
public java.lang.String getEnforceOnKey();
```

- *Type:* java.lang.String

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```java
public java.lang.String getEnforceOnKeyName();
```

- *Type:* java.lang.String

---

##### `exceedAction`<sup>Required</sup> <a name="exceedAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction"></a>

```java
public java.lang.String getExceedAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference;

new ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">intervalSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalSecInput`<sup>Optional</sup> <a name="intervalSecInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```java
public java.lang.Number getIntervalSecInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```java
public java.lang.Number getIntervalSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---


### ComputeSecurityPolicyRuleRedirectOptionsOutputReference <a name="ComputeSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference;

new ComputeSecurityPolicyRuleRedirectOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```java
public ComputeSecurityPolicyRuleRedirectOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

---


### ComputeSecurityPolicyTimeoutsOutputReference <a name="ComputeSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_security_policy.ComputeSecurityPolicyTimeoutsOutputReference;

new ComputeSecurityPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>

---



