# `dataCatalogTaxonomyIamBinding` Submodule <a name="`dataCatalogTaxonomyIamBinding` Submodule" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTaxonomyIamBinding <a name="DataCatalogTaxonomyIamBinding" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding google_data_catalog_taxonomy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomyiambinding"

datacatalogtaxonomyiambinding.NewDataCatalogTaxonomyIamBinding(scope Construct, id *string, config DataCatalogTaxonomyIamBindingConfig) DataCatalogTaxonomyIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig">DataCatalogTaxonomyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig">DataCatalogTaxonomyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.putCondition"></a>

```go
func PutCondition(value DataCatalogTaxonomyIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomyiambinding"

datacatalogtaxonomyiambinding.DataCatalogTaxonomyIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomyiambinding"

datacatalogtaxonomyiambinding.DataCatalogTaxonomyIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomyiambinding"

datacatalogtaxonomyiambinding.DataCatalogTaxonomyIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference">DataCatalogTaxonomyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.taxonomyInput">TaxonomyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.taxonomy">Taxonomy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.condition"></a>

```go
func Condition() DataCatalogTaxonomyIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference">DataCatalogTaxonomyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.conditionInput"></a>

```go
func ConditionInput() DataCatalogTaxonomyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TaxonomyInput`<sup>Optional</sup> <a name="TaxonomyInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.taxonomyInput"></a>

```go
func TaxonomyInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Taxonomy`<sup>Required</sup> <a name="Taxonomy" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.taxonomy"></a>

```go
func Taxonomy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTaxonomyIamBindingCondition <a name="DataCatalogTaxonomyIamBindingCondition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomyiambinding"

&datacatalogtaxonomyiambinding.DataCatalogTaxonomyIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#expression DataCatalogTaxonomyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#title DataCatalogTaxonomyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#description DataCatalogTaxonomyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#expression DataCatalogTaxonomyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#title DataCatalogTaxonomyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#description DataCatalogTaxonomyIamBinding#description}.

---

### DataCatalogTaxonomyIamBindingConfig <a name="DataCatalogTaxonomyIamBindingConfig" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomyiambinding"

&datacatalogtaxonomyiambinding.DataCatalogTaxonomyIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Role: *string,
	Taxonomy: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#members DataCatalogTaxonomyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#role DataCatalogTaxonomyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.taxonomy">Taxonomy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#taxonomy DataCatalogTaxonomyIamBinding#taxonomy}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#id DataCatalogTaxonomyIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#project DataCatalogTaxonomyIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#region DataCatalogTaxonomyIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#members DataCatalogTaxonomyIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#role DataCatalogTaxonomyIamBinding#role}.

---

##### `Taxonomy`<sup>Required</sup> <a name="Taxonomy" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.taxonomy"></a>

```go
Taxonomy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#taxonomy DataCatalogTaxonomyIamBinding#taxonomy}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.condition"></a>

```go
Condition DataCatalogTaxonomyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#condition DataCatalogTaxonomyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#id DataCatalogTaxonomyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#project DataCatalogTaxonomyIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#region DataCatalogTaxonomyIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTaxonomyIamBindingConditionOutputReference <a name="DataCatalogTaxonomyIamBindingConditionOutputReference" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datacatalogtaxonomyiambinding"

datacatalogtaxonomyiambinding.NewDataCatalogTaxonomyIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCatalogTaxonomyIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCatalogTaxonomyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a>

---



