# `dataGoogleSpannerDatabaseIamPolicy` Submodule <a name="`dataGoogleSpannerDatabaseIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSpannerDatabaseIamPolicy <a name="DataGoogleSpannerDatabaseIamPolicy" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy google_spanner_database_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.Initializer"></a>

```typescript
import { dataGoogleSpannerDatabaseIamPolicy } from '@cdktf/provider-google'

new dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy(scope: Construct, id: string, config: DataGoogleSpannerDatabaseIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig">DataGoogleSpannerDatabaseIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig">DataGoogleSpannerDatabaseIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSpannerDatabaseIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleSpannerDatabaseIamPolicy } from '@cdktf/provider-google'

dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleSpannerDatabaseIamPolicy } from '@cdktf/provider-google'

dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleSpannerDatabaseIamPolicy } from '@cdktf/provider-google'

dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleSpannerDatabaseIamPolicy } from '@cdktf/provider-google'

dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleSpannerDatabaseIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSpannerDatabaseIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSpannerDatabaseIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSpannerDatabaseIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSpannerDatabaseIamPolicyConfig <a name="DataGoogleSpannerDatabaseIamPolicyConfig" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleSpannerDatabaseIamPolicy } from '@cdktf/provider-google'

const dataGoogleSpannerDatabaseIamPolicyConfig: dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy#database DataGoogleSpannerDatabaseIamPolicy#database}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.instance">instance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy#instance DataGoogleSpannerDatabaseIamPolicy#instance}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy#id DataGoogleSpannerDatabaseIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy#project DataGoogleSpannerDatabaseIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy#database DataGoogleSpannerDatabaseIamPolicy#database}.

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy#instance DataGoogleSpannerDatabaseIamPolicy#instance}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy#id DataGoogleSpannerDatabaseIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSpannerDatabaseIamPolicy.DataGoogleSpannerDatabaseIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/spanner_database_iam_policy#project DataGoogleSpannerDatabaseIamPolicy#project}.

---



