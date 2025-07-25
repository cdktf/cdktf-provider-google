# `apigeeEnvironmentKeyvaluemaps` Submodule <a name="`apigeeEnvironmentKeyvaluemaps` Submodule" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentKeyvaluemaps <a name="ApigeeEnvironmentKeyvaluemaps" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps google_apigee_environment_keyvaluemaps}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.Initializer"></a>

```typescript
import { apigeeEnvironmentKeyvaluemaps } from '@cdktf/provider-google'

new apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps(scope: Construct, id: string, config: ApigeeEnvironmentKeyvaluemapsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig">ApigeeEnvironmentKeyvaluemapsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig">ApigeeEnvironmentKeyvaluemapsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeEnvironmentKeyvaluemapsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts">ApigeeEnvironmentKeyvaluemapsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeEnvironmentKeyvaluemaps resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isConstruct"></a>

```typescript
import { apigeeEnvironmentKeyvaluemaps } from '@cdktf/provider-google'

apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isTerraformElement"></a>

```typescript
import { apigeeEnvironmentKeyvaluemaps } from '@cdktf/provider-google'

apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isTerraformResource"></a>

```typescript
import { apigeeEnvironmentKeyvaluemaps } from '@cdktf/provider-google'

apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.generateConfigForImport"></a>

```typescript
import { apigeeEnvironmentKeyvaluemaps } from '@cdktf/provider-google'

apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigeeEnvironmentKeyvaluemaps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeEnvironmentKeyvaluemaps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeEnvironmentKeyvaluemaps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentKeyvaluemaps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference">ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts">ApigeeEnvironmentKeyvaluemapsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference">ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference</a>

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeEnvironmentKeyvaluemapsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts">ApigeeEnvironmentKeyvaluemapsTimeouts</a>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemaps.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentKeyvaluemapsConfig <a name="ApigeeEnvironmentKeyvaluemapsConfig" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.Initializer"></a>

```typescript
import { apigeeEnvironmentKeyvaluemaps } from '@cdktf/provider-google'

const apigeeEnvironmentKeyvaluemapsConfig: apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.envId">envId</a></code> | <code>string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.name">name</a></code> | <code>string</code> | Required. ID of the key value map. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#id ApigeeEnvironmentKeyvaluemaps#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts">ApigeeEnvironmentKeyvaluemapsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#env_id ApigeeEnvironmentKeyvaluemaps#env_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Required. ID of the key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#name ApigeeEnvironmentKeyvaluemaps#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#id ApigeeEnvironmentKeyvaluemaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentKeyvaluemapsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts">ApigeeEnvironmentKeyvaluemapsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#timeouts ApigeeEnvironmentKeyvaluemaps#timeouts}

---

### ApigeeEnvironmentKeyvaluemapsTimeouts <a name="ApigeeEnvironmentKeyvaluemapsTimeouts" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts.Initializer"></a>

```typescript
import { apigeeEnvironmentKeyvaluemaps } from '@cdktf/provider-google'

const apigeeEnvironmentKeyvaluemapsTimeouts: apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#create ApigeeEnvironmentKeyvaluemaps#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#delete ApigeeEnvironmentKeyvaluemaps#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#create ApigeeEnvironmentKeyvaluemaps#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment_keyvaluemaps#delete ApigeeEnvironmentKeyvaluemaps#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference <a name="ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeEnvironmentKeyvaluemaps } from '@cdktf/provider-google'

new apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts">ApigeeEnvironmentKeyvaluemapsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeEnvironmentKeyvaluemapsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeEnvironmentKeyvaluemaps.ApigeeEnvironmentKeyvaluemapsTimeouts">ApigeeEnvironmentKeyvaluemapsTimeouts</a>

---



