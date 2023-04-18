# `google_app_engine_application_url_dispatch_rules`

Refer to the Terraform Registory for docs: [`google_app_engine_application_url_dispatch_rules`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules).

# `appEngineApplicationUrlDispatchRules` Submodule <a name="`appEngineApplicationUrlDispatchRules` Submodule" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineApplicationUrlDispatchRules <a name="AppEngineApplicationUrlDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRules(Construct Scope, string Id, AppEngineApplicationUrlDispatchRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig">AppEngineApplicationUrlDispatchRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig">AppEngineApplicationUrlDispatchRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules">PutDispatchRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDispatchRules` <a name="PutDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules"></a>

```csharp
private void PutDispatchRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts"></a>

```csharp
private void PutTimeouts(AppEngineApplicationUrlDispatchRulesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineApplicationUrlDispatchRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineApplicationUrlDispatchRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineApplicationUrlDispatchRules.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules">DispatchRules</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput">DispatchRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DispatchRules`<sup>Required</sup> <a name="DispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules"></a>

```csharp
public AppEngineApplicationUrlDispatchRulesDispatchRulesList DispatchRules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts"></a>

```csharp
public AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a>

---

##### `DispatchRulesInput`<sup>Optional</sup> <a name="DispatchRulesInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput"></a>

```csharp
public object DispatchRulesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineApplicationUrlDispatchRulesConfig <a name="AppEngineApplicationUrlDispatchRulesConfig" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object DispatchRules,
    string Id = null,
    string Project = null,
    AppEngineApplicationUrlDispatchRulesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules">DispatchRules</a></code> | <code>object</code> | dispatch_rules block. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DispatchRules`<sup>Required</sup> <a name="DispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules"></a>

```csharp
public object DispatchRules { get; set; }
```

- *Type:* object

dispatch_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts"></a>

```csharp
public AppEngineApplicationUrlDispatchRulesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#timeouts AppEngineApplicationUrlDispatchRules#timeouts}

---

### AppEngineApplicationUrlDispatchRulesDispatchRules <a name="AppEngineApplicationUrlDispatchRulesDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRulesDispatchRules {
    string Path,
    string Service,
    string Domain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path">Path</a></code> | <code>string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service">Service</a></code> | <code>string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain">Domain</a></code> | <code>string</code> | Domain name to match against. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#path AppEngineApplicationUrlDispatchRules#path}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#service AppEngineApplicationUrlDispatchRules#service}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Domain name to match against.

The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#domain AppEngineApplicationUrlDispatchRules#domain}

---

### AppEngineApplicationUrlDispatchRulesTimeouts <a name="AppEngineApplicationUrlDispatchRulesTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRulesTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineApplicationUrlDispatchRulesDispatchRulesList <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesList" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRulesDispatchRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get"></a>

```csharp
private AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference <a name="AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



