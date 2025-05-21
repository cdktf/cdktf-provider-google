// https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocGdcSparkApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotations to associate with this application. Annotations may be used to store client information, but are not used by the server. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#annotations DataprocGdcSparkApplication#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * An ApplicationEnvironment from which to inherit configuration properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#application_environment DataprocGdcSparkApplication#application_environment}
  */
  readonly applicationEnvironment?: string;
  /**
  * List of container image uris for additional file dependencies. Dependent files are sequentially copied from each image. If a file with the same name exists in 2 images then the file from later image is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#dependency_images DataprocGdcSparkApplication#dependency_images}
  */
  readonly dependencyImages?: string[];
  /**
  * User-provided human-readable name to be used in user interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#display_name DataprocGdcSparkApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels to associate with this application. Labels may be used for filtering and billing tracking. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#labels DataprocGdcSparkApplication#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the spark application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#location DataprocGdcSparkApplication#location}
  */
  readonly location: string;
  /**
  * The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#namespace DataprocGdcSparkApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}
  */
  readonly project?: string;
  /**
  * application-specific properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#properties DataprocGdcSparkApplication#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The id of the service instance to which this spark application belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#serviceinstance DataprocGdcSparkApplication#serviceinstance}
  */
  readonly serviceinstance: string;
  /**
  * The id of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#spark_application_id DataprocGdcSparkApplication#spark_application_id}
  */
  readonly sparkApplicationId: string;
  /**
  * The Dataproc version of this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#version DataprocGdcSparkApplication#version}
  */
  readonly version?: string;
  /**
  * pyspark_application_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#pyspark_application_config DataprocGdcSparkApplication#pyspark_application_config}
  */
  readonly pysparkApplicationConfig?: DataprocGdcSparkApplicationPysparkApplicationConfig;
  /**
  * spark_application_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#spark_application_config DataprocGdcSparkApplication#spark_application_config}
  */
  readonly sparkApplicationConfig?: DataprocGdcSparkApplicationSparkApplicationConfig;
  /**
  * spark_r_application_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#spark_r_application_config DataprocGdcSparkApplication#spark_r_application_config}
  */
  readonly sparkRApplicationConfig?: DataprocGdcSparkApplicationSparkRApplicationConfig;
  /**
  * spark_sql_application_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#spark_sql_application_config DataprocGdcSparkApplication#spark_sql_application_config}
  */
  readonly sparkSqlApplicationConfig?: DataprocGdcSparkApplicationSparkSqlApplicationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#timeouts DataprocGdcSparkApplication#timeouts}
  */
  readonly timeouts?: DataprocGdcSparkApplicationTimeouts;
}
export interface DataprocGdcSparkApplicationPysparkApplicationConfig {
  /**
  * HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver.  Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The HCFS URI of the main Python file to use as the driver. Must be a .py file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#main_python_file_uri DataprocGdcSparkApplication#main_python_file_uri}
  */
  readonly mainPythonFileUri: string;
  /**
  * HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#python_file_uris DataprocGdcSparkApplication#python_file_uris}
  */
  readonly pythonFileUris?: string[];
}

export function dataprocGdcSparkApplicationPysparkApplicationConfigToTerraform(struct?: DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference | DataprocGdcSparkApplicationPysparkApplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    main_python_file_uri: cdktf.stringToTerraform(struct!.mainPythonFileUri),
    python_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pythonFileUris),
  }
}


