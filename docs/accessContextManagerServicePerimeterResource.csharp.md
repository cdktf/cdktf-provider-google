# `accessContextManagerServicePerimeterResource` Submodule <a name="`accessContextManagerServicePerimeterResource` Submodule" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeterResource <a name="AccessContextManagerServicePerimeterResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource google_access_context_manager_service_perimeter_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterResource(Construct Scope, string Id, AccessContextManagerServicePerimeterResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig">AccessContextManagerServicePerimeterResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig">AccessContextManagerServicePerimeterResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.putTimeouts"></a>

```csharp
private void PutTimeouts(AccessContextManagerServicePerimeterResourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerServicePerimeterResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerServicePerimeterResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerServicePerimeterResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference">AccessContextManagerServicePerimeterResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.perimeterNameInput">PerimeterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.perimeterName">PerimeterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.resource">Resource</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.timeouts"></a>

```csharp
public AccessContextManagerServicePerimeterResourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference">AccessContextManagerServicePerimeterResourceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PerimeterNameInput`<sup>Optional</sup> <a name="PerimeterNameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.perimeterNameInput"></a>

```csharp
public string PerimeterNameInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PerimeterName`<sup>Required</sup> <a name="PerimeterName" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.perimeterName"></a>

```csharp
public string PerimeterName { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterResourceConfig <a name="AccessContextManagerServicePerimeterResourceConfig" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterResourceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PerimeterName,
    string Resource,
    string Id = null,
    AccessContextManagerServicePerimeterResourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.perimeterName">PerimeterName</a></code> | <code>string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.resource">Resource</a></code> | <code>string</code> | A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource#id AccessContextManagerServicePerimeterResource#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PerimeterName`<sup>Required</sup> <a name="PerimeterName" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.perimeterName"></a>

```csharp
public string PerimeterName { get; set; }
```

- *Type:* string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource#perimeter_name AccessContextManagerServicePerimeterResource#perimeter_name}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource#resource AccessContextManagerServicePerimeterResource#resource}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource#id AccessContextManagerServicePerimeterResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceConfig.property.timeouts"></a>

```csharp
public AccessContextManagerServicePerimeterResourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts">AccessContextManagerServicePerimeterResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource#timeouts AccessContextManagerServicePerimeterResource#timeouts}

---

### AccessContextManagerServicePerimeterResourceTimeouts <a name="AccessContextManagerServicePerimeterResourceTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterResourceTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource#create AccessContextManagerServicePerimeterResource#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource#delete AccessContextManagerServicePerimeterResource#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource#create AccessContextManagerServicePerimeterResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter_resource#delete AccessContextManagerServicePerimeterResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterResourceTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterResourceTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterResourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterResource.AccessContextManagerServicePerimeterResourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



