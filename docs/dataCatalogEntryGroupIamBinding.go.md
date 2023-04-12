# `dataCatalogEntryGroupIamBinding` Submodule <a name="`dataCatalogEntryGroupIamBinding` Submodule" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogEntryGroupIamBinding <a name="DataCatalogEntryGroupIamBinding" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding google_data_catalog_entry_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentrygroupiambinding"

datacatalogentrygroupiambinding.NewDataCatalogEntryGroupIamBinding(scope Construct, id *string, config DataCatalogEntryGroupIamBindingConfig) DataCatalogEntryGroupIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig">DataCatalogEntryGroupIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig">DataCatalogEntryGroupIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.putCondition"></a>

```go
func PutCondition(value DataCatalogEntryGroupIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentrygroupiambinding"

datacatalogentrygroupiambinding.DataCatalogEntryGroupIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentrygroupiambinding"

datacatalogentrygroupiambinding.DataCatalogEntryGroupIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentrygroupiambinding"

datacatalogentrygroupiambinding.DataCatalogEntryGroupIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference">DataCatalogEntryGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.entryGroupInput">EntryGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.entryGroup">EntryGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.condition"></a>

```go
func Condition() DataCatalogEntryGroupIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference">DataCatalogEntryGroupIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.conditionInput"></a>

```go
func ConditionInput() DataCatalogEntryGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a>

---

##### `EntryGroupInput`<sup>Optional</sup> <a name="EntryGroupInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.entryGroupInput"></a>

```go
func EntryGroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `EntryGroup`<sup>Required</sup> <a name="EntryGroup" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.entryGroup"></a>

```go
func EntryGroup() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogEntryGroupIamBindingCondition <a name="DataCatalogEntryGroupIamBindingCondition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentrygroupiambinding"

&datacatalogentrygroupiambinding.DataCatalogEntryGroupIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#expression DataCatalogEntryGroupIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#title DataCatalogEntryGroupIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#description DataCatalogEntryGroupIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#expression DataCatalogEntryGroupIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#title DataCatalogEntryGroupIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#description DataCatalogEntryGroupIamBinding#description}.

---

### DataCatalogEntryGroupIamBindingConfig <a name="DataCatalogEntryGroupIamBindingConfig" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentrygroupiambinding"

&datacatalogentrygroupiambinding.DataCatalogEntryGroupIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntryGroup: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.entryGroup">EntryGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#entry_group DataCatalogEntryGroupIamBinding#entry_group}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#members DataCatalogEntryGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#role DataCatalogEntryGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#id DataCatalogEntryGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#project DataCatalogEntryGroupIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#region DataCatalogEntryGroupIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntryGroup`<sup>Required</sup> <a name="EntryGroup" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.entryGroup"></a>

```go
EntryGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#entry_group DataCatalogEntryGroupIamBinding#entry_group}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#members DataCatalogEntryGroupIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#role DataCatalogEntryGroupIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.condition"></a>

```go
Condition DataCatalogEntryGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#condition DataCatalogEntryGroupIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#id DataCatalogEntryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#project DataCatalogEntryGroupIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_binding#region DataCatalogEntryGroupIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogEntryGroupIamBindingConditionOutputReference <a name="DataCatalogEntryGroupIamBindingConditionOutputReference" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogentrygroupiambinding"

datacatalogentrygroupiambinding.NewDataCatalogEntryGroupIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCatalogEntryGroupIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCatalogEntryGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a>

---



