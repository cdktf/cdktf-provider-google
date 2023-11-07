# `google_binary_authorization_policy`

Refer to the Terraform Registory for docs: [`google_binary_authorization_policy`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy).

# `binaryAuthorizationPolicy` Submodule <a name="`binaryAuthorizationPolicy` Submodule" id="@cdktf/provider-google.binaryAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationPolicy <a name="BinaryAuthorizationPolicy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy google_binary_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicy;

BinaryAuthorizationPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .defaultAdmissionRule(BinaryAuthorizationPolicyDefaultAdmissionRule)
//  .admissionWhitelistPatterns(IResolvable)
//  .admissionWhitelistPatterns(java.util.List<BinaryAuthorizationPolicyAdmissionWhitelistPatterns>)
//  .clusterAdmissionRules(IResolvable)
//  .clusterAdmissionRules(java.util.List<BinaryAuthorizationPolicyClusterAdmissionRules>)
//  .description(java.lang.String)
//  .globalPolicyEvaluationMode(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BinaryAuthorizationPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.defaultAdmissionRule">defaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.admissionWhitelistPatterns">admissionWhitelistPatterns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>></code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.clusterAdmissionRules">clusterAdmissionRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>></code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.globalPolicyEvaluationMode">globalPolicyEvaluationMode</a></code> | <code>java.lang.String</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAdmissionRule`<sup>Required</sup> <a name="defaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.defaultAdmissionRule"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#default_admission_rule BinaryAuthorizationPolicy#default_admission_rule}

---

##### `admissionWhitelistPatterns`<sup>Optional</sup> <a name="admissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.admissionWhitelistPatterns"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>>

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#admission_whitelist_patterns BinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `clusterAdmissionRules`<sup>Optional</sup> <a name="clusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.clusterAdmissionRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>>

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#cluster_admission_rules BinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#description BinaryAuthorizationPolicy#description}

---

##### `globalPolicyEvaluationMode`<sup>Optional</sup> <a name="globalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.globalPolicyEvaluationMode"></a>

- *Type:* java.lang.String

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#global_policy_evaluation_mode BinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#timeouts BinaryAuthorizationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns">putAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules">putClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule">putDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns">resetAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetClusterAdmissionRules">resetClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode">resetGlobalPolicyEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAdmissionWhitelistPatterns` <a name="putAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns"></a>

