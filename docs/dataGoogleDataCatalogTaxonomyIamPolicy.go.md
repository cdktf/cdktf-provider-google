# `data_google_data_catalog_taxonomy_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_data_catalog_taxonomy_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy).

# `dataGoogleDataCatalogTaxonomyIamPolicy` Submodule <a name="`dataGoogleDataCatalogTaxonomyIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataCatalogTaxonomyIamPolicy <a name="DataGoogleDataCatalogTaxonomyIamPolicy" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy google_data_catalog_taxonomy_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledatacatalogtaxonomyiampolicy"

datagoogledatacatalogtaxonomyiampolicy.NewDataGoogleDataCatalogTaxonomyIamPolicy(scope Construct, id *string, config DataGoogleDataCatalogTaxonomyIamPolicyConfig) DataGoogleDataCatalogTaxonomyIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig">DataGoogleDataCatalogTaxonomyIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig">DataGoogleDataCatalogTaxonomyIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataCatalogTaxonomyIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledatacatalogtaxonomyiampolicy"

datagoogledatacatalogtaxonomyiampolicy.DataGoogleDataCatalogTaxonomyIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledatacatalogtaxonomyiampolicy"

datagoogledatacatalogtaxonomyiampolicy.DataGoogleDataCatalogTaxonomyIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledatacatalogtaxonomyiampolicy"

datagoogledatacatalogtaxonomyiampolicy.DataGoogleDataCatalogTaxonomyIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledatacatalogtaxonomyiampolicy"

datagoogledatacatalogtaxonomyiampolicy.DataGoogleDataCatalogTaxonomyIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleDataCatalogTaxonomyIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleDataCatalogTaxonomyIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleDataCatalogTaxonomyIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataCatalogTaxonomyIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.taxonomyInput">TaxonomyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.taxonomy">Taxonomy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TaxonomyInput`<sup>Optional</sup> <a name="TaxonomyInput" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.taxonomyInput"></a>

```go
func TaxonomyInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Taxonomy`<sup>Required</sup> <a name="Taxonomy" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.taxonomy"></a>

```go
func Taxonomy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataCatalogTaxonomyIamPolicyConfig <a name="DataGoogleDataCatalogTaxonomyIamPolicyConfig" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledatacatalogtaxonomyiampolicy"

&datagoogledatacatalogtaxonomyiampolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Taxonomy: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.taxonomy">Taxonomy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy#taxonomy DataGoogleDataCatalogTaxonomyIamPolicy#taxonomy}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy#id DataGoogleDataCatalogTaxonomyIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy#project DataGoogleDataCatalogTaxonomyIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy#region DataGoogleDataCatalogTaxonomyIamPolicy#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Taxonomy`<sup>Required</sup> <a name="Taxonomy" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.taxonomy"></a>

```go
Taxonomy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy#taxonomy DataGoogleDataCatalogTaxonomyIamPolicy#taxonomy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy#id DataGoogleDataCatalogTaxonomyIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy#project DataGoogleDataCatalogTaxonomyIamPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleDataCatalogTaxonomyIamPolicy.DataGoogleDataCatalogTaxonomyIamPolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/data_catalog_taxonomy_iam_policy#region DataGoogleDataCatalogTaxonomyIamPolicy#region}.

---



