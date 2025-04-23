# `networkSecurityMirroringEndpointGroupAssociation` Submodule <a name="`networkSecurityMirroringEndpointGroupAssociation` Submodule" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityMirroringEndpointGroupAssociation <a name="NetworkSecurityMirroringEndpointGroupAssociation" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association google_network_security_mirroring_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation(scope: Construct, id: string, config: NetworkSecurityMirroringEndpointGroupAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig">NetworkSecurityMirroringEndpointGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig">NetworkSecurityMirroringEndpointGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId">resetMirroringEndpointGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityMirroringEndpointGroupAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMirroringEndpointGroupAssociationId` <a name="resetMirroringEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId"></a>

```typescript
public resetMirroringEndpointGroupAssociationId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityMirroringEndpointGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityMirroringEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityMirroringEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails">locationsDetails</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput">mirroringEndpointGroupAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput">mirroringEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId">mirroringEndpointGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locations"></a>

```typescript
public readonly locations: NetworkSecurityMirroringEndpointGroupAssociationLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsList</a>

---

##### `locationsDetails`<sup>Required</sup> <a name="locationsDetails" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails"></a>

```typescript
public readonly locationsDetails: NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mirroringEndpointGroupAssociationIdInput`<sup>Optional</sup> <a name="mirroringEndpointGroupAssociationIdInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput"></a>

```typescript
public readonly mirroringEndpointGroupAssociationIdInput: string;
```

- *Type:* string

---

##### `mirroringEndpointGroupInput`<sup>Optional</sup> <a name="mirroringEndpointGroupInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput"></a>

```typescript
public readonly mirroringEndpointGroupInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityMirroringEndpointGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup"></a>

```typescript
public readonly mirroringEndpointGroup: string;
```

- *Type:* string

---

##### `mirroringEndpointGroupAssociationId`<sup>Required</sup> <a name="mirroringEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId"></a>

```typescript
public readonly mirroringEndpointGroupAssociationId: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityMirroringEndpointGroupAssociationConfig <a name="NetworkSecurityMirroringEndpointGroupAssociationConfig" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

const networkSecurityMirroringEndpointGroupAssociationConfig: networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.location">location</a></code> | <code>string</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>string</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.network">network</a></code> | <code>string</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#id NetworkSecurityMirroringEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId">mirroringEndpointGroupAssociationId</a></code> | <code>string</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#project NetworkSecurityMirroringEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#location NetworkSecurityMirroringEndpointGroupAssociation#location}

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup"></a>

```typescript
public readonly mirroringEndpointGroup: string;
```

- *Type:* string

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#mirroring_endpoint_group NetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#network NetworkSecurityMirroringEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#id NetworkSecurityMirroringEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#labels NetworkSecurityMirroringEndpointGroupAssociation#labels}

---

##### `mirroringEndpointGroupAssociationId`<sup>Optional</sup> <a name="mirroringEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId"></a>

```typescript
public readonly mirroringEndpointGroupAssociationId: string;
```

- *Type:* string

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#mirroring_endpoint_group_association_id NetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group_association_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#project NetworkSecurityMirroringEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityMirroringEndpointGroupAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#timeouts NetworkSecurityMirroringEndpointGroupAssociation#timeouts}

---

### NetworkSecurityMirroringEndpointGroupAssociationLocations <a name="NetworkSecurityMirroringEndpointGroupAssociationLocations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

const networkSecurityMirroringEndpointGroupAssociationLocations: networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations = { ... }
```


### NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

const networkSecurityMirroringEndpointGroupAssociationLocationsDetails: networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails = { ... }
```


### NetworkSecurityMirroringEndpointGroupAssociationTimeouts <a name="NetworkSecurityMirroringEndpointGroupAssociationTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

const networkSecurityMirroringEndpointGroupAssociationTimeouts: networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#create NetworkSecurityMirroringEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#delete NetworkSecurityMirroringEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#update NetworkSecurityMirroringEndpointGroupAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#create NetworkSecurityMirroringEndpointGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#delete NetworkSecurityMirroringEndpointGroupAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/network_security_mirroring_endpoint_group_association#update NetworkSecurityMirroringEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get"></a>

```typescript
public get(index: number): NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a>

---


### NetworkSecurityMirroringEndpointGroupAssociationLocationsList <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.get"></a>

```typescript
public get(index: number): NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations">NetworkSecurityMirroringEndpointGroupAssociationLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityMirroringEndpointGroupAssociationLocations;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations">NetworkSecurityMirroringEndpointGroupAssociationLocations</a>

---


### NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityMirroringEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityMirroringEndpointGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

---



