# `google_dialogflow_cx_test_case`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_test_case`](https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case).

# `dialogflowCxTestCase` Submodule <a name="`dialogflowCxTestCase` Submodule" id="@cdktf/provider-google.dialogflowCxTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxTestCase <a name="DialogflowCxTestCase" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case google_dialogflow_cx_test_case}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCase(Construct Scope, string Id, DialogflowCxTestCaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig">DialogflowCxTestCaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig">DialogflowCxTestCaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestCaseConversationTurns">PutTestCaseConversationTurns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestConfig">PutTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestCaseConversationTurns">ResetTestCaseConversationTurns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestConfig">ResetTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTestCaseConversationTurns` <a name="PutTestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestCaseConversationTurns"></a>

```csharp
private void PutTestCaseConversationTurns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestCaseConversationTurns.parameter.value"></a>

- *Type:* object

---

##### `PutTestConfig` <a name="PutTestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestConfig"></a>

```csharp
private void PutTestConfig(DialogflowCxTestCaseTestConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowCxTestCaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTestCaseConversationTurns` <a name="ResetTestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestCaseConversationTurns"></a>

```csharp
private void ResetTestCaseConversationTurns()
```

##### `ResetTestConfig` <a name="ResetTestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestConfig"></a>

```csharp
private void ResetTestConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxTestCase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxTestCase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxTestCase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lastTestResult">LastTestResult</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList">DialogflowCxTestCaseLastTestResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurns">TestCaseConversationTurns</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList">DialogflowCxTestCaseTestCaseConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfig">TestConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference">DialogflowCxTestCaseTestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference">DialogflowCxTestCaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurnsInput">TestCaseConversationTurnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfigInput">TestConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `LastTestResult`<sup>Required</sup> <a name="LastTestResult" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lastTestResult"></a>

```csharp
public DialogflowCxTestCaseLastTestResultList LastTestResult { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList">DialogflowCxTestCaseLastTestResultList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TestCaseConversationTurns`<sup>Required</sup> <a name="TestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurns"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsList TestCaseConversationTurns { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList">DialogflowCxTestCaseTestCaseConversationTurnsList</a>

---

##### `TestConfig`<sup>Required</sup> <a name="TestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfig"></a>

```csharp
public DialogflowCxTestCaseTestConfigOutputReference TestConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference">DialogflowCxTestCaseTestConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeouts"></a>

```csharp
public DialogflowCxTestCaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference">DialogflowCxTestCaseTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TestCaseConversationTurnsInput`<sup>Optional</sup> <a name="TestCaseConversationTurnsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurnsInput"></a>

```csharp
public object TestCaseConversationTurnsInput { get; }
```

- *Type:* object

---

##### `TestConfigInput`<sup>Optional</sup> <a name="TestConfigInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfigInput"></a>

```csharp
public DialogflowCxTestCaseTestConfig TestConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxTestCaseConfig <a name="DialogflowCxTestCaseConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Id = null,
    string Notes = null,
    string Parent = null,
    string[] Tags = null,
    object TestCaseConversationTurns = null,
    DialogflowCxTestCaseTestConfig TestConfig = null,
    DialogflowCxTestCaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the test case, unique within the agent. Limit of 200 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#id DialogflowCxTestCase#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.notes">Notes</a></code> | <code>string</code> | Additional freeform notes about the test case. Limit of 400 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.parent">Parent</a></code> | <code>string</code> | The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testCaseConversationTurns">TestCaseConversationTurns</a></code> | <code>object</code> | test_case_conversation_turns block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testConfig">TestConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | test_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the test case, unique within the agent. Limit of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#display_name DialogflowCxTestCase#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#id DialogflowCxTestCase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

Additional freeform notes about the test case. Limit of 400 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#notes DialogflowCxTestCase#notes}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#parent DialogflowCxTestCase#parent}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.

Each tag should start with "#" and has a limit of 30 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#tags DialogflowCxTestCase#tags}

---

##### `TestCaseConversationTurns`<sup>Optional</sup> <a name="TestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testCaseConversationTurns"></a>

```csharp
public object TestCaseConversationTurns { get; set; }
```

- *Type:* object

test_case_conversation_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#test_case_conversation_turns DialogflowCxTestCase#test_case_conversation_turns}

---

##### `TestConfig`<sup>Optional</sup> <a name="TestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testConfig"></a>

```csharp
public DialogflowCxTestCaseTestConfig TestConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#test_config DialogflowCxTestCase#test_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.timeouts"></a>

```csharp
public DialogflowCxTestCaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#timeouts DialogflowCxTestCase#timeouts}

---

### DialogflowCxTestCaseLastTestResult <a name="DialogflowCxTestCaseLastTestResult" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResult {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurns <a name="DialogflowCxTestCaseLastTestResultConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurns {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInput <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInput {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses {

};
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent {

};
```


### DialogflowCxTestCaseTestCaseConversationTurns <a name="DialogflowCxTestCaseTestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurns {
    DialogflowCxTestCaseTestCaseConversationTurnsUserInput UserInput = null,
    DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput VirtualAgentOutput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.userInput">UserInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | user_input block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput">VirtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | virtual_agent_output block. |

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.userInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInput UserInput { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

user_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#user_input DialogflowCxTestCase#user_input}

---

##### `VirtualAgentOutput`<sup>Optional</sup> <a name="VirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput VirtualAgentOutput { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

virtual_agent_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#virtual_agent_output DialogflowCxTestCase#virtual_agent_output}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInput <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInput {
    object EnableSentimentAnalysis = null,
    string InjectedParameters = null,
    DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput Input = null,
    object IsWebhookEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis">EnableSentimentAnalysis</a></code> | <code>object</code> | Whether sentiment analysis is enabled. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters">InjectedParameters</a></code> | <code>string</code> | Parameters that need to be injected into the conversation during intent detection. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input">Input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled">IsWebhookEnabled</a></code> | <code>object</code> | If webhooks should be allowed to trigger in response to the user utterance. |

---

##### `EnableSentimentAnalysis`<sup>Optional</sup> <a name="EnableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis"></a>

```csharp
public object EnableSentimentAnalysis { get; set; }
```

- *Type:* object

Whether sentiment analysis is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#enable_sentiment_analysis DialogflowCxTestCase#enable_sentiment_analysis}

---

##### `InjectedParameters`<sup>Optional</sup> <a name="InjectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters"></a>

```csharp
public string InjectedParameters { get; set; }
```

- *Type:* string

Parameters that need to be injected into the conversation during intent detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#injected_parameters DialogflowCxTestCase#injected_parameters}

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput Input { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#input DialogflowCxTestCase#input}

---

##### `IsWebhookEnabled`<sup>Optional</sup> <a name="IsWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled"></a>

```csharp
public object IsWebhookEnabled { get; set; }
```

- *Type:* object

If webhooks should be allowed to trigger in response to the user utterance.

Often if parameters are injected, webhooks should not be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#is_webhook_enabled DialogflowCxTestCase#is_webhook_enabled}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput {
    DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf Dtmf = null,
    DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent Event = null,
    string LanguageCode = null,
    DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf">Dtmf</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | dtmf block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event">Event</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | event block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode">LanguageCode</a></code> | <code>string</code> | The language of the input. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | text block. |

---

##### `Dtmf`<sup>Optional</sup> <a name="Dtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf Dtmf { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

dtmf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#dtmf DialogflowCxTestCase#dtmf}

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent Event { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#event DialogflowCxTestCase#event}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

The language of the input.

See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#language_code DialogflowCxTestCase#language_code}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText Text { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf {
    string Digits = null,
    string FinishDigit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits">Digits</a></code> | <code>string</code> | The dtmf digits. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit">FinishDigit</a></code> | <code>string</code> | The finish digit (if any). |

---

##### `Digits`<sup>Optional</sup> <a name="Digits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits"></a>

```csharp
public string Digits { get; set; }
```

- *Type:* string

The dtmf digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#digits DialogflowCxTestCase#digits}

---

##### `FinishDigit`<sup>Optional</sup> <a name="FinishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit"></a>

```csharp
public string FinishDigit { get; set; }
```

- *Type:* string

The finish digit (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#finish_digit DialogflowCxTestCase#finish_digit}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent {
    string Event
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event">Event</a></code> | <code>string</code> | Name of the event. |

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event"></a>

```csharp
public string Event { get; set; }
```

- *Type:* string

Name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#event DialogflowCxTestCase#event}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText {
    string Text
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text">Text</a></code> | <code>string</code> | The natural language text to be processed. Text length must not exceed 256 characters. |

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

The natural language text to be processed. Text length must not exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput {
    DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage CurrentPage = null,
    string SessionParameters = null,
    object TextResponses = null,
    DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent TriggeredIntent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage">CurrentPage</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | current_page block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters">SessionParameters</a></code> | <code>string</code> | The session parameters available to the bot at this point. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses">TextResponses</a></code> | <code>object</code> | text_responses block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent">TriggeredIntent</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | triggered_intent block. |

---

##### `CurrentPage`<sup>Optional</sup> <a name="CurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage CurrentPage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

current_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#current_page DialogflowCxTestCase#current_page}

---

##### `SessionParameters`<sup>Optional</sup> <a name="SessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters"></a>

```csharp
public string SessionParameters { get; set; }
```

- *Type:* string

The session parameters available to the bot at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#session_parameters DialogflowCxTestCase#session_parameters}

---

##### `TextResponses`<sup>Optional</sup> <a name="TextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses"></a>

```csharp
public object TextResponses { get; set; }
```

- *Type:* object

text_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#text_responses DialogflowCxTestCase#text_responses}

---

##### `TriggeredIntent`<sup>Optional</sup> <a name="TriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent TriggeredIntent { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

triggered_intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#triggered_intent DialogflowCxTestCase#triggered_intent}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name">Name</a></code> | <code>string</code> | The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#name DialogflowCxTestCase#name}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses {
    string[] Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text">Text</a></code> | <code>string[]</code> | A collection of text responses. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text"></a>

```csharp
public string[] Text { get; set; }
```

- *Type:* string[]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name">Name</a></code> | <code>string</code> | The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#name DialogflowCxTestCase#name}

---

### DialogflowCxTestCaseTestConfig <a name="DialogflowCxTestCaseTestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestConfig {
    string Flow = null,
    string Page = null,
    string[] TrackingParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.flow">Flow</a></code> | <code>string</code> | Flow name to start the test case with. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.page">Page</a></code> | <code>string</code> | The page to start the test case with. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.trackingParameters">TrackingParameters</a></code> | <code>string[]</code> | Session parameters to be compared when calculating differences. |

---

##### `Flow`<sup>Optional</sup> <a name="Flow" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.flow"></a>

```csharp
public string Flow { get; set; }
```

- *Type:* string

Flow name to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#flow DialogflowCxTestCase#flow}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.page"></a>

```csharp
public string Page { get; set; }
```

- *Type:* string

The page to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#page DialogflowCxTestCase#page}

---

##### `TrackingParameters`<sup>Optional</sup> <a name="TrackingParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.trackingParameters"></a>

```csharp
public string[] TrackingParameters { get; set; }
```

- *Type:* string[]

Session parameters to be compared when calculating differences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#tracking_parameters DialogflowCxTestCase#tracking_parameters}

---

### DialogflowCxTestCaseTimeouts <a name="DialogflowCxTestCaseTimeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#create DialogflowCxTestCase#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#delete DialogflowCxTestCase#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#update DialogflowCxTestCase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#create DialogflowCxTestCase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#delete DialogflowCxTestCase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/dialogflow_cx_test_case#update DialogflowCxTestCase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxTestCaseLastTestResultConversationTurnsList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput">UserInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput">VirtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns">DialogflowCxTestCaseLastTestResultConversationTurns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Required</sup> <a name="UserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList UserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a>

---

##### `VirtualAgentOutput`<sup>Required</sup> <a name="VirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList VirtualAgentOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns">DialogflowCxTestCaseLastTestResultConversationTurns</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits">Digits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">FinishDigit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Digits`<sup>Required</sup> <a name="Digits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```csharp
public string Digits { get; }
```

- *Type:* string

---

##### `FinishDigit`<sup>Required</sup> <a name="FinishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```csharp
public string FinishDigit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event">Event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```csharp
public string Event { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf">Dtmf</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event">Event</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dtmf`<sup>Required</sup> <a name="Dtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList Dtmf { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a>

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList Event { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a>

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList Text { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">EnableSentimentAnalysis</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters">InjectedParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input">Input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled">IsWebhookEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableSentimentAnalysis`<sup>Required</sup> <a name="EnableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```csharp
public IResolvable EnableSentimentAnalysis { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InjectedParameters`<sup>Required</sup> <a name="InjectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```csharp
public string InjectedParameters { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a>

---

##### `IsWebhookEnabled`<sup>Required</sup> <a name="IsWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```csharp
public IResolvable IsWebhookEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">CurrentPage</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences">Differences</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">SessionParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">TextResponses</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">TriggeredIntent</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentPage`<sup>Required</sup> <a name="CurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList CurrentPage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a>

---

##### `Differences`<sup>Required</sup> <a name="Differences" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList Differences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a>

---

##### `SessionParameters`<sup>Required</sup> <a name="SessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```csharp
public string SessionParameters { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a>

---

##### `TextResponses`<sup>Required</sup> <a name="TextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList TextResponses { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `TriggeredIntent`<sup>Required</sup> <a name="TriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList TriggeredIntent { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">Text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```csharp
public string[] Text { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### DialogflowCxTestCaseLastTestResultList <a name="DialogflowCxTestCaseLastTestResultList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.get"></a>

```csharp
private DialogflowCxTestCaseLastTestResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowCxTestCaseLastTestResultOutputReference <a name="DialogflowCxTestCaseLastTestResultOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseLastTestResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns">ConversationTurns</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList">DialogflowCxTestCaseLastTestResultConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testResult">TestResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testTime">TestTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult">DialogflowCxTestCaseLastTestResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConversationTurns`<sup>Required</sup> <a name="ConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns"></a>

```csharp
public DialogflowCxTestCaseLastTestResultConversationTurnsList ConversationTurns { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList">DialogflowCxTestCaseLastTestResultConversationTurnsList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TestResult`<sup>Required</sup> <a name="TestResult" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testResult"></a>

```csharp
public string TestResult { get; }
```

- *Type:* string

---

##### `TestTime`<sup>Required</sup> <a name="TestTime" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testTime"></a>

```csharp
public string TestTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseLastTestResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult">DialogflowCxTestCaseLastTestResult</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsList <a name="DialogflowCxTestCaseTestCaseConversationTurnsList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.get"></a>

```csharp
private DialogflowCxTestCaseTestCaseConversationTurnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxTestCaseTestCaseConversationTurnsOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput">PutUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput">PutVirtualAgentOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput">ResetUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput">ResetVirtualAgentOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUserInput` <a name="PutUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput"></a>

```csharp
private void PutUserInput(DialogflowCxTestCaseTestCaseConversationTurnsUserInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---

##### `PutVirtualAgentOutput` <a name="PutVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput"></a>

```csharp
private void PutVirtualAgentOutput(DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---

##### `ResetUserInput` <a name="ResetUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput"></a>

```csharp
private void ResetUserInput()
```

##### `ResetVirtualAgentOutput` <a name="ResetVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput"></a>

```csharp
private void ResetVirtualAgentOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput">UserInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput">VirtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput">UserInputInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput">VirtualAgentOutputInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Required</sup> <a name="UserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference UserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a>

---

##### `VirtualAgentOutput`<sup>Required</sup> <a name="VirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference VirtualAgentOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a>

---

##### `UserInputInput`<sup>Optional</sup> <a name="UserInputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInput UserInputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---

##### `VirtualAgentOutputInput`<sup>Optional</sup> <a name="VirtualAgentOutputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput VirtualAgentOutputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits">ResetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit">ResetFinishDigit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDigits` <a name="ResetDigits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits"></a>

```csharp
private void ResetDigits()
```

##### `ResetFinishDigit` <a name="ResetFinishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit"></a>

```csharp
private void ResetFinishDigit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput">DigitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput">FinishDigitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits">Digits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">FinishDigit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DigitsInput`<sup>Optional</sup> <a name="DigitsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput"></a>

```csharp
public string DigitsInput { get; }
```

- *Type:* string

---

##### `FinishDigitInput`<sup>Optional</sup> <a name="FinishDigitInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput"></a>

```csharp
public string FinishDigitInput { get; }
```

- *Type:* string

---

##### `Digits`<sup>Required</sup> <a name="Digits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```csharp
public string Digits { get; }
```

- *Type:* string

---

##### `FinishDigit`<sup>Required</sup> <a name="FinishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```csharp
public string FinishDigit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput">EventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event">Event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput"></a>

```csharp
public string EventInput { get; }
```

- *Type:* string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```csharp
public string Event { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf">PutDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent">PutEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf">ResetDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDtmf` <a name="PutDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf"></a>

```csharp
private void PutDtmf(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---

##### `PutEvent` <a name="PutEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent"></a>

```csharp
private void PutEvent(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---

##### `PutText` <a name="PutText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText"></a>

```csharp
private void PutText(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---

##### `ResetDtmf` <a name="ResetDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf"></a>

```csharp
private void ResetDtmf()
```

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent"></a>

```csharp
private void ResetEvent()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode"></a>

```csharp
private void ResetLanguageCode()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf">Dtmf</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event">Event</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput">DtmfInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput">EventInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dtmf`<sup>Required</sup> <a name="Dtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference Dtmf { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a>

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference Event { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference Text { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a>

---

##### `DtmfInput`<sup>Optional</sup> <a name="DtmfInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf DtmfInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent EventInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText TextInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis">ResetEnableSentimentAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters">ResetInjectedParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled">ResetIsWebhookEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput"></a>

```csharp
private void PutInput(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---

##### `ResetEnableSentimentAnalysis` <a name="ResetEnableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis"></a>

```csharp
private void ResetEnableSentimentAnalysis()
```

##### `ResetInjectedParameters` <a name="ResetInjectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters"></a>

```csharp
private void ResetInjectedParameters()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetIsWebhookEnabled` <a name="ResetIsWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled"></a>

```csharp
private void ResetIsWebhookEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input">Input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput">EnableSentimentAnalysisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput">InjectedParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput">InputInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput">IsWebhookEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">EnableSentimentAnalysis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters">InjectedParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled">IsWebhookEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a>

---

##### `EnableSentimentAnalysisInput`<sup>Optional</sup> <a name="EnableSentimentAnalysisInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput"></a>

```csharp
public object EnableSentimentAnalysisInput { get; }
```

- *Type:* object

---

##### `InjectedParametersInput`<sup>Optional</sup> <a name="InjectedParametersInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput"></a>

```csharp
public string InjectedParametersInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput InputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---

##### `IsWebhookEnabledInput`<sup>Optional</sup> <a name="IsWebhookEnabledInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput"></a>

```csharp
public object IsWebhookEnabledInput { get; }
```

- *Type:* object

---

##### `EnableSentimentAnalysis`<sup>Required</sup> <a name="EnableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```csharp
public object EnableSentimentAnalysis { get; }
```

- *Type:* object

---

##### `InjectedParameters`<sup>Required</sup> <a name="InjectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```csharp
public string InjectedParameters { get; }
```

- *Type:* string

---

##### `IsWebhookEnabled`<sup>Required</sup> <a name="IsWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```csharp
public object IsWebhookEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsUserInput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage">PutCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses">PutTextResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent">PutTriggeredIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage">ResetCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters">ResetSessionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses">ResetTextResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent">ResetTriggeredIntent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCurrentPage` <a name="PutCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage"></a>

```csharp
private void PutCurrentPage(DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---

##### `PutTextResponses` <a name="PutTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses"></a>

```csharp
private void PutTextResponses(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses.parameter.value"></a>

- *Type:* object

---

##### `PutTriggeredIntent` <a name="PutTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent"></a>

```csharp
private void PutTriggeredIntent(DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---

##### `ResetCurrentPage` <a name="ResetCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage"></a>

```csharp
private void ResetCurrentPage()
```

##### `ResetSessionParameters` <a name="ResetSessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters"></a>

```csharp
private void ResetSessionParameters()
```

##### `ResetTextResponses` <a name="ResetTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses"></a>

```csharp
private void ResetTextResponses()
```

##### `ResetTriggeredIntent` <a name="ResetTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent"></a>

```csharp
private void ResetTriggeredIntent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">CurrentPage</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">TextResponses</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">TriggeredIntent</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput">CurrentPageInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput">SessionParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput">TextResponsesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput">TriggeredIntentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">SessionParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentPage`<sup>Required</sup> <a name="CurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference CurrentPage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a>

---

##### `TextResponses`<sup>Required</sup> <a name="TextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList TextResponses { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `TriggeredIntent`<sup>Required</sup> <a name="TriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference TriggeredIntent { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a>

---

##### `CurrentPageInput`<sup>Optional</sup> <a name="CurrentPageInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage CurrentPageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---

##### `SessionParametersInput`<sup>Optional</sup> <a name="SessionParametersInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput"></a>

```csharp
public string SessionParametersInput { get; }
```

- *Type:* string

---

##### `TextResponsesInput`<sup>Optional</sup> <a name="TextResponsesInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput"></a>

```csharp
public object TextResponsesInput { get; }
```

- *Type:* object

---

##### `TriggeredIntentInput`<sup>Optional</sup> <a name="TriggeredIntentInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent TriggeredIntentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---

##### `SessionParameters`<sup>Required</sup> <a name="SessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```csharp
public string SessionParameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```csharp
private DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput">TextInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">Text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput"></a>

```csharp
public string[] TextInput { get; }
```

- *Type:* string[]

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```csharp
public string[] Text { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### DialogflowCxTestCaseTestConfigOutputReference <a name="DialogflowCxTestCaseTestConfigOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTestConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetFlow">ResetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters">ResetTrackingParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlow` <a name="ResetFlow" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetFlow"></a>

```csharp
private void ResetFlow()
```

##### `ResetPage` <a name="ResetPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetPage"></a>

```csharp
private void ResetPage()
```

##### `ResetTrackingParameters` <a name="ResetTrackingParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters"></a>

```csharp
private void ResetTrackingParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flowInput">FlowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.pageInput">PageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput">TrackingParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flow">Flow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.page">Page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters">TrackingParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlowInput`<sup>Optional</sup> <a name="FlowInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flowInput"></a>

```csharp
public string FlowInput { get; }
```

- *Type:* string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.pageInput"></a>

```csharp
public string PageInput { get; }
```

- *Type:* string

---

##### `TrackingParametersInput`<sup>Optional</sup> <a name="TrackingParametersInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput"></a>

```csharp
public string[] TrackingParametersInput { get; }
```

- *Type:* string[]

---

##### `Flow`<sup>Required</sup> <a name="Flow" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flow"></a>

```csharp
public string Flow { get; }
```

- *Type:* string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.page"></a>

```csharp
public string Page { get; }
```

- *Type:* string

---

##### `TrackingParameters`<sup>Required</sup> <a name="TrackingParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters"></a>

```csharp
public string[] TrackingParameters { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxTestCaseTestConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

---


### DialogflowCxTestCaseTimeoutsOutputReference <a name="DialogflowCxTestCaseTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxTestCaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



