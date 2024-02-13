# `networkSecurityAddressGroup` Submodule <a name="`networkSecurityAddressGroup` Submodule" id="@cdktf/provider-google.networkSecurityAddressGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityAddressGroup <a name="NetworkSecurityAddressGroup" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group google_network_security_address_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityaddressgroup"

networksecurityaddressgroup.NewNetworkSecurityAddressGroup(scope Construct, id *string, config NetworkSecurityAddressGroupConfig) NetworkSecurityAddressGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig">NetworkSecurityAddressGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig">NetworkSecurityAddressGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetItems">ResetItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityAddressGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts">NetworkSecurityAddressGroupTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetItems"></a>

```go
func ResetItems()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetParent"></a>

```go
func ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityAddressGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityaddressgroup"

networksecurityaddressgroup.NetworkSecurityAddressGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityaddressgroup"

networksecurityaddressgroup.NetworkSecurityAddressGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityaddressgroup"

networksecurityaddressgroup.NetworkSecurityAddressGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityaddressgroup"

networksecurityaddressgroup.NetworkSecurityAddressGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecurityAddressGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityAddressGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityAddressGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityAddressGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference">NetworkSecurityAddressGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityAddressGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference">NetworkSecurityAddressGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityAddressGroupConfig <a name="NetworkSecurityAddressGroupConfig" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityaddressgroup"

&networksecurityaddressgroup.NetworkSecurityAddressGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Capacity: *f64,
	Location: *string,
	Name: *string,
	Type: *string,
	Description: *string,
	Id: *string,
	Items: *[]*string,
	Labels: *map[string]*string,
	Parent: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.capacity">Capacity</a></code> | <code>*f64</code> | Capacity of the Address Group. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.location">Location</a></code> | <code>*string</code> | The location of the gateway security policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the AddressGroup resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.type">Type</a></code> | <code>*string</code> | The type of the Address Group. Possible values are "IPV4" or "IPV6". Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.description">Description</a></code> | <code>*string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#id NetworkSecurityAddressGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.items">Items</a></code> | <code>*[]*string</code> | List of items. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the AddressGroup resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.parent">Parent</a></code> | <code>*string</code> | The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts">NetworkSecurityAddressGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Capacity of the Address Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#capacity NetworkSecurityAddressGroup#capacity}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the gateway security policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#location NetworkSecurityAddressGroup#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the AddressGroup resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#name NetworkSecurityAddressGroup#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the Address Group. Possible values are "IPV4" or "IPV6". Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#type NetworkSecurityAddressGroup#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#description NetworkSecurityAddressGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#id NetworkSecurityAddressGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

List of items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#items NetworkSecurityAddressGroup#items}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the AddressGroup resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#labels NetworkSecurityAddressGroup#labels}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#parent NetworkSecurityAddressGroup#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityAddressGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts">NetworkSecurityAddressGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#timeouts NetworkSecurityAddressGroup#timeouts}

---

### NetworkSecurityAddressGroupTimeouts <a name="NetworkSecurityAddressGroupTimeouts" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityaddressgroup"

&networksecurityaddressgroup.NetworkSecurityAddressGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#create NetworkSecurityAddressGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#delete NetworkSecurityAddressGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#update NetworkSecurityAddressGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#create NetworkSecurityAddressGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#delete NetworkSecurityAddressGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/network_security_address_group#update NetworkSecurityAddressGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityAddressGroupTimeoutsOutputReference <a name="NetworkSecurityAddressGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityaddressgroup"

networksecurityaddressgroup.NewNetworkSecurityAddressGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityAddressGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityAddressGroup.NetworkSecurityAddressGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



