# `google_deployment_manager_deployment`

Refer to the Terraform Registory for docs: [`google_deployment_manager_deployment`](https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment).

# `deploymentManagerDeployment` Submodule <a name="`deploymentManagerDeployment` Submodule" id="@cdktf/provider-google.deploymentManagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeploymentManagerDeployment <a name="DeploymentManagerDeployment" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment google_deployment_manager_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeployment(Construct Scope, string Id, DeploymentManagerDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig">DeploymentManagerDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig">DeploymentManagerDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetCreatePolicy">ResetCreatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletePolicy">ResetDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels.parameter.value"></a>

- *Type:* object

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget"></a>

```csharp
private void PutTarget(DeploymentManagerDeploymentTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(DeploymentManagerDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

---

##### `ResetCreatePolicy` <a name="ResetCreatePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetCreatePolicy"></a>

```csharp
private void ResetCreatePolicy()
```

##### `ResetDeletePolicy` <a name="ResetDeletePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletePolicy"></a>

```csharp
private void ResetDeletePolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetPreview"></a>

```csharp
private void ResetPreview()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeploymentManagerDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeploymentManagerDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeploymentManagerDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList">DeploymentManagerDeploymentLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.manifest">Manifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference">DeploymentManagerDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference">DeploymentManagerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicyInput">CreatePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicyInput">DeletePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.previewInput">PreviewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicy">CreatePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicy">DeletePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.preview">Preview</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labels"></a>

```csharp
public DeploymentManagerDeploymentLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList">DeploymentManagerDeploymentLabelsList</a>

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.manifest"></a>

```csharp
public string Manifest { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.target"></a>

```csharp
public DeploymentManagerDeploymentTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference">DeploymentManagerDeploymentTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeouts"></a>

```csharp
public DeploymentManagerDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference">DeploymentManagerDeploymentTimeoutsOutputReference</a>

---

##### `CreatePolicyInput`<sup>Optional</sup> <a name="CreatePolicyInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicyInput"></a>

```csharp
public string CreatePolicyInput { get; }
```

- *Type:* string

---

##### `DeletePolicyInput`<sup>Optional</sup> <a name="DeletePolicyInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicyInput"></a>

```csharp
public string DeletePolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.previewInput"></a>

```csharp
public object PreviewInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.targetInput"></a>

```csharp
public DeploymentManagerDeploymentTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicy"></a>

```csharp
public string CreatePolicy { get; }
```

- *Type:* string

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicy"></a>

