# `sccV2OrganizationSource` Submodule <a name="`sccV2OrganizationSource` Submodule" id="@cdktf/provider-google.sccV2OrganizationSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationSource <a name="SccV2OrganizationSource" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source google_scc_v2_organization_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.Initializer"></a>

```typescript
import { sccV2OrganizationSource } from '@cdktf/provider-google'

new sccV2OrganizationSource.SccV2OrganizationSource(scope: Construct, id: string, config: SccV2OrganizationSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig">SccV2OrganizationSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig">SccV2OrganizationSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.putTimeouts"></a>

```typescript
public putTimeouts(value: SccV2OrganizationSourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts">SccV2OrganizationSourceTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2OrganizationSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.isConstruct"></a>

```typescript
import { sccV2OrganizationSource } from '@cdktf/provider-google'

sccV2OrganizationSource.SccV2OrganizationSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.isTerraformElement"></a>

```typescript
import { sccV2OrganizationSource } from '@cdktf/provider-google'

sccV2OrganizationSource.SccV2OrganizationSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.isTerraformResource"></a>

```typescript
import { sccV2OrganizationSource } from '@cdktf/provider-google'

sccV2OrganizationSource.SccV2OrganizationSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.generateConfigForImport"></a>

```typescript
import { sccV2OrganizationSource } from '@cdktf/provider-google'

sccV2OrganizationSource.SccV2OrganizationSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SccV2OrganizationSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccV2OrganizationSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccV2OrganizationSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference">SccV2OrganizationSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts">SccV2OrganizationSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.organization">organization</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.timeouts"></a>

```typescript
public readonly timeouts: SccV2OrganizationSourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference">SccV2OrganizationSourceTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccV2OrganizationSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts">SccV2OrganizationSourceTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationSourceConfig <a name="SccV2OrganizationSourceConfig" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.Initializer"></a>

```typescript
import { sccV2OrganizationSource } from '@cdktf/provider-google'

const sccV2OrganizationSourceConfig: sccV2OrganizationSource.SccV2OrganizationSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.displayName">displayName</a></code> | <code>string</code> | The source’s display name. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.organization">organization</a></code> | <code>string</code> | The organization whose Cloud Security Command Center the Source lives in. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.description">description</a></code> | <code>string</code> | The description of the source (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#id SccV2OrganizationSource#id}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts">SccV2OrganizationSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The source’s display name.

A source’s display name must be unique
amongst its siblings, for example, two sources with the same parent
can't share the same display name. The display name must start and end
with a letter or digit, may contain letters, digits, spaces, hyphens,
and underscores, and can be no longer than 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#display_name SccV2OrganizationSource#display_name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization whose Cloud Security Command Center the Source lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#organization SccV2OrganizationSource#organization}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the source (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#description SccV2OrganizationSource#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#id SccV2OrganizationSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccV2OrganizationSourceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts">SccV2OrganizationSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#timeouts SccV2OrganizationSource#timeouts}

---

### SccV2OrganizationSourceTimeouts <a name="SccV2OrganizationSourceTimeouts" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts.Initializer"></a>

```typescript
import { sccV2OrganizationSource } from '@cdktf/provider-google'

const sccV2OrganizationSourceTimeouts: sccV2OrganizationSource.SccV2OrganizationSourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#create SccV2OrganizationSource#create}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#delete SccV2OrganizationSource#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#update SccV2OrganizationSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#create SccV2OrganizationSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#delete SccV2OrganizationSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_source#update SccV2OrganizationSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationSourceTimeoutsOutputReference <a name="SccV2OrganizationSourceTimeoutsOutputReference" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccV2OrganizationSource } from '@cdktf/provider-google'

new sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts">SccV2OrganizationSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccV2OrganizationSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccV2OrganizationSource.SccV2OrganizationSourceTimeouts">SccV2OrganizationSourceTimeouts</a>

---