export function dataprocGdcSparkApplicationPysparkApplicationConfigToHclTerraform(struct?: DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference | DataprocGdcSparkApplicationPysparkApplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jarFileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    main_python_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.mainPythonFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pythonFileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocGdcSparkApplicationPysparkApplicationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainPythonFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainPythonFileUri = this._mainPythonFileUri;
    }
    if (this._pythonFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonFileUris = this._pythonFileUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocGdcSparkApplicationPysparkApplicationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._jarFileUris = undefined;
      this._mainPythonFileUri = undefined;
      this._pythonFileUris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._jarFileUris = value.jarFileUris;
      this._mainPythonFileUri = value.mainPythonFileUri;
      this._pythonFileUris = value.pythonFileUris;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[]; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[]) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[]; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[]) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris;
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // main_python_file_uri - computed: false, optional: false, required: true
  private _mainPythonFileUri?: string; 
  public get mainPythonFileUri() {
    return this.getStringAttribute('main_python_file_uri');
  }
  public set mainPythonFileUri(value: string) {
    this._mainPythonFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainPythonFileUriInput() {
    return this._mainPythonFileUri;
  }

  // python_file_uris - computed: false, optional: true, required: false
  private _pythonFileUris?: string[]; 
  public get pythonFileUris() {
    return this.getListAttribute('python_file_uris');
  }
  public set pythonFileUris(value: string[]) {
    this._pythonFileUris = value;
  }
  public resetPythonFileUris() {
    this._pythonFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFileUrisInput() {
    return this._pythonFileUris;
  }
}
export interface DataprocGdcSparkApplicationSparkApplicationConfig {
  /**
  * HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: '.jar', '.tar', '.tar.gz', '.tgz', and '.zip'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver. Do not include arguments that can be set as application properties, such as '--conf', since a collision can occur that causes an incorrect application submission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be placed in the working directory of each executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The name of the driver main class. The jar file that contains the class must be in the classpath or specified in 'jar_file_uris'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#main_class DataprocGdcSparkApplication#main_class}
  */
  readonly mainClass?: string;
  /**
  * The HCFS URI of the jar file that contains the main class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#main_jar_file_uri DataprocGdcSparkApplication#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
}

export function dataprocGdcSparkApplicationSparkApplicationConfigToTerraform(struct?: DataprocGdcSparkApplicationSparkApplicationConfigOutputReference | DataprocGdcSparkApplicationSparkApplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
  }
}


export function dataprocGdcSparkApplicationSparkApplicationConfigToHclTerraform(struct?: DataprocGdcSparkApplicationSparkApplicationConfigOutputReference | DataprocGdcSparkApplicationSparkApplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jarFileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    main_class: {
      value: cdktf.stringToHclTerraform(struct!.mainClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_jar_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.mainJarFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocGdcSparkApplicationSparkApplicationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocGdcSparkApplicationSparkApplicationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._mainClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._mainJarFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainJarFileUri = this._mainJarFileUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocGdcSparkApplicationSparkApplicationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._jarFileUris = undefined;
      this._mainClass = undefined;
      this._mainJarFileUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._jarFileUris = value.jarFileUris;
      this._mainClass = value.mainClass;
      this._mainJarFileUri = value.mainJarFileUri;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[]; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[]) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[]; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[]) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris;
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // main_class - computed: false, optional: true, required: false
  private _mainClass?: string; 
  public get mainClass() {
    return this.getStringAttribute('main_class');
  }
  public set mainClass(value: string) {
    this._mainClass = value;
  }
  public resetMainClass() {
    this._mainClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass;
  }

  // main_jar_file_uri - computed: false, optional: true, required: false
  private _mainJarFileUri?: string; 
  public get mainJarFileUri() {
    return this.getStringAttribute('main_jar_file_uri');
  }
  public set mainJarFileUri(value: string) {
    this._mainJarFileUri = value;
  }
  public resetMainJarFileUri() {
    this._mainJarFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainJarFileUriInput() {
    return this._mainJarFileUri;
  }
}
export interface DataprocGdcSparkApplicationSparkRApplicationConfig {
  /**
  * HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * The arguments to pass to the driver.  Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}
  */
  readonly args?: string[];
  /**
  * HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * The HCFS URI of the main R file to use as the driver. Must be a .R file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#main_r_file_uri DataprocGdcSparkApplication#main_r_file_uri}
  */
  readonly mainRFileUri: string;
}

export function dataprocGdcSparkApplicationSparkRApplicationConfigToTerraform(struct?: DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference | DataprocGdcSparkApplicationSparkRApplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    main_r_file_uri: cdktf.stringToTerraform(struct!.mainRFileUri),
  }
}