```csharp
public string DeletePolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.preview"></a>

```csharp
public object Preview { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeploymentManagerDeploymentConfig <a name="DeploymentManagerDeploymentConfig" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    DeploymentManagerDeploymentTarget Target,
    string CreatePolicy = null,
    string DeletePolicy = null,
    string Description = null,
    string Id = null,
    object Labels = null,
    object Preview = null,
    string Project = null,
    DeploymentManagerDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.createPolicy">CreatePolicy</a></code> | <code>string</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletePolicy">DeletePolicy</a></code> | <code>string</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.preview">Preview</a></code> | <code>object</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.target"></a>

```csharp
public DeploymentManagerDeploymentTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#target DeploymentManagerDeployment#target}

---

##### `CreatePolicy`<sup>Optional</sup> <a name="CreatePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.createPolicy"></a>

```csharp
public string CreatePolicy { get; set; }
```

- *Type:* string

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#create_policy DeploymentManagerDeployment#create_policy}

---

##### `DeletePolicy`<sup>Optional</sup> <a name="DeletePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletePolicy"></a>

```csharp
public string DeletePolicy { get; set; }
```

- *Type:* string

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#delete_policy DeploymentManagerDeployment#delete_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#description DeploymentManagerDeployment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#labels DeploymentManagerDeployment#labels}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.preview"></a>

```csharp
public object Preview { get; set; }
```

- *Type:* object

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#preview DeploymentManagerDeployment#preview}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.timeouts"></a>

```csharp
public DeploymentManagerDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#timeouts DeploymentManagerDeployment#timeouts}

---

### DeploymentManagerDeploymentLabels <a name="DeploymentManagerDeploymentLabels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentLabels {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.key">Key</a></code> | <code>string</code> | Key for label. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.value">Value</a></code> | <code>string</code> | Value of label. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Key for label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#key DeploymentManagerDeployment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#value DeploymentManagerDeployment#value}

---

### DeploymentManagerDeploymentTarget <a name="DeploymentManagerDeploymentTarget" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentTarget {
    DeploymentManagerDeploymentTargetConfig Config,
    object Imports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.imports">Imports</a></code> | <code>object</code> | imports block. |

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.config"></a>

```csharp
public DeploymentManagerDeploymentTargetConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#config DeploymentManagerDeployment#config}

---

##### `Imports`<sup>Optional</sup> <a name="Imports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.imports"></a>

```csharp
public object Imports { get; set; }
```

- *Type:* object

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#imports DeploymentManagerDeployment#imports}

---

### DeploymentManagerDeploymentTargetConfig <a name="DeploymentManagerDeploymentTargetConfig" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentTargetConfig {
    string Content
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.property.content">Content</a></code> | <code>string</code> | The full YAML contents of your configuration file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The full YAML contents of your configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#content DeploymentManagerDeployment#content}

---

### DeploymentManagerDeploymentTargetImports <a name="DeploymentManagerDeploymentTargetImports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentTargetImports {
    string Content = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.content">Content</a></code> | <code>string</code> | The full contents of the template that you want to import. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.name">Name</a></code> | <code>string</code> | The name of the template to import, as declared in the YAML configuration. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The full contents of the template that you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#content DeploymentManagerDeployment#content}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the template to import, as declared in the YAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

### DeploymentManagerDeploymentTimeouts <a name="DeploymentManagerDeploymentTimeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#create DeploymentManagerDeployment#create}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#update DeploymentManagerDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#create DeploymentManagerDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/resources/deployment_manager_deployment#update DeploymentManagerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeploymentManagerDeploymentLabelsList <a name="DeploymentManagerDeploymentLabelsList" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get"></a>

```csharp
private DeploymentManagerDeploymentLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DeploymentManagerDeploymentLabelsOutputReference <a name="DeploymentManagerDeploymentLabelsOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DeploymentManagerDeploymentTargetConfigOutputReference <a name="DeploymentManagerDeploymentTargetConfigOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentTargetConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue"></a>

```csharp
public DeploymentManagerDeploymentTargetConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---


### DeploymentManagerDeploymentTargetImportsList <a name="DeploymentManagerDeploymentTargetImportsList" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentTargetImportsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get"></a>

```csharp
private DeploymentManagerDeploymentTargetImportsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DeploymentManagerDeploymentTargetImportsOutputReference <a name="DeploymentManagerDeploymentTargetImportsOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentTargetImportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DeploymentManagerDeploymentTargetOutputReference <a name="DeploymentManagerDeploymentTargetOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports">PutImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resetImports">ResetImports</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig"></a>

```csharp
private void PutConfig(DeploymentManagerDeploymentTargetConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---

##### `PutImports` <a name="PutImports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports"></a>

```csharp
private void PutImports(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports.parameter.value"></a>

- *Type:* object

---

##### `ResetImports` <a name="ResetImports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resetImports"></a>

```csharp
private void ResetImports()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference">DeploymentManagerDeploymentTargetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.imports">Imports</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList">DeploymentManagerDeploymentTargetImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.importsInput">ImportsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.config"></a>

```csharp
public DeploymentManagerDeploymentTargetConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference">DeploymentManagerDeploymentTargetConfigOutputReference</a>

---

##### `Imports`<sup>Required</sup> <a name="Imports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.imports"></a>

```csharp
public DeploymentManagerDeploymentTargetImportsList Imports { get; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList">DeploymentManagerDeploymentTargetImportsList</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.configInput"></a>

```csharp
public DeploymentManagerDeploymentTargetConfig ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---

##### `ImportsInput`<sup>Optional</sup> <a name="ImportsInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.importsInput"></a>

```csharp
public object ImportsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.internalValue"></a>

```csharp
public DeploymentManagerDeploymentTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---


### DeploymentManagerDeploymentTimeoutsOutputReference <a name="DeploymentManagerDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeploymentManagerDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



