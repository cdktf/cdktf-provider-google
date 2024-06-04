# `computeNetworkPeeringRoutesConfig` Submodule <a name="`computeNetworkPeeringRoutesConfig` Submodule" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkPeeringRoutesConfig <a name="ComputeNetworkPeeringRoutesConfig" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config google_compute_network_peering_routes_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer"></a>

```typescript
import { computeNetworkPeeringRoutesConfig } from '@cdktf/provider-google'

new computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig(scope: Construct, id: string, config: ComputeNetworkPeeringRoutesConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig">ComputeNetworkPeeringRoutesConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig">ComputeNetworkPeeringRoutesConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeNetworkPeeringRoutesConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct"></a>

```typescript
import { computeNetworkPeeringRoutesConfig } from '@cdktf/provider-google'

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement"></a>

```typescript
import { computeNetworkPeeringRoutesConfig } from '@cdktf/provider-google'

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource"></a>

```typescript
import { computeNetworkPeeringRoutesConfig } from '@cdktf/provider-google'

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport"></a>

```typescript
import { computeNetworkPeeringRoutesConfig } from '@cdktf/provider-google'

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetworkPeeringRoutesConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetworkPeeringRoutesConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetworkPeeringRoutesConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput">exportCustomRoutesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput">importCustomRoutesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peeringInput">peeringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutes">importCustomRoutes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peering">peering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a>

---

##### `exportCustomRoutesInput`<sup>Optional</sup> <a name="exportCustomRoutesInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput"></a>

```typescript
public readonly exportCustomRoutesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importCustomRoutesInput`<sup>Optional</sup> <a name="importCustomRoutesInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput"></a>

```typescript
public readonly importCustomRoutesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `peeringInput`<sup>Optional</sup> <a name="peeringInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peeringInput"></a>

```typescript
public readonly peeringInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeNetworkPeeringRoutesConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes"></a>

```typescript
public readonly exportCustomRoutes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutes"></a>

```typescript
public readonly importCustomRoutes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peering"></a>

```typescript
public readonly peering: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkPeeringRoutesConfigConfig <a name="ComputeNetworkPeeringRoutesConfigConfig" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.Initializer"></a>

```typescript
import { computeNetworkPeeringRoutesConfig } from '@cdktf/provider-google'

const computeNetworkPeeringRoutesConfigConfig: computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to export the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes">importCustomRoutes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to import the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.network">network</a></code> | <code>string</code> | The name of the primary network for the peering. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.peering">peering</a></code> | <code>string</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#id ComputeNetworkPeeringRoutesConfig#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#project ComputeNetworkPeeringRoutesConfig#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes"></a>

```typescript
public readonly exportCustomRoutes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to export the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#export_custom_routes ComputeNetworkPeeringRoutesConfig#export_custom_routes}

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes"></a>

```typescript
public readonly importCustomRoutes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to import the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#import_custom_routes ComputeNetworkPeeringRoutesConfig#import_custom_routes}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the primary network for the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#network ComputeNetworkPeeringRoutesConfig#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.peering"></a>

```typescript
public readonly peering: string;
```

- *Type:* string

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#peering ComputeNetworkPeeringRoutesConfig#peering}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#id ComputeNetworkPeeringRoutesConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#project ComputeNetworkPeeringRoutesConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkPeeringRoutesConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#timeouts ComputeNetworkPeeringRoutesConfig#timeouts}

---

### ComputeNetworkPeeringRoutesConfigTimeouts <a name="ComputeNetworkPeeringRoutesConfigTimeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.Initializer"></a>

```typescript
import { computeNetworkPeeringRoutesConfig } from '@cdktf/provider-google'

const computeNetworkPeeringRoutesConfigTimeouts: computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#create ComputeNetworkPeeringRoutesConfig#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#delete ComputeNetworkPeeringRoutesConfig#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#update ComputeNetworkPeeringRoutesConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#create ComputeNetworkPeeringRoutesConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#delete ComputeNetworkPeeringRoutesConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/compute_network_peering_routes_config#update ComputeNetworkPeeringRoutesConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference <a name="ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeNetworkPeeringRoutesConfig } from '@cdktf/provider-google'

new computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNetworkPeeringRoutesConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>

---



