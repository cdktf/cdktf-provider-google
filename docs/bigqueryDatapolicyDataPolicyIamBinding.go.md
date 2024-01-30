# `bigqueryDatapolicyDataPolicyIamBinding` Submodule <a name="`bigqueryDatapolicyDataPolicyIamBinding` Submodule" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyDataPolicyIamBinding <a name="BigqueryDatapolicyDataPolicyIamBinding" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding google_bigquery_datapolicy_data_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerydatapolicydatapolicyiambinding"

bigquerydatapolicydatapolicyiambinding.NewBigqueryDatapolicyDataPolicyIamBinding(scope Construct, id *string, config BigqueryDatapolicyDataPolicyIamBindingConfig) BigqueryDatapolicyDataPolicyIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig">BigqueryDatapolicyDataPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig">BigqueryDatapolicyDataPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.putCondition"></a>

```go
func PutCondition(value BigqueryDatapolicyDataPolicyIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryDatapolicyDataPolicyIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerydatapolicydatapolicyiambinding"

bigquerydatapolicydatapolicyiambinding.BigqueryDatapolicyDataPolicyIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerydatapolicydatapolicyiambinding"

bigquerydatapolicydatapolicyiambinding.BigqueryDatapolicyDataPolicyIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerydatapolicydatapolicyiambinding"

bigquerydatapolicydatapolicyiambinding.BigqueryDatapolicyDataPolicyIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerydatapolicydatapolicyiambinding"

bigquerydatapolicydatapolicyiambinding.BigqueryDatapolicyDataPolicyIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BigqueryDatapolicyDataPolicyIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryDatapolicyDataPolicyIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryDatapolicyDataPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryDatapolicyDataPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference">BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.condition"></a>

```go
func Condition() BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference">BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.conditionInput"></a>

```go
func ConditionInput() BigqueryDatapolicyDataPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a>

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dataPolicyIdInput"></a>

```go
func DataPolicyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dataPolicyId"></a>

```go
func DataPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyDataPolicyIamBindingCondition <a name="BigqueryDatapolicyDataPolicyIamBindingCondition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerydatapolicydatapolicyiambinding"

&bigquerydatapolicydatapolicyiambinding.BigqueryDatapolicyDataPolicyIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#expression BigqueryDatapolicyDataPolicyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#title BigqueryDatapolicyDataPolicyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#description BigqueryDatapolicyDataPolicyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#expression BigqueryDatapolicyDataPolicyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#title BigqueryDatapolicyDataPolicyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#description BigqueryDatapolicyDataPolicyIamBinding#description}.

---

### BigqueryDatapolicyDataPolicyIamBindingConfig <a name="BigqueryDatapolicyDataPolicyIamBindingConfig" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerydatapolicydatapolicyiambinding"

&bigquerydatapolicydatapolicyiambinding.BigqueryDatapolicyDataPolicyIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataPolicyId: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#data_policy_id BigqueryDatapolicyDataPolicyIamBinding#data_policy_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#members BigqueryDatapolicyDataPolicyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#role BigqueryDatapolicyDataPolicyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#id BigqueryDatapolicyDataPolicyIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#location BigqueryDatapolicyDataPolicyIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#project BigqueryDatapolicyDataPolicyIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.dataPolicyId"></a>

```go
DataPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#data_policy_id BigqueryDatapolicyDataPolicyIamBinding#data_policy_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#members BigqueryDatapolicyDataPolicyIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#role BigqueryDatapolicyDataPolicyIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.condition"></a>

```go
Condition BigqueryDatapolicyDataPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#condition BigqueryDatapolicyDataPolicyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#id BigqueryDatapolicyDataPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#location BigqueryDatapolicyDataPolicyIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/bigquery_datapolicy_data_policy_iam_binding#project BigqueryDatapolicyDataPolicyIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference <a name="BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigquerydatapolicydatapolicyiambinding"

bigquerydatapolicydatapolicyiambinding.NewBigqueryDatapolicyDataPolicyIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryDatapolicyDataPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a>

---



