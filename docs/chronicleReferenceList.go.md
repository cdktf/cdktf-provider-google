# `chronicleReferenceList` Submodule <a name="`chronicleReferenceList` Submodule" id="@cdktf/provider-google.chronicleReferenceList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleReferenceList <a name="ChronicleReferenceList" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list google_chronicle_reference_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.NewChronicleReferenceList(scope Construct, id *string, config ChronicleReferenceListConfig) ChronicleReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig">ChronicleReferenceListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig">ChronicleReferenceListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.putEntries">PutEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntries` <a name="PutEntries" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.putEntries"></a>

```go
func PutEntries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.putEntries.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleReferenceListTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleReferenceList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.ChronicleReferenceList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.ChronicleReferenceList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.ChronicleReferenceList_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.ChronicleReferenceList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ChronicleReferenceList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleReferenceList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleReferenceList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleReferenceList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.entries">Entries</a></code> | <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList">ChronicleReferenceListEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.revisionCreateTime">RevisionCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.ruleAssociationsCount">RuleAssociationsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.rules">Rules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.scopeInfo">ScopeInfo</a></code> | <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList">ChronicleReferenceListScopeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference">ChronicleReferenceListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.entriesInput">EntriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.referenceListIdInput">ReferenceListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.syntaxTypeInput">SyntaxTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.referenceListId">ReferenceListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.syntaxType">SyntaxType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.entries"></a>

```go
func Entries() ChronicleReferenceListEntriesList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList">ChronicleReferenceListEntriesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RevisionCreateTime`<sup>Required</sup> <a name="RevisionCreateTime" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.revisionCreateTime"></a>

```go
func RevisionCreateTime() *string
```

- *Type:* *string

---

##### `RuleAssociationsCount`<sup>Required</sup> <a name="RuleAssociationsCount" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.ruleAssociationsCount"></a>

```go
func RuleAssociationsCount() *f64
```

- *Type:* *f64

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.rules"></a>

```go
func Rules() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeInfo`<sup>Required</sup> <a name="ScopeInfo" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.scopeInfo"></a>

```go
func ScopeInfo() ChronicleReferenceListScopeInfoList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList">ChronicleReferenceListScopeInfoList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.timeouts"></a>

```go
func Timeouts() ChronicleReferenceListTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference">ChronicleReferenceListTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.entriesInput"></a>

```go
func EntriesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReferenceListIdInput`<sup>Optional</sup> <a name="ReferenceListIdInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.referenceListIdInput"></a>

```go
func ReferenceListIdInput() *string
```

- *Type:* *string

---

##### `SyntaxTypeInput`<sup>Optional</sup> <a name="SyntaxTypeInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.syntaxTypeInput"></a>

```go
func SyntaxTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReferenceListId`<sup>Required</sup> <a name="ReferenceListId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.referenceListId"></a>

```go
func ReferenceListId() *string
```

- *Type:* *string

---

##### `SyntaxType`<sup>Required</sup> <a name="SyntaxType" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.syntaxType"></a>

```go
func SyntaxType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleReferenceListConfig <a name="ChronicleReferenceListConfig" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

&chroniclereferencelist.ChronicleReferenceListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Entries: interface{},
	Instance: *string,
	Location: *string,
	ReferenceListId: *string,
	SyntaxType: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.chronicleReferenceList.ChronicleReferenceListTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.description">Description</a></code> | <code>*string</code> | Required. A user-provided description of the reference list. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.entries">Entries</a></code> | <code>interface{}</code> | entries block. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.instance">Instance</a></code> | <code>*string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.referenceListId">ReferenceListId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.syntaxType">SyntaxType</a></code> | <code>*string</code> | Possible values: REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING REFERENCE_LIST_SYNTAX_TYPE_REGEX REFERENCE_LIST_SYNTAX_TYPE_CIDR. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#id ChronicleReferenceList#id}. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#project ChronicleReferenceList#project}. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Required. A user-provided description of the reference list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#description ChronicleReferenceList#description}

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.entries"></a>

```go
Entries interface{}
```

- *Type:* interface{}

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#entries ChronicleReferenceList#entries}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#instance ChronicleReferenceList#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#location ChronicleReferenceList#location}

---

##### `ReferenceListId`<sup>Required</sup> <a name="ReferenceListId" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.referenceListId"></a>

```go
ReferenceListId *string
```

- *Type:* *string

Required.

The ID to use for the reference list. This is also the display name for
the reference list. It must satisfy the following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Has length < 256.
* Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#reference_list_id ChronicleReferenceList#reference_list_id}

---

##### `SyntaxType`<sup>Required</sup> <a name="SyntaxType" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.syntaxType"></a>

```go
SyntaxType *string
```

- *Type:* *string

Possible values: REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING REFERENCE_LIST_SYNTAX_TYPE_REGEX REFERENCE_LIST_SYNTAX_TYPE_CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#syntax_type ChronicleReferenceList#syntax_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#id ChronicleReferenceList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#project ChronicleReferenceList#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListConfig.property.timeouts"></a>

```go
Timeouts ChronicleReferenceListTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts">ChronicleReferenceListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#timeouts ChronicleReferenceList#timeouts}

