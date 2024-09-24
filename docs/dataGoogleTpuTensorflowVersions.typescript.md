# `dataGoogleTpuTensorflowVersions` Submodule <a name="`dataGoogleTpuTensorflowVersions` Submodule" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleTpuTensorflowVersions <a name="DataGoogleTpuTensorflowVersions" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/data-sources/tpu_tensorflow_versions google_tpu_tensorflow_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer"></a>

```typescript
import { dataGoogleTpuTensorflowVersions } from '@cdktf/provider-google'

new dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions(scope: Construct, id: string, config?: DataGoogleTpuTensorflowVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig">DataGoogleTpuTensorflowVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig">DataGoogleTpuTensorflowVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleTpuTensorflowVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct"></a>

```typescript
import { dataGoogleTpuTensorflowVersions } from '@cdktf/provider-google'

dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement"></a>

```typescript
import { dataGoogleTpuTensorflowVersions } from '@cdktf/provider-google'

dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource"></a>

```typescript
import { dataGoogleTpuTensorflowVersions } from '@cdktf/provider-google'

dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.generateConfigForImport"></a>

```typescript
import { dataGoogleTpuTensorflowVersions } from '@cdktf/provider-google'

dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleTpuTensorflowVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleTpuTensorflowVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleTpuTensorflowVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/data-sources/tpu_tensorflow_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleTpuTensorflowVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.versions">versions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.versions"></a>

```typescript
public readonly versions: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleTpuTensorflowVersionsConfig <a name="DataGoogleTpuTensorflowVersionsConfig" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.Initializer"></a>

```typescript
import { dataGoogleTpuTensorflowVersions } from '@cdktf/provider-google'

const dataGoogleTpuTensorflowVersionsConfig: dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/data-sources/tpu_tensorflow_versions#id DataGoogleTpuTensorflowVersions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/data-sources/tpu_tensorflow_versions#project DataGoogleTpuTensorflowVersions#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/data-sources/tpu_tensorflow_versions#zone DataGoogleTpuTensorflowVersions#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/data-sources/tpu_tensorflow_versions#id DataGoogleTpuTensorflowVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/data-sources/tpu_tensorflow_versions#project DataGoogleTpuTensorflowVersions#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/data-sources/tpu_tensorflow_versions#zone DataGoogleTpuTensorflowVersions#zone}.

---