```java
public void putAdmissionWhitelistPatterns(IResolvable OR java.util.List<BinaryAuthorizationPolicyAdmissionWhitelistPatterns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>>

---

##### `putClusterAdmissionRules` <a name="putClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules"></a>

```java
public void putClusterAdmissionRules(IResolvable OR java.util.List<BinaryAuthorizationPolicyClusterAdmissionRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>>

---

##### `putDefaultAdmissionRule` <a name="putDefaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule"></a>

```java
public void putDefaultAdmissionRule(BinaryAuthorizationPolicyDefaultAdmissionRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts"></a>

```java
public void putTimeouts(BinaryAuthorizationPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

---

##### `resetAdmissionWhitelistPatterns` <a name="resetAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns"></a>

```java
public void resetAdmissionWhitelistPatterns()
```

##### `resetClusterAdmissionRules` <a name="resetClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetClusterAdmissionRules"></a>

```java
public void resetClusterAdmissionRules()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGlobalPolicyEvaluationMode` <a name="resetGlobalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode"></a>

```java
public void resetGlobalPolicyEvaluationMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicy;

BinaryAuthorizationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicy;

BinaryAuthorizationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicy;

BinaryAuthorizationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicy;

BinaryAuthorizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BinaryAuthorizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BinaryAuthorizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BinaryAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BinaryAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatterns">admissionWhitelistPatterns</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList">BinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRules">clusterAdmissionRules</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList">BinaryAuthorizationPolicyClusterAdmissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRule">defaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference">BinaryAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput">admissionWhitelistPatternsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRulesInput">clusterAdmissionRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRuleInput">defaultAdmissionRuleInput</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput">globalPolicyEvaluationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationMode">globalPolicyEvaluationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `admissionWhitelistPatterns`<sup>Required</sup> <a name="admissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatterns"></a>

```java
public BinaryAuthorizationPolicyAdmissionWhitelistPatternsList getAdmissionWhitelistPatterns();
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList">BinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a>

---

##### `clusterAdmissionRules`<sup>Required</sup> <a name="clusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRules"></a>

```java
public BinaryAuthorizationPolicyClusterAdmissionRulesList getClusterAdmissionRules();
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList">BinaryAuthorizationPolicyClusterAdmissionRulesList</a>

---

##### `defaultAdmissionRule`<sup>Required</sup> <a name="defaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRule"></a>

```java
public BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference getDefaultAdmissionRule();
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeouts"></a>

```java
public BinaryAuthorizationPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference">BinaryAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `admissionWhitelistPatternsInput`<sup>Optional</sup> <a name="admissionWhitelistPatternsInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput"></a>

```java
public java.lang.Object getAdmissionWhitelistPatternsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>>

---

##### `clusterAdmissionRulesInput`<sup>Optional</sup> <a name="clusterAdmissionRulesInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRulesInput"></a>

```java
public java.lang.Object getClusterAdmissionRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>>

---

##### `defaultAdmissionRuleInput`<sup>Optional</sup> <a name="defaultAdmissionRuleInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRuleInput"></a>

```java
public BinaryAuthorizationPolicyDefaultAdmissionRule getDefaultAdmissionRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalPolicyEvaluationModeInput`<sup>Optional</sup> <a name="globalPolicyEvaluationModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput"></a>

```java
public java.lang.String getGlobalPolicyEvaluationModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `globalPolicyEvaluationMode`<sup>Required</sup> <a name="globalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationMode"></a>

```java
public java.lang.String getGlobalPolicyEvaluationMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationPolicyAdmissionWhitelistPatterns <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns;

BinaryAuthorizationPolicyAdmissionWhitelistPatterns.builder()
    .namePattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern">namePattern</a></code> | <code>java.lang.String</code> | An image name pattern to whitelist, in the form 'registry/path/to/image'. |

---

##### `namePattern`<sup>Required</sup> <a name="namePattern" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern"></a>

```java
public java.lang.String getNamePattern();
```

- *Type:* java.lang.String

An image name pattern to whitelist, in the form 'registry/path/to/image'.

This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#name_pattern BinaryAuthorizationPolicy#name_pattern}

---

### BinaryAuthorizationPolicyClusterAdmissionRules <a name="BinaryAuthorizationPolicyClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyClusterAdmissionRules;

BinaryAuthorizationPolicyClusterAdmissionRules.builder()
    .cluster(java.lang.String)
    .enforcementMode(java.lang.String)
    .evaluationMode(java.lang.String)
//  .requireAttestationsBy(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#cluster BinaryAuthorizationPolicy#cluster}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode">evaluationMode</a></code> | <code>java.lang.String</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>java.util.List<java.lang.String></code> | The resource names of the attestors that must attest to a container image. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#cluster BinaryAuthorizationPolicy#cluster}.

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode"></a>

```java
public java.lang.String getEvaluationMode();
```

- *Type:* java.lang.String

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}

---

##### `requireAttestationsBy`<sup>Optional</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy"></a>

```java
public java.util.List<java.lang.String> getRequireAttestationsBy();
```

- *Type:* java.util.List<java.lang.String>

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### BinaryAuthorizationPolicyConfig <a name="BinaryAuthorizationPolicyConfig" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyConfig;

BinaryAuthorizationPolicyConfig.builder()
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
    .defaultAdmissionRule(BinaryAuthorizationPolicyDefaultAdmissionRule)
//  .admissionWhitelistPatterns(IResolvable)
//  .admissionWhitelistPatterns(java.util.List<BinaryAuthorizationPolicyAdmissionWhitelistPatterns>)
//  .clusterAdmissionRules(IResolvable)
//  .clusterAdmissionRules(java.util.List<BinaryAuthorizationPolicyClusterAdmissionRules>)
//  .description(java.lang.String)
//  .globalPolicyEvaluationMode(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BinaryAuthorizationPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.defaultAdmissionRule">defaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns">admissionWhitelistPatterns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>></code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.clusterAdmissionRules">clusterAdmissionRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>></code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode">globalPolicyEvaluationMode</a></code> | <code>java.lang.String</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAdmissionRule`<sup>Required</sup> <a name="defaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.defaultAdmissionRule"></a>

```java
public BinaryAuthorizationPolicyDefaultAdmissionRule getDefaultAdmissionRule();
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#default_admission_rule BinaryAuthorizationPolicy#default_admission_rule}

---

##### `admissionWhitelistPatterns`<sup>Optional</sup> <a name="admissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns"></a>

```java
public java.lang.Object getAdmissionWhitelistPatterns();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>>

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#admission_whitelist_patterns BinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `clusterAdmissionRules`<sup>Optional</sup> <a name="clusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.clusterAdmissionRules"></a>

```java
public java.lang.Object getClusterAdmissionRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>>

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#cluster_admission_rules BinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#description BinaryAuthorizationPolicy#description}

---

##### `globalPolicyEvaluationMode`<sup>Optional</sup> <a name="globalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode"></a>

```java
public java.lang.String getGlobalPolicyEvaluationMode();
```

- *Type:* java.lang.String

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#global_policy_evaluation_mode BinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.timeouts"></a>

```java
public BinaryAuthorizationPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#timeouts BinaryAuthorizationPolicy#timeouts}

---

### BinaryAuthorizationPolicyDefaultAdmissionRule <a name="BinaryAuthorizationPolicyDefaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyDefaultAdmissionRule;

BinaryAuthorizationPolicyDefaultAdmissionRule.builder()
    .enforcementMode(java.lang.String)
    .evaluationMode(java.lang.String)
//  .requireAttestationsBy(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode">evaluationMode</a></code> | <code>java.lang.String</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>java.util.List<java.lang.String></code> | The resource names of the attestors that must attest to a container image. |

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode"></a>

```java
public java.lang.String getEvaluationMode();
```

- *Type:* java.lang.String

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}

---

##### `requireAttestationsBy`<sup>Optional</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy"></a>

```java
public java.util.List<java.lang.String> getRequireAttestationsBy();
```

- *Type:* java.util.List<java.lang.String>

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### BinaryAuthorizationPolicyTimeouts <a name="BinaryAuthorizationPolicyTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyTimeouts;

BinaryAuthorizationPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#create BinaryAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#delete BinaryAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#update BinaryAuthorizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#create BinaryAuthorizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#delete BinaryAuthorizationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/binary_authorization_policy#update BinaryAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BinaryAuthorizationPolicyAdmissionWhitelistPatternsList <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatternsList" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList;

new BinaryAuthorizationPolicyAdmissionWhitelistPatternsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get"></a>

```java
public BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>>

---


### BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference;

new BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput">namePatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern">namePattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namePatternInput`<sup>Optional</sup> <a name="namePatternInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput"></a>

```java
public java.lang.String getNamePatternInput();
```

- *Type:* java.lang.String

---

##### `namePattern`<sup>Required</sup> <a name="namePattern" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern"></a>

```java
public java.lang.String getNamePattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>

---


### BinaryAuthorizationPolicyClusterAdmissionRulesList <a name="BinaryAuthorizationPolicyClusterAdmissionRulesList" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyClusterAdmissionRulesList;

new BinaryAuthorizationPolicyClusterAdmissionRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get"></a>

```java
public BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>>

---


### BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference <a name="BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference;

new BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy">resetRequireAttestationsBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequireAttestationsBy` <a name="resetRequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy"></a>

```java
public void resetRequireAttestationsBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput">requireAttestationsByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput"></a>

```java
public java.lang.String getEnforcementModeInput();
```

- *Type:* java.lang.String

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput"></a>

```java
public java.lang.String getEvaluationModeInput();
```

- *Type:* java.lang.String

---

##### `requireAttestationsByInput`<sup>Optional</sup> <a name="requireAttestationsByInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput"></a>

```java
public java.util.List<java.lang.String> getRequireAttestationsByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode"></a>

```java
public java.lang.String getEvaluationMode();
```

- *Type:* java.lang.String

---

##### `requireAttestationsBy`<sup>Required</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy"></a>

```java
public java.util.List<java.lang.String> getRequireAttestationsBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>

---


### BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference <a name="BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference;

new BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy">resetRequireAttestationsBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequireAttestationsBy` <a name="resetRequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy"></a>

```java
public void resetRequireAttestationsBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput">requireAttestationsByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput"></a>

```java
public java.lang.String getEnforcementModeInput();
```

- *Type:* java.lang.String

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput"></a>

```java
public java.lang.String getEvaluationModeInput();
```

- *Type:* java.lang.String

---

##### `requireAttestationsByInput`<sup>Optional</sup> <a name="requireAttestationsByInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput"></a>

```java
public java.util.List<java.lang.String> getRequireAttestationsByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode"></a>

```java
public java.lang.String getEvaluationMode();
```

- *Type:* java.lang.String

---

##### `requireAttestationsBy`<sup>Required</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy"></a>

```java
public java.util.List<java.lang.String> getRequireAttestationsBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue"></a>

```java
public BinaryAuthorizationPolicyDefaultAdmissionRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---


### BinaryAuthorizationPolicyTimeoutsOutputReference <a name="BinaryAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.binary_authorization_policy.BinaryAuthorizationPolicyTimeoutsOutputReference;

new BinaryAuthorizationPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

---



