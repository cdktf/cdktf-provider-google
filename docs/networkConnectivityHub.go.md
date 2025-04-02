# `networkConnectivityHub` Submodule <a name="`networkConnectivityHub` Submodule" id="@cdktf/provider-google.networkConnectivityHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityHub <a name="NetworkConnectivityHub" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub google_network_connectivity_hub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

networkconnectivityhub.NewNetworkConnectivityHub(scope Construct, id *string, config NetworkConnectivityHubConfig) NetworkConnectivityHub
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig">NetworkConnectivityHubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig">NetworkConnectivityHubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetExportPsc">ResetExportPsc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetPolicyMode">ResetPolicyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetPresetTopology">ResetPresetTopology</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.putTimeouts"></a>

```go
func PutTimeouts(value NetworkConnectivityHubTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExportPsc` <a name="ResetExportPsc" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetExportPsc"></a>

```go
func ResetExportPsc()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetName"></a>

```go
func ResetName()
```

##### `ResetPolicyMode` <a name="ResetPolicyMode" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetPolicyMode"></a>

```go
func ResetPolicyMode()
```

##### `ResetPresetTopology` <a name="ResetPresetTopology" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetPresetTopology"></a>

```go
func ResetPresetTopology()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityHub resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

networkconnectivityhub.NetworkConnectivityHub_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

networkconnectivityhub.NetworkConnectivityHub_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

networkconnectivityhub.NetworkConnectivityHub_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

networkconnectivityhub.NetworkConnectivityHub_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkConnectivityHub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkConnectivityHub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkConnectivityHub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityHub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.routingVpcs">RoutingVpcs</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList">NetworkConnectivityHubRoutingVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference">NetworkConnectivityHubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.exportPscInput">ExportPscInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.policyModeInput">PolicyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.presetTopologyInput">PresetTopologyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.exportPsc">ExportPsc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.policyMode">PolicyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.presetTopology">PresetTopology</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `RoutingVpcs`<sup>Required</sup> <a name="RoutingVpcs" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.routingVpcs"></a>

```go
func RoutingVpcs() NetworkConnectivityHubRoutingVpcsList
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList">NetworkConnectivityHubRoutingVpcsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.timeouts"></a>

```go
func Timeouts() NetworkConnectivityHubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference">NetworkConnectivityHubTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExportPscInput`<sup>Optional</sup> <a name="ExportPscInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.exportPscInput"></a>

```go
func ExportPscInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyModeInput`<sup>Optional</sup> <a name="PolicyModeInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.policyModeInput"></a>

```go
func PolicyModeInput() *string
```

- *Type:* *string

---

##### `PresetTopologyInput`<sup>Optional</sup> <a name="PresetTopologyInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.presetTopologyInput"></a>

```go
func PresetTopologyInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExportPsc`<sup>Required</sup> <a name="ExportPsc" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.exportPsc"></a>

```go
func ExportPsc() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyMode`<sup>Required</sup> <a name="PolicyMode" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.policyMode"></a>

```go
func PolicyMode() *string
```

- *Type:* *string

---

##### `PresetTopology`<sup>Required</sup> <a name="PresetTopology" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.presetTopology"></a>

```go
func PresetTopology() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityHubConfig <a name="NetworkConnectivityHubConfig" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

&networkconnectivityhub.NetworkConnectivityHubConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	ExportPsc: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Name: *string,
	PolicyMode: *string,
	PresetTopology: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.networkConnectivityHub.NetworkConnectivityHubTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the hub. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.exportPsc">ExportPsc</a></code> | <code>interface{}</code> | Whether Private Service Connect transitivity is enabled for the hub. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#id NetworkConnectivityHub#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.name">Name</a></code> | <code>*string</code> | Immutable. The name of the hub. Hub names must be unique. They use the following form: 'projects/{project_number}/locations/global/hubs/{hub_id}'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.policyMode">PolicyMode</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.presetTopology">PresetTopology</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#project NetworkConnectivityHub#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#description NetworkConnectivityHub#description}

---

##### `ExportPsc`<sup>Optional</sup> <a name="ExportPsc" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.exportPsc"></a>

```go
ExportPsc interface{}
```

- *Type:* interface{}

Whether Private Service Connect transitivity is enabled for the hub.

If true, Private Service Connect endpoints in VPC spokes attached to the hub are made accessible to other VPC spokes attached to the hub. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#export_psc NetworkConnectivityHub#export_psc}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#id NetworkConnectivityHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#labels NetworkConnectivityHub#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Immutable. The name of the hub. Hub names must be unique. They use the following form: 'projects/{project_number}/locations/global/hubs/{hub_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#name NetworkConnectivityHub#name}

---

##### `PolicyMode`<sup>Optional</sup> <a name="PolicyMode" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.policyMode"></a>

```go
PolicyMode *string
```

- *Type:* *string

Optional.

The policy mode of this hub. This field can be either PRESET or CUSTOM. If unspecified, the policyMode defaults to PRESET. Possible values: ["CUSTOM", "PRESET"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#policy_mode NetworkConnectivityHub#policy_mode}

---

##### `PresetTopology`<sup>Optional</sup> <a name="PresetTopology" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.presetTopology"></a>

```go
PresetTopology *string
```

- *Type:* *string

Optional.

The topology implemented in this hub. Currently, this field is only used when policyMode = PRESET. The available preset topologies are MESH and STAR. If presetTopology is unspecified and policyMode = PRESET, the presetTopology defaults to MESH. When policyMode = CUSTOM, the presetTopology is set to PRESET_TOPOLOGY_UNSPECIFIED. Possible values: ["MESH", "STAR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#preset_topology NetworkConnectivityHub#preset_topology}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#project NetworkConnectivityHub#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.timeouts"></a>

```go
Timeouts NetworkConnectivityHubTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#timeouts NetworkConnectivityHub#timeouts}

---

### NetworkConnectivityHubRoutingVpcs <a name="NetworkConnectivityHubRoutingVpcs" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

&networkconnectivityhub.NetworkConnectivityHubRoutingVpcs {

}
```


### NetworkConnectivityHubTimeouts <a name="NetworkConnectivityHubTimeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

&networkconnectivityhub.NetworkConnectivityHubTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#create NetworkConnectivityHub#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#delete NetworkConnectivityHub#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#update NetworkConnectivityHub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#create NetworkConnectivityHub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#delete NetworkConnectivityHub#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_hub#update NetworkConnectivityHub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityHubRoutingVpcsList <a name="NetworkConnectivityHubRoutingVpcsList" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

networkconnectivityhub.NewNetworkConnectivityHubRoutingVpcsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectivityHubRoutingVpcsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.get"></a>

```go
func Get(index *f64) NetworkConnectivityHubRoutingVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkConnectivityHubRoutingVpcsOutputReference <a name="NetworkConnectivityHubRoutingVpcsOutputReference" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

networkconnectivityhub.NewNetworkConnectivityHubRoutingVpcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectivityHubRoutingVpcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcs">NetworkConnectivityHubRoutingVpcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectivityHubRoutingVpcs
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcs">NetworkConnectivityHubRoutingVpcs</a>

---


### NetworkConnectivityHubTimeoutsOutputReference <a name="NetworkConnectivityHubTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkconnectivityhub"

networkconnectivityhub.NewNetworkConnectivityHubTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivityHubTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



