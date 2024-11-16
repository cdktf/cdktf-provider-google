# `dataGoogleIamTestablePermissions` Submodule <a name="`dataGoogleIamTestablePermissions` Submodule" id="@cdktf/provider-google.dataGoogleIamTestablePermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamTestablePermissions <a name="DataGoogleIamTestablePermissions" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions google_iam_testable_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer"></a>

```typescript
import { dataGoogleIamTestablePermissions } from '@cdktf/provider-google'

new dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions(scope: Construct, id: string, config: DataGoogleIamTestablePermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig">DataGoogleIamTestablePermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig">DataGoogleIamTestablePermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetCustomSupportLevel">resetCustomSupportLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetStages">resetStages</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCustomSupportLevel` <a name="resetCustomSupportLevel" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetCustomSupportLevel"></a>

```typescript
public resetCustomSupportLevel(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStages` <a name="resetStages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetStages"></a>

```typescript
public resetStages(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleIamTestablePermissions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct"></a>

```typescript
import { dataGoogleIamTestablePermissions } from '@cdktf/provider-google'

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement"></a>

```typescript
import { dataGoogleIamTestablePermissions } from '@cdktf/provider-google'

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource"></a>

```typescript
import { dataGoogleIamTestablePermissions } from '@cdktf/provider-google'

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport"></a>

```typescript
import { dataGoogleIamTestablePermissions } from '@cdktf/provider-google'

dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleIamTestablePermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIamTestablePermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIamTestablePermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIamTestablePermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList">DataGoogleIamTestablePermissionsPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevelInput">customSupportLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceNameInput">fullResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stagesInput">stagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevel">customSupportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceName">fullResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stages">stages</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.permissions"></a>

```typescript
public readonly permissions: DataGoogleIamTestablePermissionsPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList">DataGoogleIamTestablePermissionsPermissionsList</a>

---

##### `customSupportLevelInput`<sup>Optional</sup> <a name="customSupportLevelInput" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevelInput"></a>

```typescript
public readonly customSupportLevelInput: string;
```

- *Type:* string

---

##### `fullResourceNameInput`<sup>Optional</sup> <a name="fullResourceNameInput" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceNameInput"></a>

```typescript
public readonly fullResourceNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stagesInput"></a>

```typescript
public readonly stagesInput: string[];
```

- *Type:* string[]

---

##### `customSupportLevel`<sup>Required</sup> <a name="customSupportLevel" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevel"></a>

```typescript
public readonly customSupportLevel: string;
```

- *Type:* string

---

##### `fullResourceName`<sup>Required</sup> <a name="fullResourceName" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceName"></a>

```typescript
public readonly fullResourceName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamTestablePermissionsConfig <a name="DataGoogleIamTestablePermissionsConfig" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.Initializer"></a>

```typescript
import { dataGoogleIamTestablePermissions } from '@cdktf/provider-google'

const dataGoogleIamTestablePermissionsConfig: dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.fullResourceName">fullResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.customSupportLevel">customSupportLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions#id DataGoogleIamTestablePermissions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.stages">stages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions#stages DataGoogleIamTestablePermissions#stages}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fullResourceName`<sup>Required</sup> <a name="fullResourceName" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.fullResourceName"></a>

```typescript
public readonly fullResourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}.

---

##### `customSupportLevel`<sup>Optional</sup> <a name="customSupportLevel" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.customSupportLevel"></a>

```typescript
public readonly customSupportLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions#id DataGoogleIamTestablePermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/iam_testable_permissions#stages DataGoogleIamTestablePermissions#stages}.

---

### DataGoogleIamTestablePermissionsPermissions <a name="DataGoogleIamTestablePermissionsPermissions" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions.Initializer"></a>

```typescript
import { dataGoogleIamTestablePermissions } from '@cdktf/provider-google'

const dataGoogleIamTestablePermissionsPermissions: dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamTestablePermissionsPermissionsList <a name="DataGoogleIamTestablePermissionsPermissionsList" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer"></a>

```typescript
import { dataGoogleIamTestablePermissions } from '@cdktf/provider-google'

new dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.get"></a>

```typescript
public get(index: number): DataGoogleIamTestablePermissionsPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamTestablePermissionsPermissionsOutputReference <a name="DataGoogleIamTestablePermissionsPermissionsOutputReference" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamTestablePermissions } from '@cdktf/provider-google'

new dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.apiDisabled">apiDisabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.customSupportLevel">customSupportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions">DataGoogleIamTestablePermissionsPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiDisabled`<sup>Required</sup> <a name="apiDisabled" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.apiDisabled"></a>

```typescript
public readonly apiDisabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `customSupportLevel`<sup>Required</sup> <a name="customSupportLevel" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.customSupportLevel"></a>

```typescript
public readonly customSupportLevel: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamTestablePermissionsPermissions;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions">DataGoogleIamTestablePermissionsPermissions</a>

---