export function dataprocGdcSparkApplicationSparkRApplicationConfigToHclTerraform(struct?: DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference | DataprocGdcSparkApplicationSparkRApplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    main_r_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.mainRFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocGdcSparkApplicationSparkRApplicationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._mainRFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainRFileUri = this._mainRFileUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocGdcSparkApplicationSparkRApplicationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._args = undefined;
      this._fileUris = undefined;
      this._mainRFileUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._args = value.args;
      this._fileUris = value.fileUris;
      this._mainRFileUri = value.mainRFileUri;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[]; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[]) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[]; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[]) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris;
  }

  // main_r_file_uri - computed: false, optional: false, required: true
  private _mainRFileUri?: string; 
  public get mainRFileUri() {
    return this.getStringAttribute('main_r_file_uri');
  }
  public set mainRFileUri(value: string) {
    this._mainRFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainRFileUriInput() {
    return this._mainRFileUri;
  }
}
export interface DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct {
  /**
  * The queries to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#queries DataprocGdcSparkApplication#queries}
  */
  readonly queries: string[];
}

export function dataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructToTerraform(struct?: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference | DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queries),
  }
}


export function dataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructToHclTerraform(struct?: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference | DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queries = value.queries;
    }
  }

  // queries - computed: false, optional: false, required: true
  private _queries?: string[]; 
  public get queries() {
    return this.getListAttribute('queries');
  }
  public set queries(value: string[]) {
    this._queries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }
}
export interface DataprocGdcSparkApplicationSparkSqlApplicationConfig {
  /**
  * HCFS URIs of jar files to be added to the Spark CLASSPATH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}
  */
  readonly jarFileUris?: string[];
  /**
  * The HCFS URI of the script that contains SQL queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#query_file_uri DataprocGdcSparkApplication#query_file_uri}
  */
  readonly queryFileUri?: string;
  /**
  * Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#script_variables DataprocGdcSparkApplication#script_variables}
  */
  readonly scriptVariables?: { [key: string]: string };
  /**
  * query_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#query_list DataprocGdcSparkApplication#query_list}
  */
  readonly queryList?: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct;
}

export function dataprocGdcSparkApplicationSparkSqlApplicationConfigToTerraform(struct?: DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference | DataprocGdcSparkApplicationSparkSqlApplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jarFileUris),
    query_file_uri: cdktf.stringToTerraform(struct!.queryFileUri),
    script_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scriptVariables),
    query_list: dataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructToTerraform(struct!.queryList),
  }
}


