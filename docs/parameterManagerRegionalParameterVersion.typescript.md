# `parameterManagerRegionalParameterVersion` Submodule <a name="`parameterManagerRegionalParameterVersion` Submodule" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ParameterManagerRegionalParameterVersion <a name="ParameterManagerRegionalParameterVersion" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version google_parameter_manager_regional_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer"></a>

```typescript
import { parameterManagerRegionalParameterVersion } from '@cdktf/provider-google'

new parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion(scope: Construct, id: string, config: ParameterManagerRegionalParameterVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig">ParameterManagerRegionalParameterVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig">ParameterManagerRegionalParameterVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: ParameterManagerRegionalParameterVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ParameterManagerRegionalParameterVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isConstruct"></a>

```typescript
import { parameterManagerRegionalParameterVersion } from '@cdktf/provider-google'

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformElement"></a>

```typescript
import { parameterManagerRegionalParameterVersion } from '@cdktf/provider-google'

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformResource"></a>

```typescript
import { parameterManagerRegionalParameterVersion } from '@cdktf/provider-google'

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport"></a>

```typescript
import { parameterManagerRegionalParameterVersion } from '@cdktf/provider-google'

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ParameterManagerRegionalParameterVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ParameterManagerRegionalParameterVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ParameterManagerRegionalParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ParameterManagerRegionalParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference">ParameterManagerRegionalParameterVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterDataInput">parameterDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterInput">parameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterVersionIdInput">parameterVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterData">parameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterVersionId">parameterVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.kmsKeyVersion"></a>

```typescript
public readonly kmsKeyVersion: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.timeouts"></a>

```typescript
public readonly timeouts: ParameterManagerRegionalParameterVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference">ParameterManagerRegionalParameterVersionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parameterDataInput`<sup>Optional</sup> <a name="parameterDataInput" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterDataInput"></a>

```typescript
public readonly parameterDataInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterInput"></a>

```typescript
public readonly parameterInput: string;
```

- *Type:* string

---

##### `parameterVersionIdInput`<sup>Optional</sup> <a name="parameterVersionIdInput" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterVersionIdInput"></a>

```typescript
public readonly parameterVersionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ParameterManagerRegionalParameterVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `parameterData`<sup>Required</sup> <a name="parameterData" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterData"></a>

```typescript
public readonly parameterData: string;
```

- *Type:* string

---

##### `parameterVersionId`<sup>Required</sup> <a name="parameterVersionId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterVersionId"></a>

```typescript
public readonly parameterVersionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ParameterManagerRegionalParameterVersionConfig <a name="ParameterManagerRegionalParameterVersionConfig" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.Initializer"></a>

```typescript
import { parameterManagerRegionalParameterVersion } from '@cdktf/provider-google'

const parameterManagerRegionalParameterVersionConfig: parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameter">parameter</a></code> | <code>string</code> | Parameter Manager Regional Parameter resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameterData">parameterData</a></code> | <code>string</code> | The Regional Parameter data. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameterVersionId">parameterVersionId</a></code> | <code>string</code> | Version ID of the Regional Parameter Version Resource. This must be unique within the Regional Parameter. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The current state of Regional Parameter Version. This field is only applicable for updating Regional Parameter Version. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#id ParameterManagerRegionalParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

Parameter Manager Regional Parameter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#parameter ParameterManagerRegionalParameterVersion#parameter}

---

##### `parameterData`<sup>Required</sup> <a name="parameterData" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameterData"></a>

```typescript
public readonly parameterData: string;
```

- *Type:* string

The Regional Parameter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#parameter_data ParameterManagerRegionalParameterVersion#parameter_data}

---

##### `parameterVersionId`<sup>Required</sup> <a name="parameterVersionId" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameterVersionId"></a>

```typescript
public readonly parameterVersionId: string;
```

- *Type:* string

Version ID of the Regional Parameter Version Resource. This must be unique within the Regional Parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#parameter_version_id ParameterManagerRegionalParameterVersion#parameter_version_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The current state of Regional Parameter Version. This field is only applicable for updating Regional Parameter Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#disabled ParameterManagerRegionalParameterVersion#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#id ParameterManagerRegionalParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ParameterManagerRegionalParameterVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#timeouts ParameterManagerRegionalParameterVersion#timeouts}

---

### ParameterManagerRegionalParameterVersionTimeouts <a name="ParameterManagerRegionalParameterVersionTimeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.Initializer"></a>

```typescript
import { parameterManagerRegionalParameterVersion } from '@cdktf/provider-google'

const parameterManagerRegionalParameterVersionTimeouts: parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#create ParameterManagerRegionalParameterVersion#create}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#delete ParameterManagerRegionalParameterVersion#delete}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#update ParameterManagerRegionalParameterVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#create ParameterManagerRegionalParameterVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#delete ParameterManagerRegionalParameterVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/parameter_manager_regional_parameter_version#update ParameterManagerRegionalParameterVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ParameterManagerRegionalParameterVersionTimeoutsOutputReference <a name="ParameterManagerRegionalParameterVersionTimeoutsOutputReference" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { parameterManagerRegionalParameterVersion } from '@cdktf/provider-google'

new parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ParameterManagerRegionalParameterVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>

---