---

### ChronicleReferenceListEntries <a name="ChronicleReferenceListEntries" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

&chroniclereferencelist.ChronicleReferenceListEntries {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntries.property.value">Value</a></code> | <code>*string</code> | Required. The value of the entry. Maximum length is 512 characters. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntries.property.value"></a>

```go
Value *string
```

- *Type:* *string

Required. The value of the entry. Maximum length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#value ChronicleReferenceList#value}

---

### ChronicleReferenceListScopeInfo <a name="ChronicleReferenceListScopeInfo" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

&chroniclereferencelist.ChronicleReferenceListScopeInfo {

}
```


### ChronicleReferenceListScopeInfoReferenceListScope <a name="ChronicleReferenceListScopeInfoReferenceListScope" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

&chroniclereferencelist.ChronicleReferenceListScopeInfoReferenceListScope {

}
```


### ChronicleReferenceListTimeouts <a name="ChronicleReferenceListTimeouts" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

&chroniclereferencelist.ChronicleReferenceListTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#create ChronicleReferenceList#create}. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#delete ChronicleReferenceList#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#update ChronicleReferenceList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#create ChronicleReferenceList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#delete ChronicleReferenceList#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/chronicle_reference_list#update ChronicleReferenceList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleReferenceListEntriesList <a name="ChronicleReferenceListEntriesList" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.NewChronicleReferenceListEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleReferenceListEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.get"></a>

```go
func Get(index *f64) ChronicleReferenceListEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleReferenceListEntriesOutputReference <a name="ChronicleReferenceListEntriesOutputReference" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.NewChronicleReferenceListEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleReferenceListEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleReferenceListScopeInfoList <a name="ChronicleReferenceListScopeInfoList" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.NewChronicleReferenceListScopeInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleReferenceListScopeInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.get"></a>

```go
func Get(index *f64) ChronicleReferenceListScopeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChronicleReferenceListScopeInfoOutputReference <a name="ChronicleReferenceListScopeInfoOutputReference" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.NewChronicleReferenceListScopeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleReferenceListScopeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.referenceListScope">ReferenceListScope</a></code> | <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList">ChronicleReferenceListScopeInfoReferenceListScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo">ChronicleReferenceListScopeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceListScope`<sup>Required</sup> <a name="ReferenceListScope" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.referenceListScope"></a>

```go
func ReferenceListScope() ChronicleReferenceListScopeInfoReferenceListScopeList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList">ChronicleReferenceListScopeInfoReferenceListScopeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleReferenceListScopeInfo
```

- *Type:* <a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfo">ChronicleReferenceListScopeInfo</a>

---


### ChronicleReferenceListScopeInfoReferenceListScopeList <a name="ChronicleReferenceListScopeInfoReferenceListScopeList" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.NewChronicleReferenceListScopeInfoReferenceListScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleReferenceListScopeInfoReferenceListScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.get"></a>

```go
func Get(index *f64) ChronicleReferenceListScopeInfoReferenceListScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChronicleReferenceListScopeInfoReferenceListScopeOutputReference <a name="ChronicleReferenceListScopeInfoReferenceListScopeOutputReference" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.NewChronicleReferenceListScopeInfoReferenceListScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleReferenceListScopeInfoReferenceListScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNames">ScopeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope">ChronicleReferenceListScopeInfoReferenceListScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeNames`<sup>Required</sup> <a name="ScopeNames" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNames"></a>

```go
func ScopeNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleReferenceListScopeInfoReferenceListScope
```

- *Type:* <a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListScopeInfoReferenceListScope">ChronicleReferenceListScopeInfoReferenceListScope</a>

---


### ChronicleReferenceListTimeoutsOutputReference <a name="ChronicleReferenceListTimeoutsOutputReference" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclereferencelist"

chroniclereferencelist.NewChronicleReferenceListTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleReferenceListTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleReferenceList.ChronicleReferenceListTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



