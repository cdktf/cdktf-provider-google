# `google_firebaserules_ruleset`

Refer to the Terraform Registory for docs: [`google_firebaserules_ruleset`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset).

# `firebaserulesRuleset` Submodule <a name="`firebaserulesRuleset` Submodule" id="@cdktf/provider-google.firebaserulesRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaserulesRuleset <a name="FirebaserulesRuleset" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset google_firebaserules_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRuleset;

FirebaserulesRuleset.Builder.create(Construct scope, java.lang.String id)
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
    .source(FirebaserulesRulesetSource)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(FirebaserulesRulesetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#id FirebaserulesRuleset#id}. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#source FirebaserulesRuleset#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#id FirebaserulesRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#project FirebaserulesRuleset#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#timeouts FirebaserulesRuleset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSource` <a name="putSource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putSource"></a>

```java
public void putSource(FirebaserulesRulesetSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putTimeouts"></a>

```java
public void putTimeouts(FirebaserulesRulesetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRuleset;

FirebaserulesRuleset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRuleset;

FirebaserulesRuleset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRuleset;

FirebaserulesRuleset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList">FirebaserulesRulesetMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference">FirebaserulesRulesetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference">FirebaserulesRulesetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.metadata"></a>

```java
public FirebaserulesRulesetMetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList">FirebaserulesRulesetMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.source"></a>

```java
public FirebaserulesRulesetSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference">FirebaserulesRulesetSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.timeouts"></a>

```java
public FirebaserulesRulesetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference">FirebaserulesRulesetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.sourceInput"></a>

```java
public FirebaserulesRulesetSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaserulesRulesetConfig <a name="FirebaserulesRulesetConfig" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetConfig;

FirebaserulesRulesetConfig.builder()
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
    .source(FirebaserulesRulesetSource)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(FirebaserulesRulesetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#id FirebaserulesRuleset#id}. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.source"></a>

```java
public FirebaserulesRulesetSource getSource();
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#source FirebaserulesRuleset#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#id FirebaserulesRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#project FirebaserulesRuleset#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.timeouts"></a>

```java
public FirebaserulesRulesetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#timeouts FirebaserulesRuleset#timeouts}

---

### FirebaserulesRulesetMetadata <a name="FirebaserulesRulesetMetadata" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetMetadata;

FirebaserulesRulesetMetadata.builder()
    .build();
```


### FirebaserulesRulesetSource <a name="FirebaserulesRulesetSource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetSource;

FirebaserulesRulesetSource.builder()
    .files(IResolvable)
    .files(java.util.List<FirebaserulesRulesetSourceFiles>)
//  .language(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.property.files">files</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>></code> | files block. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.property.language">language</a></code> | <code>java.lang.String</code> | `Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.property.files"></a>

```java
public java.lang.Object getFiles();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>>

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#files FirebaserulesRuleset#files}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

`Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#language FirebaserulesRuleset#language}

---

### FirebaserulesRulesetSourceFiles <a name="FirebaserulesRulesetSourceFiles" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetSourceFiles;

FirebaserulesRulesetSourceFiles.builder()
    .content(java.lang.String)
    .name(java.lang.String)
//  .fingerprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.content">content</a></code> | <code>java.lang.String</code> | Textual Content. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.name">name</a></code> | <code>java.lang.String</code> | File name. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | Fingerprint (e.g. github sha) associated with the `File`. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Textual Content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#content FirebaserulesRuleset#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

File name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#name FirebaserulesRuleset#name}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

Fingerprint (e.g. github sha) associated with the `File`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#fingerprint FirebaserulesRuleset#fingerprint}

---

### FirebaserulesRulesetTimeouts <a name="FirebaserulesRulesetTimeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetTimeouts;

FirebaserulesRulesetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#create FirebaserulesRuleset#create}. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#delete FirebaserulesRuleset#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#create FirebaserulesRuleset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/firebaserules_ruleset#delete FirebaserulesRuleset#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaserulesRulesetMetadataList <a name="FirebaserulesRulesetMetadataList" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetMetadataList;

new FirebaserulesRulesetMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.get"></a>

```java
public FirebaserulesRulesetMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FirebaserulesRulesetMetadataOutputReference <a name="FirebaserulesRulesetMetadataOutputReference" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetMetadataOutputReference;

new FirebaserulesRulesetMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadata">FirebaserulesRulesetMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.internalValue"></a>

```java
public FirebaserulesRulesetMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadata">FirebaserulesRulesetMetadata</a>

---


### FirebaserulesRulesetSourceFilesList <a name="FirebaserulesRulesetSourceFilesList" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetSourceFilesList;

new FirebaserulesRulesetSourceFilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.get"></a>

```java
public FirebaserulesRulesetSourceFilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>>

---


### FirebaserulesRulesetSourceFilesOutputReference <a name="FirebaserulesRulesetSourceFilesOutputReference" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetSourceFilesOutputReference;

new FirebaserulesRulesetSourceFilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resetFingerprint">resetFingerprint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFingerprint` <a name="resetFingerprint" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resetFingerprint"></a>

```java
public void resetFingerprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fingerprintInput">fingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fingerprintInput"></a>

```java
public java.lang.String getFingerprintInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>

---


### FirebaserulesRulesetSourceOutputReference <a name="FirebaserulesRulesetSourceOutputReference" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetSourceOutputReference;

new FirebaserulesRulesetSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.putFiles">putFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resetLanguage">resetLanguage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFiles` <a name="putFiles" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.putFiles"></a>

```java
public void putFiles(IResolvable OR java.util.List<FirebaserulesRulesetSourceFiles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.putFiles.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>>

---

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resetLanguage"></a>

```java
public void resetLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.files">files</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList">FirebaserulesRulesetSourceFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.filesInput">filesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.files"></a>

```java
public FirebaserulesRulesetSourceFilesList getFiles();
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList">FirebaserulesRulesetSourceFilesList</a>

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.filesInput"></a>

```java
public java.lang.Object getFilesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>>

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.internalValue"></a>

```java
public FirebaserulesRulesetSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a>

---


### FirebaserulesRulesetTimeoutsOutputReference <a name="FirebaserulesRulesetTimeoutsOutputReference" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebaserules_ruleset.FirebaserulesRulesetTimeoutsOutputReference;

new FirebaserulesRulesetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>

---