export function dataprocGdcSparkApplicationSparkSqlApplicationConfigToHclTerraform(struct?: DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference | DataprocGdcSparkApplicationSparkSqlApplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jar_file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jarFileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.queryFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.scriptVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query_list: {
      value: dataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructToHclTerraform(struct!.queryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocGdcSparkApplicationSparkSqlApplicationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jarFileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarFileUris = this._jarFileUris;
    }
    if (this._queryFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFileUri = this._queryFileUri;
    }
    if (this._scriptVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptVariables = this._scriptVariables;
    }
    if (this._queryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocGdcSparkApplicationSparkSqlApplicationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarFileUris = undefined;
      this._queryFileUri = undefined;
      this._scriptVariables = undefined;
      this._queryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarFileUris = value.jarFileUris;
      this._queryFileUri = value.queryFileUri;
      this._scriptVariables = value.scriptVariables;
      this._queryList.internalValue = value.queryList;
    }
  }

  // jar_file_uris - computed: false, optional: true, required: false
  private _jarFileUris?: string[]; 
  public get jarFileUris() {
    return this.getListAttribute('jar_file_uris');
  }
  public set jarFileUris(value: string[]) {
    this._jarFileUris = value;
  }
  public resetJarFileUris() {
    this._jarFileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarFileUrisInput() {
    return this._jarFileUris;
  }

  // query_file_uri - computed: false, optional: true, required: false
  private _queryFileUri?: string; 
  public get queryFileUri() {
    return this.getStringAttribute('query_file_uri');
  }
  public set queryFileUri(value: string) {
    this._queryFileUri = value;
  }
  public resetQueryFileUri() {
    this._queryFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFileUriInput() {
    return this._queryFileUri;
  }

  // script_variables - computed: false, optional: true, required: false
  private _scriptVariables?: { [key: string]: string }; 
  public get scriptVariables() {
    return this.getStringMapAttribute('script_variables');
  }
  public set scriptVariables(value: { [key: string]: string }) {
    this._scriptVariables = value;
  }
  public resetScriptVariables() {
    this._scriptVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVariablesInput() {
    return this._scriptVariables;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList = new DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference(this, "query_list");
  public get queryList() {
    return this._queryList;
  }
  public putQueryList(value: DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct) {
    this._queryList.internalValue = value;
  }
  public resetQueryList() {
    this._queryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList.internalValue;
  }
}
export interface DataprocGdcSparkApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#create DataprocGdcSparkApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#delete DataprocGdcSparkApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#update DataprocGdcSparkApplication#update}
  */
  readonly update?: string;
}

export function dataprocGdcSparkApplicationTimeoutsToTerraform(struct?: DataprocGdcSparkApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataprocGdcSparkApplicationTimeoutsToHclTerraform(struct?: DataprocGdcSparkApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprocGdcSparkApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataprocGdcSparkApplicationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocGdcSparkApplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application google_dataproc_gdc_spark_application}
*/
export class DataprocGdcSparkApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_gdc_spark_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataprocGdcSparkApplication to import
  * @param importFromId The id of the existing DataprocGdcSparkApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataprocGdcSparkApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataproc_gdc_spark_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application google_dataproc_gdc_spark_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocGdcSparkApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocGdcSparkApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_gdc_spark_application',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.36.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._applicationEnvironment = config.applicationEnvironment;
    this._dependencyImages = config.dependencyImages;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._namespace = config.namespace;
    this._project = config.project;
    this._properties = config.properties;
    this._serviceinstance = config.serviceinstance;
    this._sparkApplicationId = config.sparkApplicationId;
    this._version = config.version;
    this._pysparkApplicationConfig.internalValue = config.pysparkApplicationConfig;
    this._sparkApplicationConfig.internalValue = config.sparkApplicationConfig;
    this._sparkRApplicationConfig.internalValue = config.sparkRApplicationConfig;
    this._sparkSqlApplicationConfig.internalValue = config.sparkSqlApplicationConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // application_environment - computed: false, optional: true, required: false
  private _applicationEnvironment?: string; 
  public get applicationEnvironment() {
    return this.getStringAttribute('application_environment');
  }
  public set applicationEnvironment(value: string) {
    this._applicationEnvironment = value;
  }
  public resetApplicationEnvironment() {
    this._applicationEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEnvironmentInput() {
    return this._applicationEnvironment;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dependency_images - computed: false, optional: true, required: false
  private _dependencyImages?: string[]; 
  public get dependencyImages() {
    return this.getListAttribute('dependency_images');
  }
  public set dependencyImages(value: string[]) {
    this._dependencyImages = value;
  }
  public resetDependencyImages() {
    this._dependencyImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyImagesInput() {
    return this._dependencyImages;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // monitoring_endpoint - computed: true, optional: false, required: false
  public get monitoringEndpoint() {
    return this.getStringAttribute('monitoring_endpoint');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // output_uri - computed: true, optional: false, required: false
  public get outputUri() {
    return this.getStringAttribute('output_uri');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // serviceinstance - computed: false, optional: false, required: true
  private _serviceinstance?: string; 
  public get serviceinstance() {
    return this.getStringAttribute('serviceinstance');
  }
  public set serviceinstance(value: string) {
    this._serviceinstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceinstanceInput() {
    return this._serviceinstance;
  }

  // spark_application_id - computed: false, optional: false, required: true
  private _sparkApplicationId?: string; 
  public get sparkApplicationId() {
    return this.getStringAttribute('spark_application_id');
  }
  public set sparkApplicationId(value: string) {
    this._sparkApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkApplicationIdInput() {
    return this._sparkApplicationId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // pyspark_application_config - computed: false, optional: true, required: false
  private _pysparkApplicationConfig = new DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference(this, "pyspark_application_config");
  public get pysparkApplicationConfig() {
    return this._pysparkApplicationConfig;
  }
  public putPysparkApplicationConfig(value: DataprocGdcSparkApplicationPysparkApplicationConfig) {
    this._pysparkApplicationConfig.internalValue = value;
  }
  public resetPysparkApplicationConfig() {
    this._pysparkApplicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pysparkApplicationConfigInput() {
    return this._pysparkApplicationConfig.internalValue;
  }

  // spark_application_config - computed: false, optional: true, required: false
  private _sparkApplicationConfig = new DataprocGdcSparkApplicationSparkApplicationConfigOutputReference(this, "spark_application_config");
  public get sparkApplicationConfig() {
    return this._sparkApplicationConfig;
  }
  public putSparkApplicationConfig(value: DataprocGdcSparkApplicationSparkApplicationConfig) {
    this._sparkApplicationConfig.internalValue = value;
  }
  public resetSparkApplicationConfig() {
    this._sparkApplicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkApplicationConfigInput() {
    return this._sparkApplicationConfig.internalValue;
  }

  // spark_r_application_config - computed: false, optional: true, required: false
  private _sparkRApplicationConfig = new DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference(this, "spark_r_application_config");
  public get sparkRApplicationConfig() {
    return this._sparkRApplicationConfig;
  }
  public putSparkRApplicationConfig(value: DataprocGdcSparkApplicationSparkRApplicationConfig) {
    this._sparkRApplicationConfig.internalValue = value;
  }
  public resetSparkRApplicationConfig() {
    this._sparkRApplicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkRApplicationConfigInput() {
    return this._sparkRApplicationConfig.internalValue;
  }

  // spark_sql_application_config - computed: false, optional: true, required: false
  private _sparkSqlApplicationConfig = new DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference(this, "spark_sql_application_config");
  public get sparkSqlApplicationConfig() {
    return this._sparkSqlApplicationConfig;
  }
  public putSparkSqlApplicationConfig(value: DataprocGdcSparkApplicationSparkSqlApplicationConfig) {
    this._sparkSqlApplicationConfig.internalValue = value;
  }
  public resetSparkSqlApplicationConfig() {
    this._sparkSqlApplicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSqlApplicationConfigInput() {
    return this._sparkSqlApplicationConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocGdcSparkApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocGdcSparkApplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      application_environment: cdktf.stringToTerraform(this._applicationEnvironment),
      dependency_images: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyImages),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      namespace: cdktf.stringToTerraform(this._namespace),
      project: cdktf.stringToTerraform(this._project),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      serviceinstance: cdktf.stringToTerraform(this._serviceinstance),
      spark_application_id: cdktf.stringToTerraform(this._sparkApplicationId),
      version: cdktf.stringToTerraform(this._version),
      pyspark_application_config: dataprocGdcSparkApplicationPysparkApplicationConfigToTerraform(this._pysparkApplicationConfig.internalValue),
      spark_application_config: dataprocGdcSparkApplicationSparkApplicationConfigToTerraform(this._sparkApplicationConfig.internalValue),
      spark_r_application_config: dataprocGdcSparkApplicationSparkRApplicationConfigToTerraform(this._sparkRApplicationConfig.internalValue),
      spark_sql_application_config: dataprocGdcSparkApplicationSparkSqlApplicationConfigToTerraform(this._sparkSqlApplicationConfig.internalValue),
      timeouts: dataprocGdcSparkApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      application_environment: {
        value: cdktf.stringToHclTerraform(this._applicationEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dependency_images: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependencyImages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      serviceinstance: {
        value: cdktf.stringToHclTerraform(this._serviceinstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spark_application_id: {
        value: cdktf.stringToHclTerraform(this._sparkApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pyspark_application_config: {
        value: dataprocGdcSparkApplicationPysparkApplicationConfigToHclTerraform(this._pysparkApplicationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocGdcSparkApplicationPysparkApplicationConfigList",
      },
      spark_application_config: {
        value: dataprocGdcSparkApplicationSparkApplicationConfigToHclTerraform(this._sparkApplicationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocGdcSparkApplicationSparkApplicationConfigList",
      },
      spark_r_application_config: {
        value: dataprocGdcSparkApplicationSparkRApplicationConfigToHclTerraform(this._sparkRApplicationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocGdcSparkApplicationSparkRApplicationConfigList",
      },
      spark_sql_application_config: {
        value: dataprocGdcSparkApplicationSparkSqlApplicationConfigToHclTerraform(this._sparkSqlApplicationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprocGdcSparkApplicationSparkSqlApplicationConfigList",
      },
      timeouts: {
        value: dataprocGdcSparkApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataprocGdcSparkApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
