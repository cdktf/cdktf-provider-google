# `google_data_catalog_taxonomy_iam_member`

Refer to the Terraform Registory for docs: [`google_data_catalog_taxonomy_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member).

# `dataCatalogTaxonomyIamMember` Submodule <a name="`dataCatalogTaxonomyIamMember` Submodule" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTaxonomyIamMember <a name="DataCatalogTaxonomyIamMember" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member google_data_catalog_taxonomy_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.Initializer"></a>

```typescript
import { dataCatalogTaxonomyIamMember } from '@cdktf/provider-google'

new dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember(scope: Construct, id: string, config: DataCatalogTaxonomyIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig">DataCatalogTaxonomyIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig">DataCatalogTaxonomyIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.putCondition"></a>

```typescript
public putCondition(value: DataCatalogTaxonomyIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition">DataCatalogTaxonomyIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isConstruct"></a>

```typescript
import { dataCatalogTaxonomyIamMember } from '@cdktf/provider-google'

dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isTerraformElement"></a>

```typescript
import { dataCatalogTaxonomyIamMember } from '@cdktf/provider-google'

dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isTerraformResource"></a>

```typescript
import { dataCatalogTaxonomyIamMember } from '@cdktf/provider-google'

dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference">DataCatalogTaxonomyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition">DataCatalogTaxonomyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.taxonomyInput">taxonomyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.taxonomy">taxonomy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.condition"></a>

```typescript
public readonly condition: DataCatalogTaxonomyIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference">DataCatalogTaxonomyIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: DataCatalogTaxonomyIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition">DataCatalogTaxonomyIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `taxonomyInput`<sup>Optional</sup> <a name="taxonomyInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.taxonomyInput"></a>

```typescript
public readonly taxonomyInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.taxonomy"></a>

```typescript
public readonly taxonomy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTaxonomyIamMemberCondition <a name="DataCatalogTaxonomyIamMemberCondition" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition.Initializer"></a>

```typescript
import { dataCatalogTaxonomyIamMember } from '@cdktf/provider-google'

const dataCatalogTaxonomyIamMemberCondition: dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#expression DataCatalogTaxonomyIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#title DataCatalogTaxonomyIamMember#title}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#description DataCatalogTaxonomyIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#expression DataCatalogTaxonomyIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#title DataCatalogTaxonomyIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#description DataCatalogTaxonomyIamMember#description}.

---

### DataCatalogTaxonomyIamMemberConfig <a name="DataCatalogTaxonomyIamMemberConfig" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.Initializer"></a>

```typescript
import { dataCatalogTaxonomyIamMember } from '@cdktf/provider-google'

const dataCatalogTaxonomyIamMemberConfig: dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#member DataCatalogTaxonomyIamMember#member}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#role DataCatalogTaxonomyIamMember#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.taxonomy">taxonomy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#taxonomy DataCatalogTaxonomyIamMember#taxonomy}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition">DataCatalogTaxonomyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#id DataCatalogTaxonomyIamMember#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#project DataCatalogTaxonomyIamMember#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#region DataCatalogTaxonomyIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#member DataCatalogTaxonomyIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#role DataCatalogTaxonomyIamMember#role}.

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.taxonomy"></a>

```typescript
public readonly taxonomy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#taxonomy DataCatalogTaxonomyIamMember#taxonomy}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: DataCatalogTaxonomyIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition">DataCatalogTaxonomyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#condition DataCatalogTaxonomyIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#id DataCatalogTaxonomyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#project DataCatalogTaxonomyIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/data_catalog_taxonomy_iam_member#region DataCatalogTaxonomyIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTaxonomyIamMemberConditionOutputReference <a name="DataCatalogTaxonomyIamMemberConditionOutputReference" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { dataCatalogTaxonomyIamMember } from '@cdktf/provider-google'

new dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition">DataCatalogTaxonomyIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCatalogTaxonomyIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamMember.DataCatalogTaxonomyIamMemberCondition">DataCatalogTaxonomyIamMemberCondition</a>

---



