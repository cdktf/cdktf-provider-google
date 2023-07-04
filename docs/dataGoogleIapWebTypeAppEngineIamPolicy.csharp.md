# `data_google_iap_web_type_app_engine_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_iap_web_type_app_engine_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/iap_web_type_app_engine_iam_policy).

# `dataGoogleIapWebTypeAppEngineIamPolicy` Submodule <a name="`dataGoogleIapWebTypeAppEngineIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapWebTypeAppEngineIamPolicy <a name="DataGoogleIapWebTypeAppEngineIamPolicy" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/iap_web_type_app_engine_iam_policy google_iap_web_type_app_engine_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleIapWebTypeAppEngineIamPolicy(Construct Scope, string Id, DataGoogleIapWebTypeAppEngineIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig">DataGoogleIapWebTypeAppEngineIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig">DataGoogleIapWebTypeAppEngineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleIapWebTypeAppEngineIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleIapWebTypeAppEngineIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleIapWebTypeAppEngineIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapWebTypeAppEngineIamPolicyConfig <a name="DataGoogleIapWebTypeAppEngineIamPolicyConfig" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleIapWebTypeAppEngineIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/iap_web_type_app_engine_iam_policy#app_id DataGoogleIapWebTypeAppEngineIamPolicy#app_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/iap_web_type_app_engine_iam_policy#id DataGoogleIapWebTypeAppEngineIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/iap_web_type_app_engine_iam_policy#project DataGoogleIapWebTypeAppEngineIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/iap_web_type_app_engine_iam_policy#app_id DataGoogleIapWebTypeAppEngineIamPolicy#app_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/iap_web_type_app_engine_iam_policy#id DataGoogleIapWebTypeAppEngineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/iap_web_type_app_engine_iam_policy#project DataGoogleIapWebTypeAppEngineIamPolicy#project}.

---



